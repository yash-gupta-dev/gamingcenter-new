import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { login } from '../../services/redux/slices/auth.slice';
import { useLoginWithGoogleMutation } from '../../services/redux/apis/auth';
import { setItemToStorage } from '../../utils/localstorage.utils';
import { getApiErrorMessage } from '../../utils/errors.utils';
import Modal from '../../components/modal/Modal';
import { X } from 'lucide-react';

const GoogleLogin = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loginWithGoogle, { isError, error }] = useLoginWithGoogleMutation()
    const [errorMessage, setErrorMessage] = useState<string | null>("")
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const code = params.get("code");

        if (!code) {
            navigate("/login", { replace: true });
            return;
        }

        handleGoogleLogin(code);
    }, []);

    useEffect(() => {
        if (isError) {
            const errorMessage = getApiErrorMessage(error);
            setErrorMessage(errorMessage);
            setModalOpen(true)
        }
    }, [isError])

    const handleGoogleLogin = async (code: string) => {
        try {
            const response = await loginWithGoogle({ code }).unwrap();

            // store token
            localStorage.setItem("user", JSON.stringify(response));

            setItemToStorage("user", response)
            dispatch(login(response))

            navigate("/", { replace: true });
        } catch (error) {
            navigate("/login", { replace: true });
        }
    };

    const onModalClose = () => {
        setModalOpen(false)
        !isError && navigate(-1)
    }

    return (
        <Modal isOpen={modalOpen} onClose={onModalClose} Icon={isError ? <div className="p-4 mb-5 bg-gray rounded-full">
            <X className='text-custom-red' strokeWidth={4} />
        </div> : null}>
            <div className="mb-5">
                <h2 className='text-lg'>{errorMessage || "Logged In Successfully!"}</h2>
            </div>
        </Modal>
    )
}

export default GoogleLogin
