# Project instructions

## Images containing authored text (all languages)

- For future images that need newly authored text (titles, descriptions, UI guidance, labels, step numbers, or comparison captions), use Figma rather than image generation. This is a standing rule for new and revised images throughout this project, not only the current Texture Studio work.
- Author newly created or revised guide illustrations, explanatory labels, step numbers, arrows, and comparison layouts in Figma. Keep added text as editable TEXT layers and shapes as editable vector layers; do not use image generation or raster text drawing for these assets.
- Use the existing `Kisetter Guide` section in the user-selected file: https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=986-4552 . Do not create a separate file without a request.
- Apply this workflow to Korean, Japanese, and English guides. Match explanatory copy and button names to each guide's language. Preserve the language and appearance of actual captured application UI unless recapture is requested.
- Place original application screenshots into Figma as image layers, add annotations there, then use the actual Figma capture/export in the guide. Lossless format conversion is allowed; do not redraw exported text locally.
- Verify fonts, wrapping, clipping, callout positions, and desktop/mobile display. Record the Figma frame URL and corresponding public asset in the guide documentation.
- Unannotated application screenshots and HTML page captions may stay in their native form. Do not mistake text already inside the captured application UI for newly authored labels.
- Current Figma frames and export workflow are documented in `docs/texture-studio-figma-annotations.md`.
- The current Figma migration is limited to Texture Studio. Preserve existing Mesh Studio, clothing auto-fitting, Preset, and other guide images and document references; the user identified the older clothing guide images as their own work.
- Keep current guide work in local preview. Do not commit, push, or publish it without an explicit user request.

## Deployment compatibility

- Keep the guide compatible with both GitHub Pages and a future Cloudflare Pages deployment.
- Do not make the application depend on GitHub Actions. Cloudflare Pages Git integration or Direct Upload must remain viable deployment paths.
- Preserve the static Next.js export architecture (`output: "export"`) and the `out` build output unless a future task explicitly authorizes a hosting architecture change.
- Do not hardcode `/AutoMorpher_Guide` in components, content, asset URLs, or navigation. Route internal links and media through the shared base-path configuration.
- Treat the production base path as platform-specific: GitHub Pages may use `/AutoMorpher_Guide`, while Cloudflare Pages should be able to use the domain root (`""`). Any configuration change must keep both modes possible through an environment variable or equivalent shared setting.
- Keep static-hosting constraints in mind: avoid server-only APIs, runtime filesystem access, and other features that cannot run from the exported `out` directory unless a static fallback is provided.
- Continue using trailing-slash-compatible routes and unoptimized static images unless both deployment targets are verified after changing them.
- Version synchronization must remain build-safe when the remote JSON cannot be reached; the generated known-good fallback must allow offline and Cloudflare builds to complete.
- When changing routing, assets, metadata, or build configuration, verify a production build and check that exported links work both at a repository subpath and at a domain root.
- Do not create or publish a Cloudflare project unless the user explicitly requests deployment.
