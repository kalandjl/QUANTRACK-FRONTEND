import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
    title: "Quantrack",
    description: "Volunteer management platform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="overflow-x-hidden">
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}