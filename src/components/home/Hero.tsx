import Link from 'next/link';

const Hero = () => {
    return (
        <section className="@container w-full">
            <div className="relative overflow-hidden rounded-2xl bg-surface-dark border border-border-dark shadow-xl">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row p-6 md:p-10 gap-8 items-center md:items-start relative z-10">
                    <div className="shrink-0 w-48 md:w-64 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/30 group">
                        <div
                            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgtJA0PESBxSnEvtGQXox7VbrZBWzTvyMY3n709VWEdMPOBs6c4m3QGHz9LR_uAf7OzJFpZLRpzSKQ39zVcAOwTwb8Op3oW82f1MjEd-fqlq6OfMAdfGBBUMENZhQHMQOFgJuw_hbOPc1pCkAK12dUpUkpFb-U6FdFmnErDLCjMBBsUxsqf0BEHDarUlgSpykO1aouyNLzqmbFFl8lqkOetVrLWLbUTMkwzGIv6Ykds50cqyKronff6YMeiR16Qyoy21-WSJuqnjk")' }}
                        ></div>
                    </div>
                    <div className="flex-1 flex flex-col text-center md:text-left h-full justify-center">
                        <div className="mb-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
                                Đề Cử Tuần
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-2 tracking-tight">
                                Thiên Đạo Đồ Thư Quán
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-text-muted mb-6">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">edit</span> Hoành Tảo Thiên Nhai
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">category</span> Huyền Huyễn
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">list</span> 2341 Chương
                                </span>
                            </div>
                        </div>
                        <p className="text-text-main text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4 mb-8 max-w-2xl font-medium">
                            Trương Huyền xuyên việt qua dị giới, thành một tên vinh quang giáo sư, trong đầu có thêm một cái thần bí thư viện. Chỉ cần là đồ vật hắn xem qua, vô luận là người hay là vật, đều có thể tự động tạo thành thư tịch, ghi chép lại ưu khuyết điểm của đối phương.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <Link href="/book/1" className="bg-primary hover:bg-primary-hover text-surface-light font-bold rounded-lg px-8 py-3 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">auto_stories</span>
                                Đọc Ngay
                            </Link>
                            <button className="bg-white hover:bg-white/80 text-primary border border-primary/20 font-bold rounded-lg px-6 py-3 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined">bookmark_add</span>
                                Thêm vào tủ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
