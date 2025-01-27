import { FC, useState } from "react";
import { mainLinks } from "./NavOptions";
import Link from "next/link";

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-zinc-800 border-b border-zinc-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 group">
                            {/* Logo SVG */}
                            <div className="w-8 h-8 relative">
                                <svg 
                                    viewBox="0 0 40 40" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full transform group-hover:rotate-180 transition-transform duration-1000"
                                >
                                    {/* Background glow effect */}
                                    <circle 
                                        cx="20" 
                                        cy="20" 
                                        r="18" 
                                        className="animate-pulse"
                                        fill="url(#glowGradient)"
                                    />

                                    {/* Outer rotating ring */}
                                    <circle 
                                        cx="20" 
                                        cy="20" 
                                        r="16" 
                                        stroke="url(#strokeGradient)" 
                                        strokeWidth="0.5"
                                        className="animate-[spin_10s_linear_infinite]"
                                    />

                                    {/* Dynamic segments */}
                                    <g className="animate-[spin_15s_linear_infinite]">
                                        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                                            <path
                                                key={rotation}
                                                d="M20 4A16 16 0 0 1 36 20"
                                                stroke="#D6D3D1"
                                                strokeWidth="0.5"
                                                strokeLinecap="round"
                                                style={{
                                                    transform: `rotate(${rotation}deg)`,
                                                    opacity: 0.7,
                                                }}
                                            />
                                        ))}
                                    </g>

                                    {/* Inner rotating circles */}
                                    <g className="animate-[spin_8s_linear_infinite_reverse]">
                                        <circle 
                                            cx="20" 
                                            cy="20" 
                                            r="12" 
                                            stroke="#A8A29E" 
                                            strokeWidth="0.5"
                                            strokeDasharray="2 4"
                                        />
                                    </g>
                                    <g className="animate-[spin_4s_linear_infinite]">
                                        <circle 
                                            cx="20" 
                                            cy="20" 
                                            r="8" 
                                            stroke="#78716C" 
                                            strokeWidth="0.5"
                                            strokeDasharray="1 2"
                                        />
                                    </g>

                                    {/* Center elements */}
                                    <circle 
                                        cx="20" 
                                        cy="20" 
                                        r="4" 
                                        className="animate-pulse"
                                        fill="url(#centerGradient)"
                                    />
                                    <circle 
                                        cx="20" 
                                        cy="20" 
                                        r="2" 
                                        fill="#D6D3D1"
                                        className="animate-ping"
                                    />

                                    {/* Gradients definitions */}
                                    <defs>
                                        <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(18)">
                                            <stop stopColor="#D6D3D1" stopOpacity="0.1"/>
                                            <stop offset="1" stopColor="#D6D3D1" stopOpacity="0"/>
                                        </radialGradient>
                                        <linearGradient id="strokeGradient" x1="4" y1="20" x2="36" y2="20">
                                            <stop stopColor="#D6D3D1"/>
                                            <stop offset="0.5" stopColor="#A8A29E"/>
                                            <stop offset="1" stopColor="#D6D3D1"/>
                                        </linearGradient>
                                        <radialGradient id="centerGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(4)">
                                            <stop stopColor="#D6D3D1"/>
                                            <stop offset="1" stopColor="#A8A29E"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-stone-300">
                                Quantrack
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-stone-300 hover:text-white px-3 py-2 text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </Link>
                        ))}
                        <Link
                            href="/signin"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-black hover:bg-zinc-900 transition-colors"
                        >
                            Sign in
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-zinc-800"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-zinc-900 border-b border-zinc-800`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-zinc-800"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/signin"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;