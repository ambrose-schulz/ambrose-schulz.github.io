import React from 'react';
import Navbar from '@/components/common/Navbar';

const GENRES = [
    { name: 'Tiên Hiệp', icon: 'auto_awesome', count: '1,234', color: 'bg-blue-500' },
    { name: 'Huyền Huyễn', icon: 'auto_fix_high', count: '2,567', color: 'bg-purple-500' },
    { name: 'Đô Thị', icon: 'domain', count: '3,890', color: 'bg-green-500' },
    { name: 'Khoa Huyễn', icon: 'rocket_launch', count: '890', color: 'bg-cyan-500' },
    { name: 'Võng Du', icon: 'sports_esports', count: '1,120', color: 'bg-indigo-500' },
    { name: 'Lịch Sử', icon: 'history_edu', count: '760', color: 'bg-orange-500' },
    { name: 'Dị Giới', icon: 'public', count: '1,450', color: 'bg-red-500' },
    { name: 'Trọng Sinh', icon: 'update', count: '980', color: 'bg-emerald-500' },
    { name: 'Kiếm Hiệp', icon: 'colorize', count: '650', color: 'bg-rose-500' },
    { name: 'Ngôn Tình', icon: 'favorite', count: '4,100', color: 'bg-pink-500' },
    { name: 'Trinh Thám', icon: 'search', count: '320', color: 'bg-slate-500' },
    { name: 'Kinh Dị', icon: 'skull', count: '210', color: 'bg-gray-700' },
];

export default function GenresPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3">Tất Cả Thể Loại</h1>
                    <p className="text-text-muted font-medium">Khám phá kho tàng truyện phong phú theo sở thích của bạn</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GENRES.map((genre) => (
                        <div
                            key={genre.name}
                            className="group relative overflow-hidden rounded-2xl bg-surface-dark/40 border border-border-dark/50 p-6 hover:bg-surface-dark/70 hover:border-primary/30 transition-all cursor-pointer shadow-sm hover:shadow-xl"
                        >
                            <div className={`absolute -right-6 -bottom-6 w-32 h-32 ${genre.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`w-14 h-14 rounded-xl ${genre.color} text-white flex items-center justify-center shadow-lg shadow-${genre.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-[32px]">{genre.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">{genre.name}</h3>
                                    <p className="text-sm font-semibold text-text-muted mt-1">{genre.count} truyện</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                                Xem ngay <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                            </div>
                        </div>
                    ))}
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
