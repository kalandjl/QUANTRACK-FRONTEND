"use client";
import { NextPage } from "next";
import { ForgotPasswordForm } from "@/components/Auth";
import SignInWithLoading from "@/components/Auth/SignInWithLoading";

const ForgotPassword: NextPage = () => {
    return (
        <SignInWithLoading>
            <ForgotPasswordForm />
        </SignInWithLoading>
    );
};

export default ForgotPassword; 