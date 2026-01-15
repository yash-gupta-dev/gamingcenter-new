import React, { useState } from 'react'

interface Props {
    label: string;
    accept: string[];
    onChange: (item: File) => void
}

const FileInput = ({ label, accept, onChange }: Props) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        setFile(file);
        onChange(file)
    }
    return (
        <div className='mt-5'>
            <p className='mb-2 text-sm'>{label}</p>
            <button className="w-full py-3 bg-gray font-bold tracking-wider" type='button'>
                <label htmlFor={"file_input" + label} className='cursor-pointer'>
                    {file?.name || label}
                </label>
            </button>
            <input className="hidden" id={"file_input" + label} accept={accept.join(',')} type="file" onChange={handleFileChanges} />
        </div>
    )
}

export default FileInput
