import React from 'react';
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import { CONTINUE_READING, RECOMMENDED_BOOKS, UPDATED_BOOKS } from '@/mock/books';

export function generateStaticParams() {
    const allBooks = [...CONTINUE_READING, ...RECOMMENDED_BOOKS, ...UPDATED_BOOKS];
    return allBooks.map((book) => ({
        id: book.id,
    }));
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
    // Find book from mock data or default to first one for demo
    const book = [...CONTINUE_READING, ...RECOMMENDED_BOOKS, ...UPDATED_BOOKS].find(b => b.id === params.id) || RECOMMENDED_BOOKS[0];

    return (
        <div className="bg-background-light min-h-screen">
            <Navbar />

            {/* Hero Background */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110"
                    style={{ backgroundImage: `url("${book.coverUrl}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light" />
            </div>

            <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10 pb-20">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Cover and Stats */}
                    <div className="w-full md:w-64 lg:w-72 shrink-0">
                        <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white border border-border-dark/50 group bg-surface-dark">
                            <img src={book.coverUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="mt-8 space-y-4">
                            <button className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-xl shadow-lg shadow-primary/25 transition-all text-lg flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">auto_stories</span>
                                Đọc Ngay
                            </button>
                            <button className="w-full bg-white border-2 border-primary/20 text-primary font-bold py-4 rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">bookmark_add</span>
                                Thêm vào tủ sách
                            </button>
                        </div>

                        <div className="mt-8 bg-white/50 rounded-2xl border border-border-dark/50 p-6 space-y-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black text-text-muted uppercase tracking-widest">Lượt xem</span>
                                <span className="text-sm font-bold text-text-main">{book.views || '1.2M'}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black text-text-muted uppercase tracking-widest">Đề cử</span>
                                <span className="text-sm font-bold text-text-main">4.5K</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black text-text-muted uppercase tracking-widest">Trạng thái</span>
                                <span className="text-sm font-bold text-primary">Đang ra</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 py-4">
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {book.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-black tracking-tight border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                                <span className="px-3 py-1 bg-surface-dark text-text-muted rounded-full text-xs font-bold border border-border-dark/50">
                                    {book.category || 'Xuyên Không'}
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-black text-primary leading-tight mb-3 italic">{book.title}</h1>
                            <p className="text-xl font-bold text-text-muted flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[20px]">person</span>
                                {book.author}
                            </p>
                        </div>

                        {/* Description */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-border-dark/50 p-8 shadow-sm mb-10">
                            <h3 className="text-lg font-black text-text-main mb-6 border-b border-border-dark pb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">description</span>
                                Giới thiệu nội dung
                            </h3>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-text-main leading-relaxed font-medium">
                                    {book.description || `Truyện "${book.title}" của tác giả ${book.author} là một câu chuyện vô cùng hấp dẫn thuộc thể loại ${book.category || 'Huyền Huyễn'}. Cốt truyện lôi cuốn với những tình tiết bất ngờ, xây dựng thế giới rộng lớn với hệ thống tu luyện phong phú. Nhân vật chính được xây dựng có chiều sâu, thông minh và quyết đoán.`}
                                </p>
                                <p className="text-text-main leading-relaxed font-medium mt-4">
                                    Trương Huyền xuyên việt qua dị giới, thành một tên vinh quang giáo sư, trong đầu có thêm một cái thần bí thư viện. Chỉ cần là đồ vật hắn xem qua, vô luận là người hay là vật, đều có thể tự động tạo thành thư tịch, ghi chép lại ưu khuyết điểm của đối phương.
                                </p>
                            </div>
                        </div>

                        {/* Recent Chapters */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-border-dark pb-4">
                                <h3 className="text-xl font-black text-text-main flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">list</span>
                                    Chương mới nhất
                                </h3>
                                <Link href="#" className="text-sm font-bold text-primary hover:underline">Xem danh sách chương</Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(idx => (
                                    <div key={idx} className="p-4 rounded-xl bg-white border border-border-dark/50 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-surface-dark flex items-center justify-center text-xs font-bold text-text-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                {2342 - idx}
                                            </span>
                                            <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">Tiêu đề chương {2342 - idx}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-text-muted italic">{12 - idx} giờ trước</span>
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
        </div>
    );
}
