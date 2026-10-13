export type Section = 'life' | 'investment' | 'software' | 'language'
export type Status = 'read' | 'reading'

export type Book = {
    slug: string
    title: string
    /** Shorter display title for the card — falls back to `title` when unset. */
    shortTitle?: string
    author: string
    /** Open Library cover id — image served from covers.openlibrary.org */
    coverId?: number
    /** Direct cover image URL — used when a book has no Open Library cover. */
    coverSrc?: string
    quote: string
    section: Section
    status: Status
}

export type SectionMeta = {
    key: Section
    label: string
    title: string
    desc: string
}

// Order here controls display order on the page.
export const SECTIONS: SectionMeta[] = [
    {
        key: 'life',
        label: 'life',
        title: 'On living well',
        desc: 'Mindset, resilience, and how to spend the one life you get.',
    },
    {
        key: 'investment',
        label: 'investment',
        title: 'On capital',
        desc: 'Markets, value, and the patience investing actually requires.',
    },
    {
        key: 'software',
        label: 'software',
        title: 'On building systems',
        desc: 'Writing good code and designing systems that hold up at scale.',
    },
    {
        key: 'language',
        label: 'language',
        title: 'On language',
        desc: 'Sharpening how I read, write, and speak.',
    },
]

export function coverUrl(book: Pick<Book, 'coverId' | 'coverSrc'>): string {
    if (book.coverSrc) return book.coverSrc
    if (book.coverId) return `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
    return ''
}

export const BOOKS: Book[] = [
    // ---- life ----
    {
        slug: 'subtle-art-of-not-giving-a-fuck',
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        coverId: 8231990,
        quote: "The key to a good life is not giving a f*ck about more; it's giving a f*ck about less — about only what is true, immediate, and important.",
        section: 'life',
        status: 'read',
    },
    {
        slug: 'stoicism-theodore-scott',
        title: 'Stoicism: The Ultimate Guide to Gain Resilience, Wisdom, Self Discipline, Calmness, and Critical Thinking Through the Teachings of Ancient Stoics',
        shortTitle: 'Stoicism',
        author: 'Theodore Scott',
        coverSrc:
            'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1569403951l/49433442.jpg',
        quote: 'You have power over your mind — not outside events. Realize this, and you will find strength.',
        section: 'life',
        status: 'read',
    },
    {
        slug: 'make-it-stick',
        title: 'Make It Stick',
        author: 'Peter C. Brown, Henry L. Roediger III & Mark A. McDaniel',
        coverId: 8188891,
        quote: "When learning is harder, it's stronger and lasts longer.",
        section: 'life',
        status: 'read',
    },
    {
        slug: 'thinking-fast-and-slow',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        coverId: 13290711,
        quote: 'Nothing in life is as important as you think it is, while you are thinking about it.',
        section: 'life',
        status: 'reading',
    },

    // ---- investment ----
    {
        slug: 'the-warren-buffett-way',
        title: 'The Warren Buffett Way',
        author: 'Robert G. Hagstrom',
        coverId: 9700984,
        quote: 'Price is what you pay. Value is what you get.',
        section: 'investment',
        status: 'read',
    },
    {
        slug: 'the-intelligent-investor',
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        coverId: 36434,
        quote: 'In the short run, the market is a voting machine, but in the long run, it is a weighing machine.',
        section: 'investment',
        status: 'read',
    },

    // ---- software ----
    {
        slug: 'learning-go',
        title: 'Learning Go',
        author: 'Jon Bodner',
        coverId: 11872181,
        quote: 'Clear is better than clever.',
        section: 'software',
        status: 'read',
    },
    {
        slug: 'system-design-interview',
        title: "System Design Interview — An Insider's Guide",
        author: 'Alex Xu',
        coverId: 11916707,
        quote: 'There is no perfect system design — only trade-offs.',
        section: 'software',
        status: 'read',
    },
    {
        slug: 'java-the-complete-reference',
        title: 'Java: The Complete Reference',
        author: 'Herbert Schildt',
        coverId: 13660534,
        quote: 'Write once, run anywhere.',
        section: 'software',
        status: 'read',
    },
    {
        slug: 'fundamentals-of-database-systems',
        title: 'Fundamentals of Database Systems',
        author: 'Ramez Elmasri & Shamkant B. Navathe',
        coverSrc: 'https://covers.openlibrary.org/b/isbn/9780133970777-L.jpg',
        quote: 'A database-management system (DBMS) is a collection of programs that enables users to create and maintain a database.',
        section: 'software',
        status: 'reading',
    },
    {
        slug: 'designing-data-intensive-applications',
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        coverId: 8434671,
        quote: 'In distributed systems, suspicion, pessimism, and paranoia pay off.',
        section: 'software',
        status: 'reading',
    },

    // ---- language ----
    {
        slug: 'the-official-cambridge-guide-to-ielts',
        title: 'The Official Cambridge Guide to IELTS',
        author: 'Pauline Cullen, Amanda French & Vanessa Jakeman',
        coverId: 10247579,
        quote: 'Success in IELTS comes from consistent, deliberate practice across all four skills — listening, reading, writing, and speaking.',
        section: 'language',
        status: 'reading',
    },
]

export function booksBySection(section: Section): Book[] {
    return BOOKS.filter((b) => b.section === section)
}
