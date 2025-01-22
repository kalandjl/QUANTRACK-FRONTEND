"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess(false);

        try {
            // TODO: Implement password reset logic here
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess(true);
        } catch (err) {
            setError("Failed to send reset instructions. Please try again.");
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

                {success && (
                    <div className="rounded-lg bg-green-500/10 p-4 backdrop-blur-sm">
                        <p className="text-sm text-green-400">
                            Reset instructions have been sent to your email.
                        </p>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative flex w-full justify-center rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-stone-300 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Sending..." : "Send reset instructions"}
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-stone-400">
                        Remember your password?{' '}
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

export default ForgotPasswordForm; 