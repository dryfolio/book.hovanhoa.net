import Link from 'next/link'
import { BASE_URL } from '@/constants'

export default function NotFound() {
    return (
        <main className="mx-auto grid min-h-[70vh] max-w-[var(--rd-maxw)] place-content-center gap-5 px-[var(--rd-pad)] text-center">
            <p className="m-0 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--rd-text-3)]">
                404
            </p>
            <h1 className="rd-display m-0 text-[var(--rd-text)]">
                Not on the shelf.
            </h1>
            <p className="m-0 text-[0.95rem] leading-[1.6] text-[var(--rd-text-2)]">
                This page was lent out and never came back.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-[var(--rd-text)] px-[1.05rem] text-[0.8125rem] font-medium text-[var(--rd-bg)] transition-opacity hover:opacity-90"
                >
                    Back to the shelf
                </Link>
                <a
                    href={BASE_URL}
                    className="inline-flex items-center gap-1 text-[0.875rem] text-[var(--rd-text-2)] transition-colors hover:text-[var(--rd-text)]"
                >
                    hovanhoa.net <span aria-hidden>→</span>
                </a>
            </div>
        </main>
    )
}
