import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { db } from "../models";
import { NotFoundError, UnauthorizedError } from "../utils/ApiError";
import bcrypt from 'bcrypt'
import { generateAuthTokens } from "../utils/token";
import { getcookie } from "../utils/cookie.utils";
import { renderEjsFile } from "../utils/common.utils";

// LOGIN
const showLogin = async (req: Request, res: Response, next: NextFunction) => {
    let token = getcookie(req);    
    if (!token) {
        const error = req.flash('error')
        const message = req.flash('success')
        const formValue = req.flash('formValue')[0];
        return renderEjsFile(req, res, 'admin/login.ejs', { message, error, formValue });
    } else {
        const Admin = await db.Admin.findOne({ where: { token: token } })
        if (!Admin) {
            const error = req.flash('error')
            const message = req.flash('success')
            const formValue = req.flash('formValue')[0];
            return renderEjsFile(req, res, 'admin/auth/login.ejs', { message, error, formValue });
        }
        res.redirect("/admin/dashboard")
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })

    await schema.validateAsync(req.body);

    const admin = await db.Admin.findOne({
        where: {
            email
        }
    });

    if (!admin) return next(new NotFoundError("Admin Not Found"));


    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) return next(new UnauthorizedError("Invalid Credentials"));;

    const { accessToken, refreshToken } = await generateAuthTokens(admin.id);

    return res.status(200).json({
        id: admin.id,
        email: email,
        name: admin.name,
        accessToken,
        refreshToken
    });
};

export default {
    showLogin,
    login
}