import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-background-light relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link href="/" className="flex items-center justify-center gap-3 mb-6 group">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-border-dark/50 shadow-sm transition-transform group-hover:scale-105">
                        <img src="/logo.jpg" alt="Truyện Hay Logo" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-primary">
                        Truyện<span className="text-text-main">Hay</span>
                    </h2>
                </Link>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-surface-light/80 backdrop-blur-xl py-8 px-4 shadow-2xl border border-border-dark/50 sm:rounded-2xl sm:px-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
