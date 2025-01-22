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
            <div className="relative z-10 text-center">
                <h1 className="mb-8 text-4xl font-bold text-stone-300 animate-pulse">
                    Quantrack
                </h1>
                <div className="flex flex-col items-center">
                    <div className="h-8 w-8 animate-spin">
                        <svg
                            className="text-stone-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </div>
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