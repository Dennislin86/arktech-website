# Arktech Website Project Rules

## Image storage

- Store every website image under `public/images`.
- In React and Next.js code, reference assets only with root-relative URLs beginning with `/images/`.
- Never reference `/tmp`, clipboard, generated-image cache, download, desktop, or absolute local filesystem paths.
- Do not create duplicate assets. Search `public/images` and check `docs/image-assets.md` before adding a file.
- Use the existing asset whenever it accurately fits the content and has sufficient resolution.
- Keep images in the most relevant folder:
  - `public/images/hero`
  - `public/images/who-we-serve`
  - `public/images/capabilities`
  - `public/images/industries`
  - `public/images/tooling`
  - `public/images/products`
  - `public/images/case-studies`
  - `public/images/factory`
  - `public/images/quality`
  - `public/images/blog`
  - `public/images/icons`

## File standards

- Prefer WebP for new photographic assets.
- Use lowercase, hyphen-separated, descriptive SEO filenames.
- Preserve SVG for logos and icons when it is the appropriate source format.
- Do not convert an existing approved image merely to satisfy the preferred extension if conversion would reduce quality or create a duplicate. Migrate intentionally and update every reference and the asset library in the same change.
- Use a consistent aspect ratio within each card grid, normally 16:10.
- Never stretch or distort an image. Use deliberate `object-fit` and `object-position` values.

## Next.js implementation

- Always render content images with `next/image`.
- Use `src="/images/..."`; never hardcode an absolute disk path.
- Provide accurate `sizes` values for responsive layouts.
- Images below the initial viewport should use the default lazy-loading behavior. Use `priority` only for true above-the-fold images such as the primary hero.
- Every meaningful image must have concise, descriptive, SEO-friendly alt text that accurately describes what is visible.
- Decorative images must use an empty alt attribute.

## Image sourcing

- Never generate placeholder images.
- Prefer real Arktech factory and production photos for manufacturing capabilities, tooling examples, factory, quality, and case studies.
- AI-generated images are allowed for hero banners, industry illustrations, marketing backgrounds, or when the user explicitly approves them for another use.
- Do not present an AI-generated scene as documentary proof of Arktech equipment, facilities, certifications, customers, or completed projects.
- Record whether each asset is a real Arktech photo, AI-generated image, supplied customer asset, logo, or illustration in `docs/image-assets.md`.

## Generated image rules

Whenever a new website image is generated:

1. Treat the generator output as temporary until it is optimized and copied into the project.
2. Save the final production asset as WebP under `public/images`.
3. Use the correct content folder: `hero`, `who-we-serve`, `capabilities`, `industries`, `tooling`, `products`, `quality`, `factory`, or `case-studies`.
4. Use a lowercase, hyphen-separated, descriptive SEO filename, for example `plastic-injection-molding-quality-inspection.webp`.
5. Optimize dimensions and compression for the intended placement without visible quality loss.
6. Update `docs/image-assets.md` immediately after saving the final asset. Record its path, alt text, source type, and usage status.
7. Update every consuming React component to reference the asset with a root-relative `/images/...` URL.
8. Never leave a production reference pointing to a generator cache, clipboard file, temporary directory, download folder, or absolute filesystem path.

The active project image root is:

`/Users/dennis/Documents/Codex/Arktechmold-website/public/images/`

This absolute path is for file-management operations only. It must never appear in React or Next.js image `src` values.

## Asset workflow

1. Check `docs/image-assets.md`.
2. Search `public/images`.
3. Verify image content, dimensions, and suitability.
4. Add or replace the asset only when necessary.
5. Use an approved filename and folder.
6. Add accurate alt text.
7. Update `docs/image-assets.md`.
8. Build the site and visually verify desktop, tablet, and mobile presentation.
