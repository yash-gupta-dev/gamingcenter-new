import { Response, Request, NextFunction } from "express";
import { db, sequelize } from "../models";
import Joi from "joi";
import bcrypt from 'bcrypt'
import { BadRequestError, NotFoundError, UnauthorizedError } from "../utils/ApiError";
import { resolveUser, verifyGoogleToken } from "../services/user.service";
import { oauth_google, USER_AUTH_PROVIDERS } from "../constants/constants";
import { generateAuthTokens, generateRefreshToken } from "../utils/token";
import { Op } from "sequelize";
import { addMinutes, currentate } from "../utils/date.utils";
import { generateOtp } from "../utils/otp.utils";
import axios from "axios";

// SIGNUP
const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  })

  await schema.validateAsync(req.body);

  sequelize.transaction(async (tx) => {
    const existingUser = await db.User.findOne({
      where: { email },
      transaction: tx,
      lock: tx.LOCK.UPDATE
    });

    if (existingUser) {
      return next(new BadRequestError("User with this email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.User.create({
      name,
      email
    }, {
      transaction: tx,
    });

    await db.UserAuth.create({
      user_id: user.id,
      password_hash: hashedPassword,
      provider: USER_AUTH_PROVIDERS.EMAIL
    }, {
      transaction: tx,
    })

    const { accessToken, refreshToken } = await generateAuthTokens(user.id);

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken
    });
  })
};


// LOGIN
const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
  })

  await schema.validateAsync(req.body);

  const user = await db.User.findOne({
    where: {
      email
    }
  });

  if (!user) return next(new NotFoundError("User Not Found"));

  const userAuth = await db.UserAuth.findOne({
    where: {
      user_id: user.id
    }
  })

  const isMatch = await bcrypt.compare(password, userAuth.password_hash);
  if (!isMatch) return next(new UnauthorizedError("Invalid Credentials"));;

  const { accessToken, refreshToken } = await generateAuthTokens(user.id);

  await userAuth.save();

  return res.status(200).json({
    id: user.id,
    email: email,
    name: user.name,
    accessToken,
    refreshToken
  });
};

// Verify OTP
const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
  const { otp, email } = req.body;

  const schema = Joi.object({
    otp: Joi.string().length(4).required(),
    email: Joi.string().email().required(),
  })

  await schema.validateAsync(req.body);

  const otpData = await db.Otp.findOne({
    where: {
      otp,
      email
    }
  });

  if (!otpData) return next(new UnauthorizedError("Invalid or Expired OTP"));

  const user = await db.User.findOne({ where: { email } })

  // const user = await db.User.create({
  //   email,
  // })

  // await db.UserAuth.create({
  //   user_id: user.id,
  //   provider: USER_AUTH_PROVIDERS.EMAIL
  // })

  return res.status(200).json({
    message: 'OTP Verified Successfully',
    userId: user.id
  });
};


// LOGIN WITH GOOGLE
const loginWithGoogle = async (req: Request, res: Response, next: NextFunction) => {
  const { code } = req.body;

  const schema = Joi.object({
    code: Joi.string().required(),
  });

  await schema.validateAsync(req.body);

  const oauthRequest = {
    url: new URL("https://oauth2.googleapis.com/token"),
    params: {
      client_id: oauth_google.client_id,
      client_secret: oauth_google.client_secret,
      code,
      grant_type: "authorization_code",
      redirect_uri: oauth_google.redirect_uri,
    },
  };  

  const oauthResponse = await axios.post(
    oauthRequest.url.toString(),
    null,
    { params: oauthRequest.params }
  )

  const oauthResponseData = oauthResponse.data;
  
  const googleUser = await verifyGoogleToken(oauthResponseData.id_token);
  const user = await resolveUser({ ...googleUser, provider: USER_AUTH_PROVIDERS.GOOGLE });
  
  const { accessToken, refreshToken } = await generateAuthTokens(user.id);
  res.json({ 
    id: user.id,
    email: user.email,
    name: user.name,
    accessToken,
    refreshToken
  });
};


// REFRESH ACCESS TOKEN
const refreshAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  // const { refreshToken, deviceId } = req.body;

  // const schema = Joi.object({
  //   refreshToken: Joi.string().required(),
  //   deviceId: Joi.string().required(),
  // });

  // await schema.validateAsync(req.body);

  // const sessions = await db.RefreshToken.findAll({
  //   where: {
  //     revoked_at: null,
  //     expires_at: { [Op.gt]: new Date() },
  //   },
  // });

  // const session = await findMatchingRefreshToken(refreshToken, sessions);

  // if (!session) {
  //   await db.RefreshToken.update(
  //     { revoked_at: new Date() },
  //     { where: { user_id: deviceId } }
  //   );
  //   return next(new UnauthorizedError("Session revoked"));
  // }

  // session.revoked_at = new Date();
  // await session.save();

  // const user = await db.User.findByPk(session.user_id);
  // if (!user) {
  //   return next(new UnauthorizedError("User not found"));
  // }

  // const { accessToken, refreshToken: newRefreshToken } = await generateAuthTokens(user.id);

  // return res.status(200).json({
  //   accessToken,
  //   refreshToken: newRefreshToken,
  // });
};

// Forget Password
const forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  await schema.validateAsync(req.body);

  const user = await db.User.findOne({
    where: {
      email
    }
  });

  const resetToken = generateRefreshToken();
  const hash = await bcrypt.hash(resetToken, 10);

  if (user?.email) {
    await db.ForgetPassword.destroy({
      where: {
        user_id: user.id
      }
    });

    await db.ForgetPassword.create({
      token_hash: hash,
      user_id: user.id,
      expires_at: addMinutes(new Date(), 15)
    });

    await db.Otp.create({
      email,
      otp: generateOtp()
    })
  }

  return res.status(200).json({
    message: "Password Request Generated",
    resetToken
  });
};


// Reset Forget Password
const resetForgetPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { token, user_id, password } = req.body;

  const schema = Joi.object({
    token: Joi.string().required(),
    user_id: Joi.number().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  });

  await schema.validateAsync(req.body);

  let passwordResetToken = await db.ForgetPassword.findOne({
    where: {
      user_id: user_id,
      expires_at: {
        [Op.gte]: currentate()
      }
    }
  });


  if (!passwordResetToken) {
    return next(new UnauthorizedError("Invalid or expired password reset token"));
  }

  const isValid = await bcrypt.compare(token, passwordResetToken.token_hash);

  if (!isValid) {
    return next(new UnauthorizedError("Invalid or expired password reset token"));
  }

  const hash = await bcrypt.hash(password, 10);

  await db.UserAuth.update({
    password_hash: hash
  }, {
    where: {
      user_id
    }
  });

  passwordResetToken.used_at = currentate()

  return res.status(200).json({
    message: "Password Reset Successfull",
  });
};

export default {
  login,
  signUp,
  verifyOtp,
  loginWithGoogle,
  refreshAccessToken,
  forgetPassword,
  resetForgetPassword,
}