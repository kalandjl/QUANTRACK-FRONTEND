"use client";
import { FC } from "react";

const LoadingScreen: FC = () => {
    return (
        <div className="fixed inset-0 bg-zinc-900 flex items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-6">
                {/* Logo Animation */}
                <div className="w-16 h-16 relative animate-fade-in">
                    <svg 
                        viewBox="0 0 40 40" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full animate-spin-slow"
                    >
                        <circle cx="20" cy="20" r="18" className="animate-pulse" fill="url(#glowGradient)"/>
                        <circle cx="20" cy="20" r="16" stroke="url(#strokeGradient)" strokeWidth="0.5"/>
                        <circle cx="20" cy="20" r="12" stroke="#A8A29E" strokeWidth="0.5" strokeDasharray="2 4"/>
                        <circle cx="20" cy="20" r="8" stroke="#78716C" strokeWidth="0.5" strokeDasharray="1 2"/>
                        <circle cx="20" cy="20" r="4" className="animate-pulse" fill="url(#centerGradient)"/>
                        <circle cx="20" cy="20" r="2" fill="#D6D3D1" className="animate-ping"/>
                        
                        <defs>
                            {/* ... existing gradients ... */}
                        </defs>
                    </svg>
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 animate-loading-progress rounded-full"></div>
                </div>

                {/* Loading Text */}
                <div className="text-stone-400 text-sm font-medium animate-pulse">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 