import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import SideAd from '../components/SideAd/SideAd';

interface Props {
    children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <Sidebar />
            <SideAd />
            <main className="h-screen pt-20 px-3 border-r border-border md:px-6 transition-all duration-300 overflow-y-auto">
                {children}
            </main>

        </div>
    )
}

export default AppWrapper
