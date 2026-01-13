import { useRef, useState } from 'react'

type InputProps = {
    length?: number;
    onChange: (pin: string) => void;
};

const OTPInput = ({ length = 4, onChange }: InputProps) => {
    const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));


    // if you're not using Typescript, do useState()
    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));


    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.
        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        // if user has entered all the digits, grab the digits and set as an argument to the onChange function.
        if (newPin.every((digit) => digit !== '')) {
            onChange(newPin.join(''));
        }
    };

    return (
        <div className={`grid grid-cols-4 gap-5`}>
            {Array.from({ length }, (_, index) => (
                <input
                    key={index}
                    type="number"
                    maxLength={1}
                    value={OTP[index]}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    ref={(ref) => {
                        inputRef.current[index] = ref as HTMLInputElement
                    }}
                    className={`text-center bg-primary border border-border focus:border-secondary py-6 outline-none caret-transparent`}
                    style={{ marginRight: index === length - 1 ? '0' : '10px' }}
                />
            ))}
        </div>
    )
}

export default OTPInput
