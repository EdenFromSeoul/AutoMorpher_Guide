# Project instructions

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
