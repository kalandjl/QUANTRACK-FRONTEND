"use client";
import { NextPage } from "next";
import { SignInForm } from "@/components/Auth";
import SignInWithLoading from "@/components/Auth/SignInWithLoading";

const SignIn: NextPage = () => {
    return (
        <SignInWithLoading>
            <div className="bg-zinc-900">
                <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
                    {/* Background effects */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950/90 backdrop-blur-sm" />
                        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-purple-500/20 mix-blend-multiply blur-3xl filter" />
                        <div className="animation-delay-2000 absolute -right-1/4 top-0 h-[500px] w-[500px] animate-blob rounded-full bg-stone-500/20 mix-blend-multiply blur-3xl filter" />
                        <div className="animation-delay-4000 absolute -bottom-32 left-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-zinc-500/20 mix-blend-multiply blur-3xl filter" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-md">
                        <SignInForm />
                    </div>
                </div>
            </div>
        </SignInWithLoading>
    );
};

export default SignIn; 