"use client";
import { NextPage } from "next";
import { SignUpForm } from "@/components/Auth";
import SignInWithLoading from "@/components/Auth/SignInWithLoading";

const SignUp: NextPage = () => {
    return (
        <SignInWithLoading>
            <div className="animate-gradient relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 px-4 py-12 sm:px-6 lg:px-8">
                {/* Animated background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950/90 backdrop-blur-sm" />
                    <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-purple-500/20 mix-blend-multiply blur-3xl filter" />
                    <div className="animation-delay-2000 absolute -right-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-stone-500/20 mix-blend-multiply blur-3xl filter" />
                    <div className="animation-delay-4000 absolute -bottom-32 left-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-zinc-500/20 mix-blend-multiply blur-3xl filter" />
                    
                    {/* Animated words */}
                    <div className="absolute inset-0">
                        <div className="floating-words">
                            <span className="word">Quantrack</span>
                            <span className="word word-delay-1">NonProfit</span>
                            <span className="word word-delay-2">Quantrack</span>
                            <span className="word word-delay-3">NonProfit</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-stone-300">
                            Create your account
                        </h2>
                        <p className="mt-2 text-sm text-stone-400">
                            Join Quantrack and start managing your nonprofit
                        </p>
                    </div>
                    
                    <SignUpForm />
                </div>
            </div>
        </SignInWithLoading>
    );
};

export default SignUp; 