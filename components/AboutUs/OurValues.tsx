"use client";
import { FC } from "react";


const values = [
    { 
        title: "Transparency", 
        description: "We believe in open and honest communication, ensuring that every volunteer’s contribution is recognized and tracked with accuracy.",
    },
    { 
        title: "Community-Driven Impact", 
        description: "Our platform is built for the community, by the community. We prioritize collaboration and inclusivity to empower non-profits and volunteers alike.", 
    },
    { 
        title: "Innovation for Good", 
        description: "We use technology to streamline volunteer management, making it easier, smarter, and more effective—so that more time is spent making a difference.",
    }
];


const OurValues: FC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-stone-300">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value,index) => (
                        <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-stone-400 mt-2">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurValues;