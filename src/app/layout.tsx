import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { BOOK_URL, FULL_NAME, IMAGE, NAME, ROLE, TWITTER } from '@/constants'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL(BOOK_URL),
    title: {
        default: `${NAME} | book`,
        template: `%s | ${NAME}`,
    },
    description: `${FULL_NAME} - ${ROLE}. A shelf of the books I've read — life, investment, software, and language.`,
    keywords: [
        FULL_NAME,
        'Hồ Văn Hòa',
        NAME,
        'hovanhoa',
        ROLE,
        'books',
        'reading list',
        'bookshelf',
        'book quotes',
    ],
    authors: [{ name: FULL_NAME }],
    openGraph: {
        title: `${NAME} | book`,
        description: `${FULL_NAME} - ${ROLE}. A shelf of the books I've read — life, investment, software, and language.`,
        url: BOOK_URL,
        siteName: NAME,
        images: [
            {
                url: IMAGE,
                width: 800,
                height: 600,
                alt: FULL_NAME,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: `${NAME} | book`,
        description: `${FULL_NAME} - ${ROLE}. A shelf of the books I've read.`,
        creator: `@${TWITTER}`,
        images: [IMAGE],
    },
    alternates: {
        canonical: BOOK_URL,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body className={GeistSans.className}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var m=document.cookie.match(/(?:^|; )theme=(dark|light)/);if(m&&m[1]==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
                    }}
                />
                {children}
            </body>
            <Analytics />
        </html>
    )
}
