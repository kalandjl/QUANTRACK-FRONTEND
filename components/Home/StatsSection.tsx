"use client";
import { FC } from 'react';

const StatsSection: FC = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-zinc-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-3">
                    {[
                        { 
                            title: "Engaged volunteers", 
                            value: "2,000+", 
                            description: "Active monthly users",
                            valueColor: "text-stone-300",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                    <path d="M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197L15 21zM13 7a4 4 0 11-8 0 4 4 0 018 0v0z" 
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )
                        },
                        { 
                            title: "Volunteer hours", 
                            value: "50,000+", 
                            description: "Hours tracked annually",
                            valueColor: "text-stone-300",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )
                        },
                        { 
                            title: "Data uploaded", 
                            value: "100%", 
                            description: "Secure cloud storage",
                            valueColor: "text-stone-300",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
                                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )
                        }
                    ].map((stat, index) => (
                        <div
                            key={stat.title}
                            className="p-5 rounded-2xl bg-zinc-800 border border-zinc-700 text-center animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-center mb-2">
                                {stat.icon}
                            </div>
                            <h3 className="text-base font-medium text-stone-400">{stat.title}</h3>
                            <p className={`mt-1 text-3xl font-bold ${stat.valueColor}`}>
                                {stat.value}
                            </p>
                            <p className="mt-2 text-xs text-stone-500">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection; 