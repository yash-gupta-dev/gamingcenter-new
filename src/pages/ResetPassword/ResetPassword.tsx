import { Gamepad2 } from 'lucide-react'

import Loader from '../../loader/Loader'
import { useNavigate } from 'react-router-dom'


const ResetPassword = () => {
    const navigate = useNavigate()
    if (false) {
        return <Loader />
    }

    const onSubmit = () => {        
        navigate('/login')
    }

    return (
        <div className="flex-col p-8 z-10 min-h-screen w-full flex items-center justify-center bg-background py-12">
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
                    <form className="space-y-4" onSubmit={onSubmit} noValidate>
                        <div className="space-y-2">
                          <input
                                // {...register('password')}
                                type="password"
                                placeholder="Enter Password"
                                className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                            />
                            {/* {errors.email && <p className='text-custom-red text-xs'>{errors.email.message}</p>} */}
                        </div>
                        <div className="space-y-2">
                          <input
                                // {...register('password')}
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                            />
                            {/* {errors.email && <p className='text-custom-red text-xs'>{errors.email.message}</p>} */}
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
