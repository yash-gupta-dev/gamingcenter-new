import { Gamepad2, X } from 'lucide-react'

import Loader from '../../loader/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { useResetPasswordRequestMutation } from '../../services/redux/apis/auth';
import type { ForgotPasswordRequest } from '../../types/user.types';
import Modal from '../../components/modal/Modal';
import { useEffect, useState } from 'react';
import { getApiErrorMessage } from '../../utils/errors.utils';
import { useForgotPasswordForm } from './forgotPassword.schema';
import TextInput from '../../components/TextInput/TextInput';


const ForgotPassword = () => {
    const navigate = useNavigate();
    const [forgotPassword, { isError, isLoading, error: apiError }] = useResetPasswordRequestMutation()
    const [modalOpen, setModalOpen] = useState(false)
    const [resetToken, setResetToken] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>("");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues
    } = useForgotPasswordForm();

    useEffect(() => {
        if (isError) {
            const errorMessage = getApiErrorMessage(apiError);
            setErrorMessage(errorMessage);
            setModalOpen(true)
        }
    }, [isError])


    const onSubmit = async (data: ForgotPasswordRequest) => {
        const response = await forgotPassword(data).unwrap();
        setResetToken(response.resetToken)
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false);
        const value = getValues('email');
        isValid && !isError && navigate('/otp-verification', {
            state: {
                email: value,
                resetToken
            }
        })
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="flex-col p-8 z-10 min-h-screen w-full flex items-center justify-center bg-background py-12">
            <Modal isOpen={modalOpen} onClose={onModalClose} Icon={isError ? <div className="p-4 mb-5 bg-gray rounded-full">
                <X className='text-custom-red' strokeWidth={4} />
            </div> : null}>
                <div className="mb-5">
                    <h2 className='text-lg'>{errorMessage || "OTP sent to your email"}</h2>
                </div>
            </Modal>
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-secondary rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                    <Gamepad2 className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">FORGOT PASSWORD?</h1>
                <p className="text-muted-foreground">Type your email to Reset Password.</p>
            </div>

            {/* Card */}
            <div className="border lg:w-1/3 md:w-1/2 border-border p-8 rounded-2xl shadow-sm shadow-gray">
                <div className="space-y-4">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextInput
                            register={register}
                            name={'email'}
                            placeholder='Email Address'
                            error={errors.email}
                        />
                        <button className="w-full h-12 bg-secondary hover:bg-secondary/50 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.3)]" type='submit'>
                            Continue
                        </button>
                    </form>
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <Link to="/login" className="text-secondary hover:underline font-bold">Back to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
