# matthewmacri.ca

My personal site. Astro, static output, served by nginx from my own server.

```
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
deploy/deploy.sh   # build and switch /var/www/matthewmacri/current to the new release
deploy/rollback.sh # point current back at the previous release
```

- Projects live in `src/content/projects/*.mdx` (schema in `src/content.config.ts`).
  `tier: 1` shows on the home page; `tier: 2` only on /work.
- Experience, education and the archive table are plain data in `src/data/`.
- `npm run github` refreshes star counts for linked public repos into `src/data/github.json`.
- `scripts/og.py` re-renders the link-preview image.
