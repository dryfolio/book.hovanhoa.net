import { BOOK_URL } from '@/constants'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${BOOK_URL}/sitemap.xml`,
        host: BOOK_URL,
    }
}
