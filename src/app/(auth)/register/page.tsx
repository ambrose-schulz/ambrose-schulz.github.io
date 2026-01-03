import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-text-main">Tạo tài khoản mới</h2>
                <p className="text-sm text-text-muted mt-1">Gia nhập cộng đồng đọc truyện lớn nhất.</p>
            </div>

            <form className="space-y-5" action="#" method="POST">
                <div>
                    <label htmlFor="fullname" className="block text-sm font-semibold text-text-main mb-1.5">
                        Họ và tên
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                            <span className="material-symbols-outlined text-[20px]">person</span>
                        </div>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            required
                            className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            placeholder="Nguyễn Văn A"
                        />
                    </div>
                </div>

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
                            required
                            className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
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
                            required
                            className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary border-border-dark rounded focus:ring-primary"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-text-main underline decoration-border-dark underline-offset-4">
                        Tôi đồng ý với các điều khoản sử dụng
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-primary/25"
                    >
                        Đăng ký tài khoản
                    </button>
                </div>
            </form>

            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border-dark/50"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-surface-light text-text-muted">Hoặc đăng ký với</span>
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
                Đã có tài khoản?{' '}
                <Link href="/login" className="font-bold text-primary hover:text-primary-hover transition-colors">
                    Đăng nhập ngay
                </Link>
            </p>
        </>
    );
}
