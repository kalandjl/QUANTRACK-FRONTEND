"use client";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

interface Props {
    children: React.ReactNode;
}

const NavigationWrapper = ({ children }: Props) => {
    const pathname = usePathname();
    // Hide nav on auth pages
    const showNav = !pathname.includes("/signin") && 
                   !pathname.includes("/signup") && 
                   !pathname.includes("/forgot-password");

    return (
        <>
            {showNav && <Nav />}
            {children}
        </>
    );
};

export default NavigationWrapper; 