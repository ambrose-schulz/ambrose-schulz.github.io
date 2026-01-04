import React from 'react';
import Navbar from '@/components/common/Navbar';
import BookCard from '@/components/ui/BookCard';
import { RECOMMENDED_BOOKS } from '@/mock/books';

export default function RankingPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-primary mb-3">Bảng Xếp Hạng</h1>
                        <p className="text-text-muted font-medium">Những bộ truyện được yêu thích và quan tâm nhất hiện nay</p>
                    </div>

                    <div className="flex bg-surface-dark/50 rounded-2xl p-1.5 border border-border-dark/50 shadow-inner">
                        <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-black shadow-lg shadow-primary/20 transition-all">
                            Thịnh hành
                        </button>
                        <button className="px-6 py-2.5 rounded-xl text-text-muted font-bold hover:text-primary transition-all">
                            Lượt xem
                        </button>
                        <button className="px-6 py-2.5 rounded-xl text-text-muted font-bold hover:text-primary transition-all">
                            Đề cử
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Top 3 Spotlight */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {RECOMMENDED_BOOKS.slice(0, 3).map((book, index) => (
                            <div key={book.id} className="relative group">
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white border-4 border-surface-dark flex items-center justify-center z-20 shadow-xl">
                                    <span className={`text-2xl font-black ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-400' : 'text-amber-600'}`}>
                                        {index + 1}
                                    </span>
                                </div>
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>

                    {/* Extended List */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-surface-light rounded-3xl border border-border-dark/50 p-6 shadow-sm">
                            <h3 className="text-sm font-black text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                                Top 10 trong tuần
                            </h3>
                            <div className="space-y-6">
                                {RECOMMENDED_BOOKS.map((book, index) => (
                                    <div key={book.id} className="flex items-center gap-4 group cursor-pointer">
                                        <span className="w-6 text-lg font-black text-text-muted group-hover:text-primary transition-colors text-center">
                                            {index + 1}
                                        </span>
                                        <div className="w-10 h-14 rounded-lg overflow-hidden shrink-0 border border-border-dark/30 shadow-sm">
                                            <img src={book.coverUrl} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-text-main truncate group-hover:text-primary transition-colors">{book.title}</h4>
                                            <p className="text-[10px] font-black text-text-muted uppercase tracking-tight mt-0.5">{book.author}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-mono font-bold text-text-muted italic">{book.views || '1.2M'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-border-dark bg-surface-light mt-12 py-12">
                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <p className="text-text-muted text-sm font-medium">© 2024 Truyện Hay. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
