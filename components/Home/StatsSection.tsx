"use client";
import { FC, useEffect, useRef } from 'react';

const StatsSection: FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-zinc-900 stats-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { 
                            title: "Engaged volunteers", 
                            value: "2,000+", 
                            description: "Active monthly users",
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
                            className="stats-card bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-colors"
                            style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-2 bg-zinc-700 rounded-lg">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-medium text-stone-300 mb-2">{stat.title}</h3>
                                <p className="text-3xl font-bold text-stone-200 mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-stone-400">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection; 