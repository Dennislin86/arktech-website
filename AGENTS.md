# Arktech Website Instructions

Before adding, replacing, or referencing an image:

1. Read `CODEX_RULES.md`.
2. Check `docs/image-assets.md`.
3. Reuse an approved asset from `public/images` whenever possible.
4. Never reference temporary files or absolute local filesystem paths in website code.
5. If the required asset is missing, report it instead of inventing a path or generating a placeholder.

All image changes must keep `docs/image-assets.md` current.

For every newly generated website image, follow the generated-image workflow in `CODEX_RULES.md`: optimize to WebP, save under the appropriate `public/images` subfolder, use a lowercase SEO filename, update the asset library, and reference it only through `/images/...`.
