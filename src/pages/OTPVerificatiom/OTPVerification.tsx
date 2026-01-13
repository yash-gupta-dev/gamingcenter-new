import { Gamepad2 } from 'lucide-react'

import Loader from '../../loader/Loader'
import { useNavigate } from 'react-router-dom'
import OTPInput from '../../components/otpInput/OTPInput';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';


const OTPVerification = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false)

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setModalOpen(true)
    }
    
    const onModalClose = () => {
        setModalOpen(false)
        navigate('/login')
    }

    if (false) {
        return <Loader />
    }

    return (
        <div className="flex-col p-8 z-10 min-h-screen w-full flex items-center justify-center bg-background py-12">
            <Modal isOpen={modalOpen} onClose={onModalClose}>
                <div className="mb-5">
                    <h2 className='text-lg'>Verification Success!</h2>
                </div>
            </Modal>

            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-secondary rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                    <Gamepad2 className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">VERIFY OTP</h1>
                <p className="text-muted-foreground">Type OTP to reset password.</p>
            </div>

            {/* Card */}
            <div className="border lg:w-1/3 md:w-1/2 border-border p-8 rounded-2xl shadow-sm shadow-gray">
                <div className="space-y-4">
                    <form className="space-y-4" onSubmit={onSubmit} noValidate>
                        <div className="space-y-2">
                            <OTPInput length={4} onComplete={() => { }} />
                            {/* {errors.email && <p className='text-custom-red text-xs'>{errors.email.message}</p>} */}
                        </div>
                        <button className="w-full h-12 bg-secondary hover:bg-secondary/50 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.3)]" type='submit'>
                            Continue
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

export default OTPVerification
