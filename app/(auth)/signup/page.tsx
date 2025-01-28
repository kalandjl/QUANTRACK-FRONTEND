"use client";
import { NextPage } from "next";
import { SignUpForm } from "@/components/Auth";
import SignInWithLoading from "@/components/Auth/SignInWithLoading";

const SignUp: NextPage = () => {
    return (
        <SignInWithLoading>
            <SignUpForm />
        </SignInWithLoading>
    );
};

export default SignUp; 