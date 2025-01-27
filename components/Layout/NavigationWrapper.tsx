"use client";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer/Footer";

interface Props {
    children: React.ReactNode;
}

const NavigationWrapper = ({ children }: Props) => {
    const pathname = usePathname();
    
    // Show nav on all pages
    const showNav = true;

    return (
        <div className="min-h-screen flex flex-col">
            {showNav && <Nav />}
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default NavigationWrapper; 