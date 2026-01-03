import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-text-main">Chào mừng trở lại</h2>
                <p className="text-sm text-text-muted mt-1">Vui lòng đăng nhập để tiếp tục đọc truyện.</p>
            </div>

            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-main mb-1.5">
                        Địa chỉ Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                            <span className="material-symbols-outlined text-[20px]">mail</span>
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all transition-all"
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-text-main mb-1.5">
                        Mật khẩu
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                            <span className="material-symbols-outlined text-[20px]">lock</span>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-border-dark rounded focus:ring-primary"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-text-main">
                            Ghi nhớ
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-primary hover:text-primary-hover transition-colors">
                            Quên mật khẩu?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-primary/25"
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>

            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border-dark/50"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-surface-light text-text-muted">Hoặc đăng nhập với</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center py-2.5 border border-border-dark rounded-lg bg-white/50 hover:bg-white text-text-main text-sm font-medium transition-all">
                        Google
                    </button>
                    <button className="flex items-center justify-center py-2.5 border border-border-dark rounded-lg bg-white/50 hover:bg-white text-text-main text-sm font-medium transition-all">
                        Facebook
                    </button>
                </div>
            </div>

            <p className="mt-8 text-center text-sm text-text-muted">
                Chưa có tài khoản?{' '}
                <Link href="/register" className="font-bold text-primary hover:text-primary-hover transition-colors">
                    Đăng ký ngay
                </Link>
            </p>
        </>
    );
}
