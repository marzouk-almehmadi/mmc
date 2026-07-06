# MMC Website — Pre-Production Audit

Audit date: 2026-07-06

## Critical

- No critical broken page, missing local asset, duplicate ID, or JavaScript syntax failure was detected.

## High

### Contact page

- The inquiry form submits through `mailto:`. This depends on a locally configured email client, provides no reliable success state, and is unsuitable as the only production submission path.
- The form has native constraints but no accessible inline validation summary or controlled bilingual feedback.

### All image-bearing pages

- 53 content images lack explicit `width` and `height`, creating avoidable layout shift and weakening Core Web Vitals.
- Several non-hero images do not consistently declare lazy decoding/loading behavior.

### Production surface

- Large original image sources and HTML backup files are located under the public document root. Directory listing is disabled, but predictable direct URLs may still expose development artifacts.

## Medium

### About, services, fleet, projects, contact, careers, certificates, privacy, terms and 404

- Canonical URLs are absent from every page except the homepage.
- Open Graph and Twitter metadata are incomplete outside the homepage.
- Some pages lack meta descriptions: careers, certificates, privacy, terms and 404.

### All pages

- Shared CSS has accumulated multiple late overrides during iterative design work. The cascade is valid, but related production rules should be consolidated where practical.
- Header/footer HTML is injected by JavaScript. The fallback document therefore has no primary navigation or footer when JavaScript is disabled.
- The website uses bilingual visible content but does not publish language-specific canonical/alternate URLs because both languages share the same URL and client-side state.

### Equipment page

- Photography used inside compact unit cards needs explicit crop behavior and stable proportions.
- Large fleet sections need responsive image sizing hints and consistent aspect ratios.

### Apache configuration

- Compression and cache expiry are configured, but JPEG, font and SVG cache policies are incomplete.
- Security headers and a restrictive referrer policy are missing.
- The configured 404 path assumes deployment at the domain root and should be checked when deployed in a subdirectory.

## Low

### Sitemap and robots

- The sitemap is valid but minimal: no `lastmod` values and no privacy/terms entries.

### Content and accessibility

- Heading counts are valid (one `h1` per page), image alternative text is present, and local links resolve.
- Focus styles exist, but form feedback and live status messaging need explicit accessible treatment.
- External-action clarity can be improved for WhatsApp and form submission.

## Verified Baseline

- 11 live HTML pages audited.
- No duplicate IDs found.
- No broken local links or missing referenced assets found.
- `corporate.js` and `enhancements.js` pass JavaScript syntax checks.
- Every live page currently responds with HTTP 200 through the local Apache server.
- Arabic RTL and English LTR switching is present and persisted locally.
