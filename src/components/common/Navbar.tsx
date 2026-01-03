import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border-dark bg-surface-light/95 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="text-primary p-1 rounded-lg">
                            <span className="material-symbols-outlined text-[32px]">menu_book</span>
                        </div>
                        <a className="text-xl font-bold tracking-tight text-primary hidden sm:block" href="#">
                            Truyện<span className="text-text-main">Hay</span>
                        </a>
                    </div>
                    <div className="hidden md:flex flex-1 max-w-md mx-4">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input
                                className="block w-full rounded-lg border border-border-dark bg-white/50 py-2.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted/70 focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition-all"
                                placeholder="Tìm kiếm truyện, tác giả..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-6">
                        <a className="text-sm font-medium text-text-main hover:text-primary transition-colors" href="#">
                            Trang chủ
                        </a>
                        <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#">
                            Thể loại
                        </a>
                        <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#">
                            Tìm nâng cao
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Notifications and Auth buttons */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="hidden sm:flex text-text-muted hover:text-primary font-medium text-sm px-3 py-2 transition-colors"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/register"
                                className="bg-primary hover:bg-primary-hover text-surface-light text-sm font-medium rounded-lg px-4 py-2 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[18px]">person_add</span>
                                <span>Đăng ký</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
