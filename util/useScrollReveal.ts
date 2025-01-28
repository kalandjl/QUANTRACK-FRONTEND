"use client";
import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const reveal = () => {
            revealElements.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150; // Adjust this value to change when the animation triggers
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        return () => window.removeEventListener('scroll', reveal);
    }, []);
}; 