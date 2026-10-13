import Link from 'next/link'
import { BASE_URL } from '@/constants'

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="rd-eyebrow">404</p>
            <h1 className="text-2xl font-semibold text-[var(--rd-text)]">
                this page isn&apos;t on the shelf.
            </h1>
            <Link href="/" className="rd-ulink">
                back to the shelf
            </Link>
            <Link
                href={BASE_URL}
                className="font-[family-name:var(--font-mono)] text-sm text-[var(--rd-text-3)]"
            >
                or hovanhoa.net
            </Link>
        </main>
    )
}
