"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Features", href: "/features" },
        { name: "About", href: "/about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="bg-zinc-900/90 backdrop-blur-sm fixed w-full z-50 top-0 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-8 h-8 animate-pulse">
                                <Image
                                    src="/logo.png"
                                    alt="Quantrack Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-stone-300 text-xl font-bold">Quantrack</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? "text-stone-300"
                                        : "text-stone-400 hover:text-stone-300"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 