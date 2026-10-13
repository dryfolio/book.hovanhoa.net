import Image from 'next/image'
import { coverUrl, type Book } from '@/data/books'

export function BookCard({ book }: { book: Book }) {
    return (
        <div className="rd-card group flex gap-4 p-4 hover:border-[var(--rd-border-2)] sm:p-5">
            <div className="relative h-[108px] w-[72px] shrink-0 overflow-hidden rounded-[var(--rd-r-sm)] border border-[var(--rd-border)] bg-[var(--rd-surface-2)] sm:h-[132px] sm:w-[88px]">
                <Image
                    src={coverUrl(book)}
                    alt={`${book.title} cover`}
                    fill
                    sizes="(max-width: 640px) 72px, 88px"
                    className="object-cover"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                    <h3
                        className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[var(--rd-text)] sm:text-base"
                        title={book.shortTitle ? book.title : undefined}
                    >
                        {book.shortTitle ?? book.title}
                    </h3>
                    {book.status === 'reading' && (
                        <span className="rd-chip shrink-0 !border-[var(--rd-accent-bg)] !bg-[var(--rd-accent-bg)] !px-2 !py-0.5 !text-[11px] !text-[var(--rd-accent-ink)]">
                            reading
                        </span>
                    )}
                </div>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[12px] text-[var(--rd-text-3)]">
                    {book.author}
                </p>
                <p className="mt-2.5 text-[13.5px] italic leading-[1.55] text-[var(--rd-text-2)]">
                    &ldquo;{book.quote}&rdquo;
                </p>
            </div>
        </div>
    )
}

export default BookCard
