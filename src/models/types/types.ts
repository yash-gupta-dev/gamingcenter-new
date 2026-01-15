import { Model, ModelStatic, Optional, Sequelize } from "sequelize";
import { EVENT_STATUS, PRIORITY, ROOM_TYPE, STATUS, USER_AUTH_PROVIDERS } from '../../constants/constants'

// User
export interface UserAttributes {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  is_email_verified: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    'id' | 'is_email_verified' | 'email' | 'name'
  > { }

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public name?: string;
  public email?: string;
  public is_email_verified!: boolean;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

// UserAuth
export interface UserAuthAttributes {
  id: number;
  user_id: number;
  provider: USER_AUTH_PROVIDERS.GOOGLE | USER_AUTH_PROVIDERS.EMAIL;
  provider_id?: string;
  password_hash?: string;
  created_at?: Date;

}

export interface UserAuthCreationAttributes
  extends Optional<
    UserAuthAttributes,
    'id' | 'password_hash' | 'provider_id' | 'created_at'
  > { }

export class UserAuth
  extends Model<UserAuthAttributes, UserAuthCreationAttributes>
  implements UserAuthAttributes {
  public id!: number;
  public user_id!: number;
  public provider!: USER_AUTH_PROVIDERS.GOOGLE | USER_AUTH_PROVIDERS.EMAIL;
  public provider_id?: string;
  public password_hash?: string;

  public readonly created_at!: Date;

  // associations
  public user?: User;
}

// refresh token
export interface RefreshTokenAttributes {
  id: number;
  user_id: number;
  token_hash: string;
  user_agent?: string;
  expires_at?: Date;
  revoked_at?: Date;
  created_at?: Date;
}

export interface RefreshTokenCreationAttributes
  extends Optional<
    RefreshTokenAttributes,
    'id'
  > { }

export class RefreshToken
  extends Model<RefreshTokenAttributes, RefreshTokenCreationAttributes>
  implements RefreshTokenAttributes {
  public id!: number;
  public user_id!: number;
  public token_hash!: string;
  public user_agent!: string;
  public expires_at?: Date;
  public revoked_at?: Date;

  public readonly created_at!: Date;

  // associations
  public user?: User;
}

// Reset/Forget Password
export interface OtpAttributes {
  id: number;
  email: string;
  otp: string;
  created_at?: Date;
}

export interface OtpCreationAttributes
  extends Optional<
    OtpAttributes,
    'id' | 'created_at'
  > { }

export class Otp
  extends Model<OtpAttributes, OtpCreationAttributes>
  implements OtpAttributes {
  public id!: number;
  public email: string;
  public otp: string;

  public readonly created_at!: Date;
}

// OTP
export interface ForgetPasswordAttributes {
  id: number;
  user_id: number;
  token_hash: string;
  expires_at?: Date;
  used_at?: Date;
  created_at?: Date;
}

export interface ForgetPasswordCreationAttributes
  extends Optional<
    ForgetPasswordAttributes,
    'id'
  > { }

export class ForgetPassword
  extends Model<ForgetPasswordAttributes, ForgetPasswordCreationAttributes>
  implements ForgetPasswordAttributes {
  public id!: number;
  public user_id!: number;
  public token_hash!: string;
  public expires_at?: Date;
  public used_at?: Date;

  public readonly created_at!: Date;

  // associations
  public user?: User;
}

// admin
export interface AdminAttributes {
  id: number;
  name: string;
  email: string;
  passowrd_hash: string;
  createdAt?: Date;
}

export interface AdminCreationAttributes
  extends Optional<
    AdminAttributes,
    'id' | 'createdAt'
  > { }

export class Admin
  extends Model<AdminAttributes, AdminCreationAttributes>
  implements AdminAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public passowrd_hash!: string;

  public readonly createdAt: Date;
}

// notifications
export interface NotificationAttributes {
  id: number;
  type: string;
  title: string;
  message: string;
  is_read: boolean;
  sent_at?: Date;
}

export interface NotificationCreationAttributes
  extends Optional<
    NotificationAttributes,
    'id'
  > { }

export class Notification
  extends Model<NotificationAttributes, NotificationCreationAttributes>
  implements NotificationAttributes {
  public id!: number;
  public type!: string;
  public title!: string;
  public message!: string;
  public is_read!: boolean;

  public readonly sent_at: Date;
}

// Game
export interface GameAttributes {
  id: number;
  name: string;
  description: string;
  gameEngine: string;
  mobile_support?: boolean;
  multiplayer?: boolean;
}

export interface GameCreationAttributes
  extends Optional<
    GameAttributes,
    'id'
  > { }

export class Game
  extends Model<GameAttributes, GameCreationAttributes>
  implements GameAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public gameEngine!: string;
  public mobile_support: boolean;
  public multiplayer: boolean;

  public readonly created_at: Date;
  public readonly updated_at: Date;
}


export interface DB {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;

  User: typeof User;
  UserAuth: typeof UserAuth;
  RefreshToken: typeof RefreshToken;
  ForgetPassword: typeof ForgetPassword;
  Otp: typeof Otp;
  Game: typeof Game;
  Notification: ModelStatic<Model>;
  Admin: ModelStatic<Model>;
}

export interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    'id' | 'is_email_verified'
  > { }
