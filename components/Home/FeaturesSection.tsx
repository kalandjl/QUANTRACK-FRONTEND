"use client";
import { FC } from 'react';
import Link from 'next/link';

const FeaturesSection: FC = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-zinc-900 to-zinc-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400">
                            Customize for free
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { 
                                    title: "Transparent", 
                                    description: "Clear tracking system",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )
                                },
                                { 
                                    title: "Data security", 
                                    description: "Enterprise-grade protection",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" 
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )
                                },
                                { 
                                    title: "Empower", 
                                    description: "Enable volunteer growth",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" 
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )
                                },
                                { 
                                    title: "Interactive", 
                                    description: "Engaging platform",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )
                                }
                            ].map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 animate-fade-in-left"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        {feature.icon}
                                        <h3 className="text-base font-semibold text-stone-300">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-stone-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                        <div className="text-right">
                            <h3 className="text-lg text-stone-400 mb-1">Ready to get started?</h3>
                            <p className="text-sm text-stone-500">Join thousands of nonprofits using Quantrack</p>
                        </div>
                        <Link 
                            href="/signup"
                            className="inline-block px-8 py-4 text-stone-300 bg-black rounded-lg hover:bg-zinc-900 transition-all font-medium text-xl"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection; 