"use client";
import { NextPage } from "next";
import Link from "next/link";
import StatsSection from "@/components/Home/StatsSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HomeWithLoading from "@/components/Home/HomeWithLoading";
import { useScrollReveal } from "@/util/useScrollReveal";

const Home: NextPage = () => {
    useScrollReveal();

    return (
        <HomeWithLoading>
            <div id="home-page-wrap">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h1 className="text-4xl md:text-6xl font-bold text-stone-300">
                                    <span className="block text-5xl md:text-7xl mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                                        Revolutionize
                                    </span>
                                    <span className="block text-3xl md:text-5xl mb-2 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                                        volunteer management
                                    </span>
                                    <span className="block text-4xl md:text-6xl animate-slide-in" style={{ animationDelay: '0.6s' }}>
                                        with <span className="text-5xl md:text-7xl">Quantrack</span>
                                    </span>
                                </h1>
                                <p className="text-lg text-stone-400 max-w-2xl animate-slide-in" style={{ animationDelay: '0.8s' }}>
                                    Track volunteer engagement with detailed statistics and settings for customization
                                </p>
                                <div className="flex gap-4 animate-slide-in" style={{ animationDelay: '1s' }}>
                                    <Link 
                                        href="/explore" 
                                        className="px-6 py-3 text-stone-300 hover:text-stone-400 font-semibold transition-colors"
                                    >
                                        Explore
                                    </Link>
                                    <Link 
                                        href="/demo"
                                        className="px-6 py-3 bg-black text-stone-300 rounded-lg hover:bg-zinc-900 transition-colors"
                                    >
                                        Watch demo
                                    </Link>
                                </div>
                            </div>

                            <div className="relative h-[400px] lg:h-[500px] animate-fade-in-delay flex items-center justify-center">
                                {/* Background blur effect */}
                                <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-stone-500/10 to-stone-500/5 blur-3xl" />
                                
                                {/* SVG Group Icon */}
                                <div className="relative w-96 h-96">
                                    <svg 
                                        viewBox="0 0 400 400" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-full"
                                    >
                                        {/* Background Circle - subtle pulse */}
                                        <circle 
                                            cx="200" 
                                            cy="200" 
                                            r="200" 
                                            fill="#27272A" 
                                            fillOpacity="0.3"
                                            className="animate-pulse"
                                        />
                                        
                                        {/* Person 1 (Left) - float animation */}
                                        <g className="opacity-80 animate-float">
                                            <circle cx="120" cy="160" r="40" fill="#D6D3D1"/>
                                            <path 
                                                d="M80 280 C80 230, 160 230, 160 280" 
                                                stroke="#D6D3D1" 
                                                strokeWidth="40" 
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        
                                        {/* Person 2 (Middle) - delayed float animation */}
                                        <g className="opacity-90 animate-float-delay">
                                            <circle cx="200" cy="120" r="40" fill="#D6D3D1"/>
                                            <path 
                                                d="M160 240 C160 190, 240 190, 240 240" 
                                                stroke="#D6D3D1" 
                                                strokeWidth="40" 
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        
                                        {/* Person 3 (Right) - more delayed float animation */}
                                        <g className="opacity-80 animate-float-delay-2">
                                            <circle cx="280" cy="160" r="40" fill="#D6D3D1"/>
                                            <path 
                                                d="M240 280 C240 230, 320 230, 320 280" 
                                                stroke="#D6D3D1" 
                                                strokeWidth="40" 
                                                strokeLinecap="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section with reveal */}
                <section className="reveal px-4 sm:px-6 lg:px-8 py-8 bg-zinc-800/50">
                    <StatsSection />
                </section>

                {/* Features Section with reveal */}
                <section className="reveal px-4 sm:px-6 lg:px-8 py-8 bg-zinc-800">
                    <FeaturesSection />
                </section>
            </div>
        </HomeWithLoading>
    )
}

export default Home;