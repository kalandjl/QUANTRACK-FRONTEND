"use client";
import { FC, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { homeLoadingTime } from "@/lib/ui/vars";

interface Props {
    children: React.ReactNode;
}

const HomeWithLoading: FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Start loading
        const loadingTimer = setTimeout(() => {
            setIsTransitioning(true);
            
            // Add a small delay for the fade-out animation
            const transitionTimer = setTimeout(() => {
                setIsLoading(false);
            }, homeLoadingTime); // Match this with the fadeOut animation duration

            return () => clearTimeout(transitionTimer);
        }, 1000);

        return () => clearTimeout(loadingTimer);
    }, []);

    if (isLoading) {
        return (
            <div className={`${isTransitioning ? 'animate-fade-out' : ''}`}>
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-zinc-900 overflow-x-hidden">
            {children}
        </div>
    );
};

export default HomeWithLoading; 