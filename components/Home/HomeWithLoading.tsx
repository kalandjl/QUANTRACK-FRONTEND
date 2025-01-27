"use client";
import { FC, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

interface Props {
    children: React.ReactNode;
}

const HomeWithLoading: FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 500ms for a smoother experience

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
};

export default HomeWithLoading; 