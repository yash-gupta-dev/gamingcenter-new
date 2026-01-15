import { Gamepad2, X } from 'lucide-react'

import { useSignupMutation } from '../../services/redux/apis/auth'
import Loader from '../../loader/Loader'
import { useAddGameForm, type AddGameValues } from './addGame.schema';
import Modal from '../../components/modal/Modal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiErrorMessage } from '../../utils/errors.utils';
import AppWrapper from '../../HOC/AppWrapper';
import Dropdown from '../../components/dropdown/Dropdown';
import Checkbox from '../../components/checkbox/Checkbox';
import FileInput from '../../components/fileInput/FileInput';
import { GAME_MEME_TYPE, GIF_MEME_TYPE, IMAGE_MEME_TYPE } from '../../constants/game.constants';
import { Controller } from 'react-hook-form';

const AddGame = () => {
    const navigate = useNavigate();

    const [signup, { isLoading, isError, error: apiError }] = useSignupMutation();
    const [modalOpen, setModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>("")

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useAddGameForm();

    useEffect(() => {
        if (isError) {
            const errorMessage = getApiErrorMessage(apiError);
            setErrorMessage(errorMessage);
            setModalOpen(true)
        }
    }, [isError])

    const onSubmit = async (data: AddGameValues) => {
        console.log(data);

        // const response = await signup({
        //     name: data.name,
        //     email: data.email,
        //     password: data.password,
        // }).unwrap();
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
        isValid && !isError && navigate('/')
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <AppWrapper>
            <div className="flex flex-col items-center">
                <Modal isOpen={modalOpen} onClose={onModalClose} Icon={isError ? <div className="p-4 mb-5 bg-gray rounded-full">
                    <X className='text-custom-red' strokeWidth={4} />
                </div> : null}>
                    <div className="mb-5">
                        <h2 className='text-lg'>{errorMessage || "Game Created Successfully!"}</h2>
                    </div>
                </Modal>
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-secondary rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                        <Gamepad2 className="w-8 h-8 text-secondary" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">Add Game</h1>
                    <p className="text-muted-foreground">Add your game to the platform</p>
                </div>

                {/* Card */}
                <div className="border lg:w-1/2 md:w-1/2 border-border p-8 rounded-2xl shadow-sm shadow-gray">
                    <div className="space-y-4">
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="space-y-2">
                                <input
                                    {...register('name')}
                                    type="text"
                                    placeholder="Name Of the Game"
                                    className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                                />
                                {errors.name && <p className='text-custom-red text-xs'>{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <input
                                    {...register('description')}
                                    type="text"
                                    placeholder="Game Description"
                                    className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
                                />
                                {errors.description && <p className='text-custom-red text-xs'>{errors.description.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='gameEngine'
                                    render={({ field: { onChange, value } }) => {
                                        return <Dropdown label={value || 'Game Engine'} onChange={onChange} />
                                    }}
                                />
                                {errors.gameEngine && <p className='text-custom-red text-xs'>{errors.gameEngine.message}</p>}

                            </div>

                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='multiplayer'
                                    render={({ field: { onChange, value } }) => {
                                        return <Checkbox label='is Multiplayer ?' value={value} onChange={onChange} />
                                    }}
                                />
                                {errors.multiplayer && <p className='text-custom-red text-xs'>{errors.multiplayer.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='mobileSupport'
                                    render={({ field: { onChange, value } }) => {
                                        return <Checkbox label='Supports Mobile ?' value={value} onChange={onChange} />
                                    }}
                                />
                                {errors.mobileSupport && <p className='text-custom-red text-xs'>{errors.mobileSupport.message}</p>}

                            </div>

                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='game'
                                    render={({ field: { onChange } }) => {
                                        return <FileInput label={'ADD GAME FILE'} accept={GAME_MEME_TYPE} onChange={onChange} />
                                    }}
                                />
                                {typeof errors.game?.message === "string" && (
                                    <p className="text-custom-red text-xs">
                                        {errors.game.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='gif'
                                    render={({ field: { onChange } }) => {
                                        return <FileInput label={'ADD GIF'} accept={GIF_MEME_TYPE} onChange={onChange} />
                                    }}
                                />
                                {typeof errors.gif?.message === "string" && (
                                    <p className="text-custom-red text-xs">
                                        {errors.gif.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Controller
                                    control={control}
                                    name='thumbnail'
                                    render={({ field: { onChange } }) => {
                                        return <FileInput label={'ADD THUMBNAIL'} accept={IMAGE_MEME_TYPE} onChange={onChange} />
                                    }}
                                />
                                {typeof errors.thumbnail?.message === "string" && (
                                    <p className="text-custom-red text-xs">
                                        {errors.thumbnail.message}
                                    </p>
                                )}
                            </div>

                            <button className="w-full h-12 bg-secondary hover:bg-secondary/50 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.3)]" type='submit'>
                                Create Game
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AppWrapper>
    )
}

export default AddGame
