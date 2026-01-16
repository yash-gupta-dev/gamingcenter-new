import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

type GameInputProps<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    placeholder?: string;
    error: FieldError | undefined;
    type?: React.HTMLInputTypeAttribute
};

const TextInput = <T extends FieldValues>({
    name,
    register,
    error,
    placeholder,
    type = 'text'
}: GameInputProps<T>) => {
    return (
        <div className="space-y-2">
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="w-full h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
            />
            {error && <p className='text-custom-red text-xs'>{error.message}</p>}
        </div>
    )
}

export default TextInput
