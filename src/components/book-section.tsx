import { BOOKS, type SectionMeta } from '@/data/books'
import { Eyebrow } from '@/components/redesign/eyebrow'
import { Reveal } from '@/components/redesign/reveal'
import { BookCard } from '@/components/book-card'

export function BookSection({ section, num }: { section: SectionMeta; num: string }) {
    const books = BOOKS.filter((b) => b.section === section.key)
    if (books.length === 0) return null

    return (
        <section id={section.key} className="scroll-mt-24">
            <Eyebrow num={num}>{section.label}</Eyebrow>
            <h2 className="rd-h-sec mt-2 text-[var(--rd-text)]">
                {section.title}
            </h2>
            <p className="rd-lead mt-2">{section.desc}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
