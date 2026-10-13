# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier (write)
npm run format-check # Prettier (check only)
```

## Architecture

**Next.js 14 App Router** personal bookshelf site, part of the `*.hovanhoa.net` subdomain family. Static content — no CMS, no database, no API calls at runtime beyond remote cover images.

### Data

- `src/data/books.ts` — single source of truth. `BOOKS: Book[]` holds every entry (`slug`, `title`, `author`, `coverId?`, `coverSrc?`, `quote`, `section`, `status`); `SECTIONS: SectionMeta[]` defines the four shelves (`life`, `investment`, `software`, `language`) and their display order/copy.
- `coverUrl(book)` resolves a book's cover image: `coverSrc` wins if set (a direct URL, for books with no usable Open Library entry), otherwise it builds the Open Library cover URL from `coverId` (`https://covers.openlibrary.org/b/id/<id>-L.jpg`). Cover ids/ISBNs are looked up via the Open Library search API — always spot-check the resulting image, since Open Library sometimes attaches the wrong edition's cover to a work.
- `src/constants/index.tsx` — site identity and the family's subdomain URLs (home, insight, gallery, music, status, info, book).

### Key Files

- `src/app/page.tsx` — the whole page: header panel + one `BookSection` per shelf.
- `src/components/book-section.tsx` — renders a shelf's heading + `BookCard` grid, filtering `BOOKS` by `section`.
- `src/components/book-card.tsx` — cover image, title, author, quote, and a `reading` chip when `status === 'reading'`.
- `src/components/nav.tsx` / `src/components/footer.tsx` — shared family chrome (mega-menu, dark-mode cookie synced across `*.hovanhoa.net`, footer link columns).

### Styling

This repo reuses the `--rd-*` design-token layer shared across the `hovanhoa.net` family (see `DESIGN.md` in the `hovanhoa.net` repo for the full system): near-monochrome canvas, Geist Sans for prose, Geist Mono for all meta/labels, a single ember-orange accent, flat border-drawn surfaces (no shadows except the nav's floating menu), body text lowercased via CSS.

### Adding a Book

1. Look up its Open Library cover id: `curl "https://openlibrary.org/search.json?q=title:<title>+author:<author>&fields=cover_i"`.
2. Add an entry to `BOOKS` in `src/data/books.ts` with that `coverId`, a real quote, and the right `section`/`status`.
3. The page picks it up automatically — no other files to touch.

### SEO Routes

- `src/app/sitemap.ts` — dynamic XML sitemap
- `src/app/robot.ts` — robots.txt
- `src/app/llms.txt/route.ts` — plain-text LLM-readable listing of every book, generated from `src/data/books.ts`
