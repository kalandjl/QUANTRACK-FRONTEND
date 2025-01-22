"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const SignUpForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            // TODO: Implement your signup logic here
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/dashboard');
        } catch (err) {
            setError("Failed to create account");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="celestial-container">
            {/* Orbiting particles */}
            <div className="absolute left-1/2 top-1/2">
                <div className="celestial-particle particle-1" />
                <div className="celestial-particle particle-2" />
                <div className="celestial-particle particle-3" />
                <div className="celestial-particle particle-4" />
            </div>

            <form onSubmit={handleSubmit} className="relative mt-8 space-y-6 backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
                {error && (
                    <div className="rounded-lg bg-red-500/10 p-4 backdrop-blur-sm">
                        <p className="text-sm text-red-400">{error}</p>
                    </div>
                )}
                
                <div className="space-y-5 rounded-md">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-300">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-stone-300 placeholder-stone-400 backdrop-blur-sm transition-colors focus:border-stone-400 focus:bg-white/10 focus:outline-none focus:ring-0"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-300">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-stone-300 placeholder-stone-400 backdrop-blur-sm transition-colors focus:border-stone-400 focus:bg-white/10 focus:outline-none focus:ring-0"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-stone-300">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-stone-300 placeholder-stone-400 backdrop-blur-sm transition-colors focus:border-stone-400 focus:bg-white/10 focus:outline-none focus:ring-0"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <PasswordStrengthIndicator password={formData.password} />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-stone-300">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-stone-300 placeholder-stone-400 backdrop-blur-sm transition-colors focus:border-stone-400 focus:bg-white/10 focus:outline-none focus:ring-0"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        id="agree-terms"
                        name="agree-terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-white/10 bg-white/5 text-stone-500 focus:ring-0 focus:ring-offset-0"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    />
                    <label htmlFor="agree-terms" className="ml-2 block text-sm text-stone-300">
                        I agree to the{' '}
                        <Link href="/terms" className="font-medium text-stone-300 hover:text-stone-400 transition-colors">
                            Terms of Service
                        </Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="font-medium text-stone-300 hover:text-stone-400 transition-colors">
                            Privacy Policy
                        </Link>
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative flex w-full justify-center rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-stone-300 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Creating account..." : "Create account"}
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-stone-400">
                        Already have an account?{' '}
                        <Link 
                            href="/signin"
                            prefetch={true}
                            className="font-medium text-stone-300 hover:text-stone-400 transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm; 