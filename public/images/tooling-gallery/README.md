# Homepage tooling gallery assets

Use these two source folders to manage the Homepage gallery:

- `Mould/` — completed injection molds.
- `Plastic part/` — molded plastic parts and sample components.

Supported source formats are JPG, JPEG, PNG, WebP and AVIF. Hidden files and non-image files are ignored. Keep the original image in its source folder; the build creates browser-ready WebP derivatives in `optimized/`.

## Add, replace, delete and sort

- Add an image: copy it into the correct source folder. The next development refresh or build adds it to the gallery.
- Replace an image: replace the source using the same filename. Content hashing creates a new optimized URL so stale browser caches are avoided.
- Delete an image: remove it from the source folder. The next generation removes it from the manifest and deletes its stale derivative.
- Sort images: start a filename with a number such as `001-`, `002-` or set an explicit `order` in `metadata.json`.

Do not add generated output to either source folder. The `optimized/` directory is maintained automatically.

## Optional metadata

Images display without metadata. Add a key to `metadata.json` using the source-relative path, for example:

```json
{
  "Mould/001-example.png": {
    "title": "Precision Injection Mold",
    "alt": "Completed injection mold with core and cavity halves",
    "order": 1,
    "caseStudyUrl": "/injection-molds/precision-injection-molds"
  }
}
```

Use only verified, factual titles, alt text and internal URLs. When metadata is absent, the generator uses a neutral display name and neutral alt text.

## Development and deployment behavior

`npm run dev` scans the two source folders once and checks them with one lightweight polling loop. Adding, replacing or deleting a file regenerates the manifest and lets Next.js refresh the page without starting another filesystem watcher.

`npm run build` scans and optimizes at build time. A deployed Vercel page cannot read new local files in real time; commit the source asset and complete a new Preview/Production build for changes to appear online.
