export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
}

export interface User extends LoginResponse {
    email: string;
    name: string;
}