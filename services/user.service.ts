import { OAuth2Client } from "google-auth-library";
import { db, sequelize } from "../models";
import { USER_AUTH_PROVIDERS } from "../constants/constants";
import { User } from "../models/types/types";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function verifyGoogleToken(idToken: string) {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return {
      providerId: payload?.sub,
      email: payload?.email,
      name: payload?.name,
      emailVerified: payload?.email_verified,
    };

  } catch (error) {
    console.log(error);

  }
}


export async function resolveUser(authData: {
  provider: USER_AUTH_PROVIDERS.GOOGLE;
  providerId: string;
  email: string | null;
  name: string | null;
  avatar?: string | null;
  emailVerified: boolean;
}) {
  return sequelize.transaction(async (tx) => {
      /**
       * 1. Provider already exists → login
       */
      const existingProvider = await db.UserAuth.findOne({
        where: {
          provider: authData.provider,
          provider_id: authData.providerId,
        },
        include: [
          {
            model: User,
            as: 'user'
          }
        ],
        transaction: tx,
      });
      console.log(existingProvider);


      if (existingProvider) {
        return existingProvider.user!;
      }

      /**
       * 2. Try linking by verified email
      */
      let user: User | null = null;

      if (authData.email && authData.emailVerified) {
        user = await db.User.findOne({
          where: { email: authData.email },
          transaction: tx,
        });
      }

      /**
       * 3. Create user if not found
      */
      if (!user) {
        user = await db.User.create(
          {
            email: authData.email,
            name: authData.name,
            is_email_verified: authData.emailVerified,
          },
          { transaction: tx }
        );
      }

      /**
       * 4. Link provider
      */
      await db.UserAuth.create(
        {
          provider: authData.provider,
          provider_id: authData.providerId,
          user_id: user.id,
        },
        { transaction: tx }
      );

      return user;
  });
}
