"use client";
import { NextPage } from "next";
import { SignInForm } from "@/components/Auth";
import SignInWithLoading from "@/components/Auth/SignInWithLoading";

const SignIn: NextPage = () => {
    return (
        <SignInWithLoading>
            <SignInForm />
        </SignInWithLoading>
    );
};

export default SignIn; 