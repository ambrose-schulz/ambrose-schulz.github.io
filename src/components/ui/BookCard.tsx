import Link from 'next/link';
import { Book } from '@/types/book';

interface BookCardProps {
    book: Book;
    variant?: 'default' | 'compact' | 'horizontal';
}

const BookCard: React.FC<BookCardProps> = ({ book, variant = 'default' }) => {
    if (variant === 'horizontal') {
        return (
            <Link href={`/book/${book.id}`} className="block">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-surface-dark/40 hover:bg-surface-dark/70 transition-colors border border-transparent hover:border-border-dark group cursor-pointer">
                    <div className="w-12 h-16 rounded bg-surface-dark overflow-hidden shrink-0 border border-border-dark/30">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${book.coverUrl}")` }}
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            {book.category && (
                                <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-primary/20">
                                    {book.category}
                                </span>
                            )}
                            <h3 className="font-bold text-text-main truncate group-hover:text-primary transition-colors">
                                {book.title}
                            </h3>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-text-muted truncate">{book.lastChapter}</span>
                            <span className="text-xs text-text-muted/80 whitespace-nowrap flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">person</span> {book.author}
                            </span>
                        </div>
                    </div>
                    {book.updateTime && (
                        <div className="hidden sm:block text-xs text-text-muted/80 font-medium italic">{book.updateTime}</div>
                    )}
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/book/${book.id}`} className="block group">
            <div className="relative flex flex-col gap-3">
                <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-surface-dark relative shadow-md border border-border-dark/50">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url("${book.coverUrl}")` }}
                    />
                    {book.tags?.includes('FULL') && (
                        <div className="absolute top-2 right-2 bg-text-main/80 backdrop-blur-sm text-surface-light text-[10px] font-bold px-2 py-1 rounded">
                            FULL
                        </div>
                    )}
                    {book.tags?.includes('HOT') && (
                        <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm text-surface-light text-[10px] font-bold px-2 py-1 rounded">
                            HOT
                        </div>
                    )}
                    {book.views && (
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                            <p className="text-[10px] text-white font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">visibility</span> {book.views}
                            </p>
                        </div>
                    )}
                    {book.progress !== undefined && (
                        <div className="absolute inset-x-0 bottom-0 bg-surface-light/95 backdrop-blur-sm py-1.5 px-3 border-t border-border-dark/50 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-primary">{book.lastChapter}</span>
                            <span className="text-[10px] text-text-muted">{book.updateTime}</span>
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-base font-bold text-text-main line-clamp-1 group-hover:text-primary transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">person</span> {book.author}
                    </p>
                    {book.progress !== undefined && (
                        <div className="w-full bg-border-dark/50 h-1 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${book.progress}%` }} />
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
