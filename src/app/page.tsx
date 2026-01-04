import React from 'react';
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/home/Hero';
import BookSection from '@/components/ui/BookSection';
import BookCard from '@/components/ui/BookCard';
import { CONTINUE_READING, RECOMMENDED_BOOKS, UPDATED_BOOKS } from '@/mock/books';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
                {/* Featured Hero */}
                <Hero />

                {/* Continue Reading */}
                <BookSection
                    title="Tiếp Tục Đọc"
                    icon="history_edu"
                    viewAllLink="/genres"
                >
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
                        {CONTINUE_READING.map(book => (
                            <div key={book.id} className="shrink-0 w-40 sm:w-48">
                                <BookCard book={book} />
                            </div>
                        ))}
                        {/* Add more placeholder logic or expansion here */}
                        <div className="shrink-0 w-40 sm:w-48 flex flex-col gap-2">
                            <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-surface-dark/50 border-2 border-dashed border-border-dark flex flex-col items-center justify-center text-text-muted hover:border-primary hover:text-primary hover:bg-surface-light transition-all cursor-pointer group">
                                <span className="material-symbols-outlined text-[32px] mb-2 group-hover:scale-110 transition-transform">library_add</span>
                                <span className="text-xs font-bold uppercase tracking-wide">Khám phá thêm</span>
                            </div>
                        </div>
                    </div>
                </BookSection>

                {/* Recommended Grid */}
                <BookSection
                    title="Truyện Đề Cử"
                    icon="verified"
                    viewAllLink="/ranking"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {RECOMMENDED_BOOKS.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                        {/* Fill with more items to match original grid count */}
                    </div>
                </BookSection>

                {/* Two Column Layout for Updates and Rankings */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <BookSection title="Mới Cập Nhật" icon="update" viewAllLink="/genres">
                            <div className="flex flex-col gap-3">
                                {UPDATED_BOOKS.map(book => (
                                    <BookCard key={book.id} book={book} variant="horizontal" />
                                ))}
                            </div>
                        </BookSection>
                    </div>

                    <div className="lg:col-span-4">
                        <BookSection title="Bảng Xếp Hạng" icon="leaderboard">
                            <div className="bg-surface-dark/30 rounded-2xl p-4 border border-border-dark/50">
                                {/* Simplified Ranking Placeholder */}
                                <p className="text-center text-text-muted py-8 italic font-medium">Đang tải bảng xếp hạng...</p>
                            </div>
                        </BookSection>
                    </div>
                </div>
            </main>

            {/* Footer Placeholder */}
            <footer className="border-t border-border-dark bg-surface-light mt-12 py-12">
                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <p className="text-text-muted text-sm font-medium">© 2024 Truyện Hay. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
