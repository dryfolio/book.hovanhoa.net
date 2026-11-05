import type { Status } from '@/data/books'

const STYLES: Record<Status, { label: string; cls: string }> = {
    reading: {
        label: 'Reading',
        cls: 'bg-[var(--rd-label-plum)] text-[var(--rd-label-plum-fg)]',
    },
    read: {
        label: 'Finished',
        cls: 'bg-[var(--rd-label-pine)] text-[var(--rd-label-pine-fg)]',
    },
}

// StatusPill — small muted label for a book's reading status.
export function StatusPill({ status }: { status: Status }) {
    const s = STYLES[status]
    return (
        <span
            className={`inline-flex shrink-0 items-center rounded-full px-[0.45rem] py-[0.1rem] text-[0.68rem] font-medium leading-[1.4] ${s.cls}`}
        >
            {s.label}
        </span>
    )
}

export default StatusPill
