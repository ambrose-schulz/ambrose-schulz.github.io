import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin", "vietnamese"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Trang chủ - Truyện Hay",
    description: "Website đọc truyện hay nhất",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="light">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`${lexend.className} bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
