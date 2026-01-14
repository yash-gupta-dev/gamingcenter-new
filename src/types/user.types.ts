export interface User {
    id: string,
    email: string;
    name: string;
    accessToken: string;
    refreshToken: string;
}
export interface SignUpRequest {
    name: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface GoogleLoginRequest {
    code: string;
}

export type ForgotPasswordRequest  = Pick<LoginRequest, 'email'>

