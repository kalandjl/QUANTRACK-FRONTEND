'use client'
import { ReactNode, useEffect } from 'react'
import * as serviceWorker from './serviceWorker'
import NavbarHandler from "@/components/layouts/NavbarHandler"

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
        <>
            <NavbarHandler />
            <main id="main" className="bg-zinc-900 min-h-screen">
                {children}
            </main>
        </>
    );
};

export default ClientLayout; 