"use client";
import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            reveals.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        // Initial check
        revealOnScroll();
        
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);
}; 