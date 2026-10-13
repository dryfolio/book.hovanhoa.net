import { MetadataRoute } from 'next'
import { BOOK_URL } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BOOK_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
