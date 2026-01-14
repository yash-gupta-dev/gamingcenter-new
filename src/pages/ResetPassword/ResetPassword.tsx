import { Gamepad2, X } from 'lucide-react'

import Loader from '../../loader/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import { useEffect, useState } from 'react'
import { useResetPasswordMutation } from '../../services/redux/apis/auth'
import { useResetPasswordForm } from './resetPassword.schema'
import { getApiErrorMessage } from '../../utils/errors.utils'


const ResetPassword = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [modalOpen, setModalOpen] = useState(false)
    const [resetPassword, { isError, isLoading, error: apiError }] = useResetPasswordMutation()
    const [errorMessage, setErrorMessage] = useState<string | null>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useResetPasswordForm();

    useEffect(() => {
        if (isError) {
            const errorMessage = getApiErrorMessage(apiError);
            setErrorMessage(errorMessage);
            setModalOpen(true)
        }
    }, [isError])

    const onSubmit = async (data: { password: string }) => {
        await resetPassword({ password: data.password, token: state.resetToken, user_id: state.userId }).unwrap();
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
        !isError && navigate('/login')
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
                    <h2 className='text-lg'>{errorMessage || "Password Reset Successfull!"}</h2>
                </div>
            </Modal>
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-secondary rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                    <Gamepad2 className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">RESET PASSWORD</h1>
                <p className="text-muted-foreground">Choose a strong Password.</p>
            </div>

            {/* Card */}
            <div className="border lg:w-1/3 md:w-1/2 border-border p-8 rounded-2xl shadow-sm shadow-gray">
                <div className="space-y-4">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="space-y-2">
                            <input
                                {...register('password')}
                                type="password"
                                placeholder="Enter Password"
                                className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                            />
                            {errors.password && <p className='text-custom-red text-xs'>{errors.password.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <input
                                {...register('confirmPassword')}
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                            />
                            {errors.confirmPassword && <p className='text-custom-red text-xs'>{errors.confirmPassword.message}</p>}
                        </div>
                        <button className="w-full h-12 bg-secondary hover:bg-secondary/50 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.3)]" type='submit'>
                            Reset password
                        </button>
                    </form>
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <a href="/login" className="text-secondary hover:underline font-bold">Back to Login</a>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
