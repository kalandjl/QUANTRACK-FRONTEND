"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

interface Props {
    children: React.ReactNode;
}

const SignInWithLoading = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
};

export default SignInWithLoading; 