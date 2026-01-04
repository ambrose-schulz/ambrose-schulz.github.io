import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border-dark bg-surface-light/95 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center">
                        <Link className="flex items-center gap-3 group" href="/">
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-border-dark/50 shadow-sm transition-transform group-hover:scale-105">
                                <img src="/logo.jpg" alt="Truyện Hay Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-primary hidden sm:block">
                                Truyện<span className="text-text-main">Hay</span>
                            </span>
                        </Link>
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
                        <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors" href="/">
                            Trang chủ
                        </Link>
                        <Link className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="/genres">
                            Thể loại
                        </Link>
                        <Link className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="/search-advanced">
                            Tìm nâng cao
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <button
                                className="relative flex items-center justify-center p-2 rounded-full text-text-muted hover:bg-surface-dark hover:text-primary transition-all mr-1 outline-none"
                                title="Thông báo"
                            >
                                <span className="material-symbols-outlined text-[24px]">notifications</span>
                                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-surface-light">
                                    3
                                </span>
                            </button>
                            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-surface-light rounded-xl shadow-2xl border border-border-dark overflow-hidden hidden group-hover:block z-50 origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-4 py-3 border-b border-border-dark flex items-center justify-between bg-surface-dark/50 backdrop-blur-sm">
                                    <h3 className="font-bold text-text-main text-sm">Thông báo</h3>
                                    <button className="text-xs font-medium text-primary hover:text-primary-hover transition-colors">
                                        Đánh dấu đã đọc
                                    </button>
                                </div>
                                <div className="max-h-[400px] overflow-y-auto">
                                    <div className="p-4 border-b border-border-dark/50 bg-surface-dark/30 hover:bg-surface-dark/60 transition-colors cursor-pointer flex gap-3">
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                                                <span className="material-symbols-outlined text-[20px]">menu_book</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-main line-clamp-2">
                                                <span className="font-bold">Thiên Đạo Đồ Thư Quán</span> vừa cập nhật chương mới.
                                            </p>
                                            <p className="text-xs font-semibold text-primary mt-1">Chương 2342: Hư Không</p>
                                            <p className="text-[10px] text-text-muted mt-1.5 font-medium">Vừa xong</p>
                                        </div>
                                        <div className="shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5"></div>
                                        </div>
                                    </div>
                                    {/* More notification items... */}
                                </div>
                                <Link
                                    className="block p-3 text-center text-sm font-medium text-primary hover:bg-surface-dark/50 transition-colors border-t border-border-dark"
                                    href="/notifications"
                                >
                                    Xem tất cả thông báo
                                </Link>
                            </div>
                        </div>
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
