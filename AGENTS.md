# Arktech Website Instructions

Before adding, replacing, or referencing an image:

1. Read `CODEX_RULES.md`.
2. Check `docs/image-assets.md`.
3. Reuse an approved asset from `public/images` whenever possible.
4. Never reference temporary files or absolute local filesystem paths in website code.
5. If the required asset is missing, report it instead of inventing a path or generating a placeholder.

All image changes must keep `docs/image-assets.md` current.

For every newly generated website image, follow the generated-image workflow in `CODEX_RULES.md`: optimize to WebP, save under the appropriate `public/images` subfolder, use a lowercase SEO filename, update the asset library, and reference it only through `/images/...`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
