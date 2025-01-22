"use client";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

interface Props {
    children: React.ReactNode;
}

const NavigationWrapper = ({ children }: Props) => {
    const pathname = usePathname();
    const showNav = !pathname.includes("/signin");

    return (
        <>
            {showNav && <Nav />}
            {children}
        </>
    );
};

export default NavigationWrapper; 