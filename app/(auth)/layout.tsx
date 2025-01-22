"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Define the order of pages for direction detection
const pageOrder = ['/signin', '/signup', '/forgot-password'];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [pageKey, setPageKey] = useState(pathname);

    useEffect(() => {
        setPageKey(pathname);
    }, [pathname]);

    // Determine animation direction based on page order
    const getDirection = (currentPath: string) => {
        const currentIndex = pageOrder.indexOf(currentPath);
        const lastPath = sessionStorage.getItem('lastPath');
        const lastIndex = lastPath ? pageOrder.indexOf(lastPath) : -1;
        
        sessionStorage.setItem('lastPath', currentPath);
        return currentIndex > lastIndex ? -180 : 180;
    };

    return (
        <div className="animate-gradient relative min-h-screen overflow-hidden bg-zinc-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950/90 backdrop-blur-sm" />
                <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-purple-500/20 mix-blend-multiply blur-3xl filter" />
                <div className="animation-delay-2000 absolute -right-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-stone-500/20 mix-blend-multiply blur-3xl filter" />
                <div className="animation-delay-4000 absolute -bottom-32 left-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-zinc-500/20 mix-blend-multiply blur-3xl filter" />
                
                {/* Animated words */}
                <div className="absolute inset-0">
                    <div className="floating-words">
                        <span className="word">Quantrack</span>
                        <span className="word word-delay-1">NonProfit</span>
                        <span className="word word-delay-2">Quantrack</span>
                        <span className="word word-delay-3">NonProfit</span>
                    </div>
                </div>
            </div>

            {/* Content with flip animation */}
            <div className="auth-perspective">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={pageKey}
                        initial={{ 
                            rotateY: -90,
                            opacity: 0,
                            transformPerspective: 2500,
                            scale: 0.9
                        }}
                        animate={{ 
                            rotateY: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{ 
                            rotateY: 90,
                            opacity: 0,
                            scale: 0.9
                        }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 100,
                            duration: 0.3
                        }}
                        className="preserve-3d w-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
} 