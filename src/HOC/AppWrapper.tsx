import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import SideAd from '../components/SideAd/SideAd';
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            {location.pathname !== "/" && <SideAd />}
            <main className="h-screen flex pt-20 px-3 border-r border-border md:px-6 transition-all duration-300 overflow-y-auto">
                <div className='lg:w-60 h-full'/>
                {children}
            </main>

        </div>
    )
}

export default AppWrapper
