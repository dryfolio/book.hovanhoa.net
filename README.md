# book.hovanhoa.net

A small personal bookshelf — covers, titles, and the quotes that stuck, grouped into **life**, **investment**, **software**, and **language**. Part of the `*.hovanhoa.net` family (same design system as [hovanhoa.net](https://hovanhoa.net) and [insight.hovanhoa.net](https://insight.hovanhoa.net)).

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + the shared `--rd-*` editorial design tokens (Geist Sans/Mono, ember-orange accent)
- Covers: fetched from [Open Library Covers](https://openlibrary.org/dev/docs/api/covers) by cover id — no local image assets needed
- Deployment: Vercel

## Running Locally

Requires Node.js v18+.

```bash
npm install
npm run dev
```

## Customization

All book data lives in `src/data/books.ts` — each entry is a `{ slug, title, author, coverId?, coverSrc?, quote, section, status }` object. To add a book:

1. Find its Open Library cover id: `https://openlibrary.org/search.json?q=title:<title>+author:<author>&fields=cover_i` — grab `cover_i` and use it as `coverId`. **Verify it visually first** (`https://covers.openlibrary.org/b/id/<cover_i>-L.jpg`) — Open Library merges editions under one "work", so the returned `cover_i` sometimes belongs to a different edition than the one you mean (e.g. an old hardcover instead of the current printing).
2. If search has no cover, try the exact-ISBN cover endpoint: `https://covers.openlibrary.org/b/isbn/<isbn>-L.jpg`, and set `coverSrc` to that URL instead of `coverId`.
3. If Open Library has nothing at all (common for self-published/niche titles), use `coverSrc` with a direct image URL (e.g. from a Goodreads book page's cover `<img>`), and add the image's host to `images.remotePatterns` in `next.config.js`.
4. Append an entry to `BOOKS` with `section` one of `'life' | 'investment' | 'software' | 'language'` and `status` one of `'read' | 'reading'`.

Shelves themselves (titles/descriptions/order) are defined in the `SECTIONS` array in the same file.

Site identity (name, socials, family subdomain URLs) lives in `src/constants/index.tsx`.

## Commands

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run start          # Start production server
npm run lint           # ESLint
npm run format         # Prettier (write)
npm run format-check   # Prettier (check only)
```

## License

Feel free to use this code for your own bookshelf site. Please replace the content in `src/data/books.ts` and `src/constants/index.tsx` with your own.
