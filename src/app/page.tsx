import Navbar from '@/components/nav'
import { Footer } from '@/components/footer'
import { Eyebrow } from '@/components/redesign/eyebrow'
import { BookSection } from '@/components/book-section'
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
const readingCount = BOOKS.filter((b) => b.status === 'reading').length

export default function BookShelf() {
    return (
        <main className="min-h-screen">
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

            {/* ---- sticky header ---- */}
            <header className="sticky top-0 z-50 border-b border-[var(--rd-border-2)] bg-[var(--rd-bg-sub)] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="mx-auto w-full max-w-[var(--rd-maxw)] px-[var(--rd-pad)] py-3">
                    <Navbar />
                </div>
            </header>

            {/* ---- header panel ---- */}
            <div
                className="border-b border-[var(--rd-border)]"
                style={{
                    background:
                        'radial-gradient(100% 140% at 0% 0%, var(--rd-accent-bg), transparent 55%), var(--rd-surface-2)',
                }}
            >
                <div className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-12 pt-12">
                    <Eyebrow>hovanhoa · book</Eyebrow>
                    <h1 className="mt-[18px] max-w-[22ch] text-[clamp(2rem,4.6vw,3.4rem)] font-semibold tracking-[-0.04em] text-[var(--rd-text)]">
                        What I&apos;ve read.
                    </h1>
                    <p className="rd-lead mt-5">
                        A small, honest shelf — the books that actually
                        shaped how i think about life, money, and the systems
                        i build. No star ratings, just the line that stuck.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-xs text-[var(--rd-text-3)]">
                        <span>{readCount} read</span>
                        <span aria-hidden>·</span>
                        <span>{readingCount} in progress</span>
                        <span aria-hidden>·</span>
                        <span>{SECTIONS.length} shelves</span>
                    </div>
                    <nav
                        aria-label="jump to shelf"
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {SECTIONS.map((s) => (
                            <a
                                key={s.key}
                                href={`#${s.key}`}
                                className="rd-chip hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent-ink)]"
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ---- body ---- */}
            <div className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-[clamp(56px,8vw,96px)] pt-[clamp(28px,4vw,44px)]">
                <div className="space-y-16">
                    {SECTIONS.map((s, i) => (
                        <BookSection
                            key={s.key}
                            section={s}
                            num={String(i + 1).padStart(2, '0')}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}
