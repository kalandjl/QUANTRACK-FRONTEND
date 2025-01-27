import { FC } from "react";

const LoadingScreen: FC = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-zinc-900">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950/90" />
                <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-purple-500/20 mix-blend-multiply blur-3xl filter" />
                <div className="animation-delay-2000 absolute -right-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-stone-500/20 mix-blend-multiply blur-3xl filter" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
                {/* Larger Logo SVG for Loading Screen */}
                <div className="w-16 h-16 mx-auto relative">
                    <svg 
                        viewBox="0 0 40 40" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
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

                <h1 className="text-4xl font-bold text-stone-300 animate-pulse">
                    Quantrack
                </h1>
                <div className="flex flex-col items-center">
                    <div className="mt-4 text-stone-400 animate-pulse">Loading...</div>
                </div>
            </div>

            {/* Animated line decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1">
                <div className="animate-loading-bar h-full bg-stone-500/20"></div>
            </div>
        </div>
    );
};

export default LoadingScreen; 