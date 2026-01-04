import React from 'react';
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';

const NOTIFICATIONS = [
    {
        id: '1',
        title: 'Thiên Đạo Đồ Thư Quán',
        message: 'vừa cập nhật chương mới.',
        detail: 'Chương 2342: Hư Không',
        time: 'Vừa xong',
        type: 'update',
        isRead: false,
        icon: 'menu_book',
        color: 'text-primary'
    },
    {
        id: '2',
        title: 'Hệ thống',
        message: 'Chào mừng bạn gia nhập Truyện Hay!',
        time: '1 giờ trước',
        type: 'system',
        isRead: false,
        icon: 'campaign',
        color: 'text-blue-600'
    },
    {
        id: '3',
        title: 'Vong Ngữ',
        message: 'đã trả lời bình luận của bạn tại',
        linkText: 'Phàm Nhân Tu Tiên',
        time: 'Hôm qua',
        type: 'comment',
        isRead: true,
        icon: 'forum',
        color: 'text-green-600'
    },
    {
        id: '4',
        title: 'Khuyến mãi',
        message: 'Nạp linh thạch nhận ngay 50% giá trị trong tuần lễ vàng.',
        time: '2 ngày trước',
        type: 'promo',
        isRead: true,
        icon: 'payments',
        color: 'text-orange-600'
    },
];

export default function NotificationsPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow w-full max-w-[800px] mx-auto px-4 sm:px-6 py-10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-primary mb-2">Thông Báo</h1>
                        <p className="text-text-muted font-medium">Theo dõi các cập nhật mới nhất từ tủ sách của bạn</p>
                    </div>
                    <button className="text-sm font-bold text-primary hover:text-primary-hover transition-colors px-4 py-2 rounded-xl border border-primary/20 hover:bg-primary/5">
                        Đánh dấu tất cả đã đọc
                    </button>
                </div>

                <div className="bg-surface-light rounded-3xl border border-border-dark/50 shadow-sm overflow-hidden divide-y divide-border-dark/30">
                    {NOTIFICATIONS.map((notif) => (
                        <div
                            key={notif.id}
                            className={`p-6 flex gap-5 hover:bg-surface-dark/20 transition-colors cursor-pointer relative ${!notif.isRead ? 'bg-primary/5' : ''}`}
                        >
                            {!notif.isRead && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                            )}

                            <div className="shrink-0">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-border-dark/50 shadow-sm ${notif.color}`}>
                                    <span className="material-symbols-outlined text-[24px]">{notif.icon}</span>
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-text-main leading-relaxed">
                                        <span className="font-black">{notif.title}</span> {notif.message}
                                        {notif.linkText && (
                                            <span className="font-bold text-primary italic ml-1">"{notif.linkText}"</span>
                                        )}
                                    </p>
                                    <span className="text-xs font-semibold text-text-muted whitespace-nowrap bg-surface-dark/50 px-2 py-1 rounded-lg italic">
                                        {notif.time}
                                    </span>
                                </div>

                                {notif.detail && (
                                    <p className="mt-2 text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg inline-block">
                                        {notif.detail}
                                    </p>
                                )}
                            </div>

                            <div className="shrink-0 self-center">
                                <button className="p-2 rounded-full hover:bg-surface-dark transition-all text-text-muted opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="text-sm font-bold text-text-muted hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto">
                        Tải thêm thông báo cũ
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
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
