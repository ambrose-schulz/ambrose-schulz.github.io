import React from 'react';
import Navbar from '@/components/common/Navbar';

export default function SearchAdvancedPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-primary mb-2">Tìm Kiếm Nâng Cao</h1>
                    <p className="text-text-muted font-medium">Lọc truyện chính xác theo các thông số chi tiết</p>
                </div>

                <div className="bg-surface-dark/30 rounded-3xl border border-border-dark/50 p-6 md:p-10 shadow-sm">
                    <form className="space-y-10">
                        {/* Keyword Search */}
                        <div className="space-y-4">
                            <label className="text-lg font-bold text-text-main flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">search</span>
                                Từ khóa
                            </label>
                            <input
                                type="text"
                                placeholder="Tên truyện, tác giả, hoặc một đoạn mô tả..."
                                className="w-full bg-white rounded-2xl border border-border-dark/50 py-4 px-6 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-inner"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Category Filter */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-text-muted uppercase tracking-wider">Thể loại</label>
                                <select className="w-full bg-white rounded-xl border border-border-dark/50 py-3 px-4 text-text-main focus:ring-2 focus:ring-primary focus:border-primary">
                                    <option>Tất cả thể loại</option>
                                    <option>Tiên Hiệp</option>
                                    <option>Huyền Huyễn</option>
                                    <option>Đô Thị</option>
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-text-muted uppercase tracking-wider">Trạng thái</label>
                                <select className="w-full bg-white rounded-xl border border-border-dark/50 py-3 px-4 text-text-main focus:ring-2 focus:ring-primary focus:border-primary">
                                    <option>Tất cả</option>
                                    <option>Đang ra</option>
                                    <option>Hoàn thành</option>
                                    <option>Tạm ngưng</option>
                                </select>
                            </div>

                            {/* Chapter Count */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-text-muted uppercase tracking-wider">Số chương</label>
                                <select className="w-full bg-white rounded-xl border border-border-dark/50 py-3 px-4 text-text-main focus:ring-2 focus:ring-primary focus:border-primary">
                                    <option>Tất cả</option>
                                    <option>Dưới 100 chương</option>
                                    <option>100 - 500 chương</option>
                                    <option>Trên 500 chương</option>
                                </select>
                            </div>

                            {/* Sort Order */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-text-muted uppercase tracking-wider">Sắp xếp theo</label>
                                <select className="w-full bg-white rounded-xl border border-border-dark/50 py-3 px-4 text-text-main focus:ring-2 focus:ring-primary focus:border-primary">
                                    <option>Mới cập nhật</option>
                                    <option>Lượt xem nhiều nhất</option>
                                    <option>Đánh giá cao nhất</option>
                                    <option>Số chương nhiều nhất</option>
                                </select>
                            </div>
                        </div>

                        {/* Search Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-dark/30">
                            <button type="submit" className="flex-1 bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 text-lg">
                                <span className="material-symbols-outlined">filter_list</span>
                                Bắt đầu tìm kiếm
                            </button>
                            <button type="reset" className="px-10 py-4 bg-white border border-border-dark text-text-muted font-bold rounded-2xl hover:bg-surface-light hover:text-primary transition-all">
                                Thiết lập lại
                            </button>
                        </div>
                    </form>
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
