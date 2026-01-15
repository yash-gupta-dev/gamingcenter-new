import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { GAME_ENGINES } from '../../constants/game.constants';

interface Props {
    label: string;
    onChange: (item: string) => void
}

const Dropdown = ({ label, onChange }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const onSelect = (item: string) => {
        onChange(item)
        setIsOpen(false);
    }

    return (
        <div className='relative z-10'>
            <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between h-12 px-4 bg-primary border border-white/10 rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none text-white placeholder-muted-foreground transition-all"
            >
                {label}
                {
                    isOpen ? <ArrowUp /> : <ArrowDown />
                }
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 left-0 mt-2 
                    rounded-md shadow-md shadow-secondary bg-primary ring-1 ring-secondary ring-opacity-2
                    focus:outline-none"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        {
                            GAME_ENGINES.map(ge => (
                                <button className="w-full py-2 text-sm text-center text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    role="menuitem" onClick={() => onSelect(ge)} key={ge}>
                                    {ge}
                                </button>
                            ))
                        }
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dropdown
