'use client'
import { ReactNode, useEffect } from 'react'
import * as serviceWorker from './serviceWorker'
import Navbar from "@/components/Layout/Navbar"

interface ClientLayoutProps {
    children: ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    useEffect(() => {
        // Register service worker
        serviceWorker.register();

        // Cleanup on unmount
        return () => {
            serviceWorker.unregister();
        };
    }, []);

    return (
        <div className="min-h-screen bg-zinc-900">
            <Navbar />
            <main id="main" className="bg-zinc-900 min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default ClientLayout; 