"use client";
import { FC } from "react";

interface Props {
    password: string;
}

const getStrengthStyle = (strength: number) => {

    switch (strength) {

        case 0:
            return "bg-red-600"
            
        case 1:
            return "bg-red-600"

        case 2:
            return "bg-orange-500"

        case 3:
            return "bg-yellow-400"

        case 4:
            return "bg-green-500 "

    }

            
}

const PasswordStrengthIndicator: FC<Props> = ({ password }) => {

    const getStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };



    const strength = getStrength(password);

    return (
        <div className="mt-2">
            <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                            i < strength 
                                ? 
                                getStrengthStyle(strength)
                                : 'bg-white/10'
                        }`}
                    />
                ))}
            </div>
            <p className="mt-1 text-xs text-stone-400">
                {strength === 0 && "Use 8+ characters with a mix of letters, numbers & symbols"}
                {strength === 1 && "Keep going..."}
                {strength === 2 && "Getting better..."}
                {strength === 3 && "Almost there!"}
                {strength === 4 && "Strong password!"}
            </p>
        </div>
    );
};

export default PasswordStrengthIndicator; 