import type { LoginRequest, User } from '../../../types/user.types';
import { api } from './index'

export const authApi = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        // Login
        login: build.mutation<User, LoginRequest>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Auth"],
        }),
        // Signup
        signup: build.mutation({
            query: (data) => ({
                url: 'signup',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),
        verifyEmail: build.mutation({
            query: (data) => ({
                url: 'verify-code',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        // Forgot Password
        resetPasswordRequest: build.mutation({
            query: (data) => ({
                url: 'http://34.170.191.96:3000/api/password/reset-request',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        resetPasswordverifyEmail: build.mutation({
            query: (data) => ({
                url: 'http://34.170.191.96:3000/api/password/verify-code',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        createPasswordReset: build.mutation({
            query: (data) => ({
                url: 'http://34.170.191.96:3000/api/password/reset-password',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useVerifyEmailMutation,
    useResetPasswordRequestMutation,
    useResetPasswordverifyEmailMutation,
    useCreatePasswordResetMutation
} = authApi;
