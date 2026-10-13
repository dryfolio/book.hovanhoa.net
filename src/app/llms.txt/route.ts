import { BOOKS, SECTIONS } from '@/data/books'
import { BOOK_URL, FULL_NAME } from '@/constants'

export async function GET() {
    const lines: string[] = [
        `# ${FULL_NAME} | book`,
        '',
        `A shelf of the books ${FULL_NAME} has read, grouped by life, investment, software, and language. ${BOOK_URL}`,
        '',
    ]

    for (const section of SECTIONS) {
        lines.push(`## ${section.title}`)
        for (const book of BOOKS.filter((b) => b.section === section.key)) {
            lines.push(
                `- ${book.title} — ${book.author} (${book.status}): "${book.quote}"`
            )
        }
        lines.push('')
    }

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
}
