"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // TODO: Implement your authentication logic here
            // const response = await signIn(formData.email, formData.password);
            // if (response.success) router.push('/dashboard');
            
            // Temporary mock delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/dashboard');
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
            {error && (
                <div className="rounded-lg bg-red-500/10 p-4 backdrop-blur-sm">
                    <p className="text-sm text-red-400">{error}</p>
                </div>
            )}
            
            <div className="space-y-5 rounded-md">
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
                        autoComplete="current-password"
                        required
                        className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-stone-300 placeholder-stone-400 backdrop-blur-sm transition-colors focus:border-stone-400 focus:bg-white/10 focus:outline-none focus:ring-0"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/10 bg-white/5 text-stone-500 focus:ring-0 focus:ring-offset-0"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-300">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <Link 
                        href="/forgot-password" 
                        className="font-medium text-stone-300 hover:text-stone-400 transition-colors"
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative flex w-full justify-center rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-stone-300 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Signing in..." : "Sign in"}
                </button>
            </div>

            <div className="text-center">
                <p className="text-sm text-stone-400">
                    Don't have an account?{' '}
                    <Link 
                        href="/signup" 
                        className="font-medium text-stone-300 hover:text-stone-400 transition-colors"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default SignInForm; 