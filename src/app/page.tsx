import { BookSection } from '@/components/book-section'
import { BookRow } from '@/components/book-card'
import { SectionHead } from '@/components/section-head'
import { BOOKS, SECTIONS } from '@/data/books'
import {
    BOOK_URL,
    FULL_NAME,
    GITHUB,
    IMAGE,
    LINKEDIN,
    NAME,
    ROLE,
    TWITTER,
} from '@/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'hovanhoa | book',
    description: `${FULL_NAME} - ${ROLE}. A shelf of the books I've read — life, investment, software, and language.`,
    alternates: {
        canonical: BOOK_URL,
    },
}

const readCount = BOOKS.filter((b) => b.status === 'read').length
const reading = BOOKS.filter((b) => b.status === 'reading')
const readingCount = reading.length

const SECTION =
    'mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] py-[clamp(48px,6vw,80px)]'

export default function BookShelf() {
    return (
        <main className="relative min-h-screen bg-[var(--rd-bg)] text-[var(--rd-text)]">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        name: `${NAME} | book`,
                        url: BOOK_URL,
                        author: {
                            '@type': 'Person',
                            name: FULL_NAME,
                            alternateName: NAME,
                            jobTitle: ROLE,
                            image: `${BOOK_URL}${IMAGE}`,
                            sameAs: [
                                `https://twitter.com/${TWITTER}`,
                                `https://github.com/${GITHUB}`,
                                `https://linkedin.com/in/${LINKEDIN}`,
                            ],
                        },
                        description: `A shelf of the books ${FULL_NAME} has read — life, investment, software, and language.`,
                    }),
                }}
            />

            {/* ---- page header ---- */}
            <section className="mx-auto w-full max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-[clamp(2rem,4vw,3rem)] pt-[clamp(3.5rem,8vw,6.5rem)]">
                <div className="rd-rise max-w-[46rem]">
                    <h1 className="rd-display m-0 text-[var(--rd-text)]">
                        What I&apos;ve read
                    </h1>
                    <p className="m-0 mt-[clamp(1.1rem,2vw,1.5rem)] max-w-[56ch] text-pretty text-[clamp(0.98rem,1.25vw,1.0625rem)] leading-[1.65] text-[var(--rd-text-2)]">
                        A small, honest shelf — the books that actually shaped
                        how I think about life, money, and the systems I build.
                        No star ratings, just the line that stuck.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--rd-text-3)]">
                        <span>{readCount} finished</span>
                        <span aria-hidden>·</span>
                        <span>{readingCount} in progress</span>
                        <span aria-hidden>·</span>
                        <span>{SECTIONS.length} shelves</span>
                    </div>
                    <nav
                        aria-label="Jump to shelf"
                        className="mt-[clamp(1.2rem,2.2vw,1.7rem)] flex flex-wrap items-center gap-[0.55rem]"
                    >
                        {SECTIONS.map((s, i) => (
                            <span
                                key={s.key}
                                className="inline-flex items-center gap-[0.55rem]"
                            >
                                {i > 0 && (
                                    <span
                                        aria-hidden
                                        className="select-none text-[var(--rd-text-4)]"
                                    >
                                        |
                                    </span>
                                )}
                                <a
                                    href={`#${s.key}`}
                                    className="border-b border-[color-mix(in_srgb,var(--rd-text)_22%,transparent)] text-[0.875rem] tracking-[-0.01em] text-[var(--rd-text)] transition-colors hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent-ink)]"
                                >
                                    {s.title}
                                </a>
                            </span>
                        ))}
                    </nav>
                </div>
            </section>

            {/* ---- currently reading ---- */}
            {reading.length > 0 && (
                <section
                    id="reading"
                    className={`${SECTION} scroll-mt-20 !pb-[clamp(40px,5vw,64px)] !pt-[clamp(1rem,3vw,2rem)]`}
                >
                    <SectionHead
                        title="Currently reading"
                        meta={`${reading.length} on the nightstand`}
                    />
                    <ul className="m-0 flex list-none flex-col overflow-hidden rounded-[var(--rd-r-lg)] border border-[var(--rd-border)] bg-[var(--rd-surface)] p-0">
                        {reading.map((book) => (
                            <BookRow key={book.slug} book={book} />
                        ))}
                    </ul>
                </section>
            )}

            {/* ---- shelves ---- */}
            <div className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-[clamp(24px,4vw,48px)]">
                {SECTIONS.map((s) => (
                    <BookSection key={s.key} section={s} />
                ))}
            </div>
        </main>
    )
}
