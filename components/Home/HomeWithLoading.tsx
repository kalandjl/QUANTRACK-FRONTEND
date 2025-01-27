"use client";
import { FC, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

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
            }, 500); // Match this with the fadeOut animation duration

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

    return <>{children}</>;
};

export default HomeWithLoading; 