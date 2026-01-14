import type { LoginRequest, SignUpRequest, User } from '../../../types/user.types';
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
        signup: build.mutation<User, SignUpRequest>({
            query: (data) => ({
                url: 'signup',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        // Forgot Password
        resetPasswordRequest: build.mutation({
            query: (data) => ({
                url: 'forgot-password',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        verifyEmail: build.mutation({
            query: (data) => ({
                url: 'verify-otp',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        resetPassword: build.mutation({
            query: (data) => ({
                url: 'reset-password',
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
    useResetPasswordMutation
} = authApi;
