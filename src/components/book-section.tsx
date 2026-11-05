import { BOOKS, type SectionMeta } from '@/data/books'
import { Reveal } from '@/components/redesign/reveal'
import { BookCard } from '@/components/book-card'
import { SectionHead } from '@/components/section-head'

export function BookSection({ section }: { section: SectionMeta }) {
    const books = BOOKS.filter((b) => b.section === section.key)
    if (books.length === 0) return null
    const reading = books.filter((b) => b.status === 'reading').length

    return (
        <section
            id={section.key}
            className="scroll-mt-20 border-t border-[var(--rd-line)] py-[clamp(48px,6vw,80px)]"
        >
            <SectionHead
                title={section.title}
                meta={`${books.length} ${books.length === 1 ? 'book' : 'books'}${
                    reading ? ` · ${reading} in progress` : ''
                }`}
            >
                <p className="m-0 mt-2 max-w-[58ch] text-[0.95rem] leading-[1.6] text-[var(--rd-text-2)]">
                    {section.desc}
                </p>
            </SectionHead>

            <div className="grid grid-cols-2 gap-x-[clamp(1rem,2.5vw,1.75rem)] gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                {books.map((book, i) => (
                    <Reveal key={book.slug} delay={i * 40}>
                        <BookCard book={book} />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default BookSection
