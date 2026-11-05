import Image from 'next/image'
import { coverUrl, SECTIONS, type Book } from '@/data/books'
import { StatusPill } from '@/components/status-pill'

function Cover({
    book,
    sizes,
    className = '',
}: {
    book: Book
    sizes: string
    className?: string
}) {
    return (
        <div
            className={`relative aspect-[2/3] w-full overflow-hidden rounded-[var(--rd-r-sm)] border border-[var(--rd-border)] bg-[var(--rd-surface-2)] ${className}`}
        >
            <Image
                src={coverUrl(book)}
                alt={`${book.title} cover`}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
        </div>
    )
}

// BookCard — cover-forward shelf tile: cover, title, author, quote.
export function BookCard({ book }: { book: Book }) {
    return (
        <article className="group flex h-full flex-col">
            <Cover
                book={book}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
            />
            <div className="mt-3 flex min-w-0 flex-1 flex-col">
                <h3
                    className="m-0 text-[0.95rem] font-medium leading-[1.3] tracking-[-0.02em] text-[var(--rd-text)]"
                    title={book.shortTitle ? book.title : undefined}
                >
                    {book.shortTitle ?? book.title}
                </h3>
                <p className="m-0 mt-1 line-clamp-2 font-[family-name:var(--font-mono)] text-[0.72rem] leading-[1.45] text-[var(--rd-text-3)]">
                    {book.author}
                </p>
                <p className="m-0 mt-2 line-clamp-3 font-[family-name:var(--font-display)] text-[0.92rem] italic leading-[1.45] text-[var(--rd-text-2)]">
                    &ldquo;{book.quote}&rdquo;
                </p>
                <div className="mt-2.5">
                    <StatusPill status={book.status} />
                </div>
            </div>
        </article>
    )
}

// BookRow — list row used for the "Currently reading" block.
export function BookRow({ book }: { book: Book }) {
    const shelf = SECTIONS.find((s) => s.key === book.section)
    return (
        <li className="group flex min-w-0 gap-4 border-b border-[var(--rd-line)] px-[1.15rem] py-4 transition-colors last:border-b-0 hover:bg-[var(--rd-surface-2)] sm:gap-5">
            <a
                href={`#${book.section}`}
                className="block w-[56px] shrink-0 sm:w-[64px]"
                aria-label={`${book.title} — ${shelf?.title ?? book.section}`}
            >
                <Cover book={book} sizes="64px" className="!rounded-[6px]" />
            </a>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2">
                    <StatusPill status={book.status} />
                    {shelf && (
                        <span className="font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--rd-text-3)]">
                            {shelf.label}
                        </span>
                    )}
                </div>
                <h3
                    className="m-0 mt-1.5 text-[0.95rem] font-medium leading-[1.3] tracking-[-0.02em] text-[var(--rd-text)]"
                    title={book.shortTitle ? book.title : undefined}
                >
                    {book.shortTitle ?? book.title}
                </h3>
                <p className="m-0 mt-0.5 truncate font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--rd-text-3)]">
                    {book.author}
                </p>
                <p className="m-0 mt-1.5 line-clamp-2 text-[0.82rem] leading-[1.5] text-[var(--rd-text-2)]">
                    &ldquo;{book.quote}&rdquo;
                </p>
            </div>
        </li>
    )
}

export default BookCard
