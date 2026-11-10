![alt danielvonborosPortfolio](https://github.com/danielvonboros/danielvonboros-portfolio/blob/main/src/mat/portfolio-preview.png?raw=true)
Fullstack developer portfolio, bilingual, light and dark

<p>Personal portfolio for <a href="https://danielvonboros.com">danielvonboros.com</a></p>
<p>Client side single page application, no backend</p>

### Description

Portfolio site presenting work, services and résumé. All copy exists in German and English. Each language has its own URLs (`/` German, `/en/` English), so search engines index both versions separately; the language switch links to the counterpart URL. Colour mode follows the operating system until the visitor picks one, after which the choice is stored locally.

No content is hardcoded in components. Every string lives in `src/content` as a `Localized<T>` object, so a missing translation is a compile error rather than a runtime fallback.

### Tools used

| Property             | Tool                                                     |
| -------------------- | -------------------------------------------------------- |
| Language             | TypeScript                                               |
| Library              | React 18                                                 |
| Build tool           | Vite 5                                                   |
| Component library    | MUI v6                                                   |
| Styling              | Emotion, via the MUI `sx` prop                           |
| Route handling       | react-router-dom 6                                       |
| State management     | React context, no external store                         |
| Internationalisation | Custom typed provider, DE/EN                             |
| Colour modes         | Custom provider, `localStorage` + `prefers-color-scheme` |
| 3D                   | Three.js, only for the tower in the hero, lazy loaded    |
| Typeface             | Satoshi, self-hosted in `public/fonts`                   |
| Package manager      | yarn                                                     |
| Hosting              | all-inkl, static, deployed by GitHub Actions             |

### Dependencies

<ul>
<li>@emotion/react</li>
<li>@emotion/styled</li>
<li>@mui/material</li>
<li>react</li>
<li>react-dom</li>
<li>react-router-dom</li>
<li>three</li>
</ul>

Dev dependencies

<ul>
<li>@emotion/cache, @emotion/server (prerendering)</li>
<li>@types/node, @types/react, @types/react-dom, @types/three</li>
<li>@vitejs/plugin-react</li>
<li>typescript</li>
<li>vite</li>
</ul>

No i18n library, no icon package, no CSS framework, no animation library. Icons are inline SVG.

### User Stories

<ul>
<li>As a recruiter, I want to scan the résumé without expanding anything, so that I can judge fit in under a minute.</li>
<li>As a client, I want to read the site in German or English, so that I am not reading a machine translation of someone's second language.</li>
<li>As a visitor on a dark device, I want the site to arrive dark, so that I am not hit by a bright flash at night.</li>
<li>As a visitor who turned on reduced motion, I want everything to stand still and complete, so that nothing moves that I did not ask for.</li>
</ul>

### Content model

Every content entry is a `Localized<T>`:

```ts
type Lang = "de" | "en";
type Localized<T> = Record<Lang, T>;
```

Components read it through `pick()` from `useI18n()`. Because `Localized` is a `Record` over the full `Lang` union, omitting a language fails `tsc`.

| File                  | Holds                                                         |
| --------------------- | ------------------------------------------------------------- |
| `content/site.ts`     | identity, masthead tagline, nav, hero, title band, contact, meta |
| `content/about.ts`    | about copy, grouped tech stack                                |
| `content/services.ts` | three service blocks, their drawing (`shape`) and landing page |
| `content/projects.ts` | current projects with their slugs, archived training projects |
| `content/projectPages/` | one file per project page: SEO title and description, H1, lead, case study blocks, keywords, contact copy; plus the overview page and fixed labels |
| `content/contentBlock.ts` | the block type (text, list, pairs, stack) shared by landing and project pages |
| `content/cv.ts`       | career stations, positions, education, `field` per station    |
| `content/legal.ts`    | imprint, § 5 DDG, privacy policy                              |
| `content/landing.ts`  | service landing pages: copy, FAQ, references, drawing         |

Adding a language: extend `LANGUAGES` in `src/i18n/types.ts`. The compiler then lists every entry still missing the new variant.

### Theming: Beton & Licht

Grey is concrete, black is structure, violet is light. About 90 % of the surface stays grey and black. Violet appears as light (tower, glow, text selection), on interaction (links, hover, focus), as status (the availability dot) and in exactly one room that is violet all over: the contact section at the end of every page.

All colour, type scale, spacing and motion values live in `src/theme/tokens.ts`; keyframes in `src/theme/keyframes.ts`. `src/theme/theme.ts` builds the MUI theme from them per mode.

| Token            | Value     | Use                                         |
| ---------------- | --------- | ------------------------------------------- |
| grey             | `#DCDBD7` | base surface (light), text (dark)           |
| black            | `#0D0D0D` | text (light)                                |
| `VIOLET.onLight` | `#6741D9` | accent on grey, 4.55:1                      |
| `VIOLET.onDark`  | `#9775FA` | accent on black and night violet, 5.8:1     |
| `VIOLET.light`   | `#ACA4FF` | light and glow, never text                  |
| `VIOLET.night`   | `#0C0B14` | contrast blocks instead of neutral black    |
| `VIOLET.room`    | `#342373` | the violet room, with `#6240D1` as its light corner |

Components do not import colours directly. They call `useSurface()`, which returns the palette of the surface they are rendered on (`base`, `contrast` or `drench`), including that surface's `accent`. The same component therefore works on grey, on night violet and in the violet room without an `inverted` prop.

An inline script in `index.html` paints the background before React mounts. It shares the `dvb.mode` storage key with `ColorModeProvider`; changing one means changing the other.

### Motion

Every animation tells the same story as the hero copy: structure first, facade second. Lines appear before surfaces fill.

- **Tower** (`components/tower`): sixteen floor slabs of violet glass around a glowing core, rendered with Three.js. On load the structure drops in as lines, then the glass facade closes, then the core lights up. Afterwards it turns slowly, follows the mouse and twists while scrolling. Three.js is imported dynamically after the first paint (~130 KB gzip in its own chunk) and the loop pauses while the canvas is off screen. Without WebGL the glow behind it stays alone.
- **Title band** (`components/marquee`): the job titles run between hero and about. Scrolling speeds it up and tilts it; the scroll direction sets the running direction.
- **Drawings** (`components/bauteil`): one isometric drawing per service, raster (frontend), layers (fullstack), volume (websites). Edges draw, then faces fill, driven by the scroll position.
- **Reveal** (`components/reveal`): headings, service rows and project articles lift in as they scroll into view.
- **Project images** (`components/projectThumbnail`): tilt towards the mouse, a light spot follows the pointer, a circle replaces the cursor and leads to the site.
- **Résumé** (`components/timelineMarker`): each station has a line that fills while scrolling. Software stations glow violet, architecture stays concrete grey, so the line shows both professions honestly even though the list runs newest first.
- **Contact** (`components/lightRing`, `components/magnetic`): a slowly turning ring of light in the violet room; the email address leans towards the mouse.

Scroll-driven effects use CSS `animation-timeline: view()`, not timers: they follow the scroll position, and where a browser does not support them, the content simply stands complete. `prefers-reduced-motion` is respected everywhere: the tower renders one still frame, the band stands still, drawings and markers are complete.

### Structure

The layout follows the `pixelgeselle_website` repository: one folder per component, sections compose components, pages compose sections.

```
src/
  components/   reusable building blocks, one folder each, e.g. components/tower/Tower.tsx
  content/      all copy, German and English, one file per topic
  hooks/        shared hooks, e.g. useReducedMotion
  i18n/         language provider, route table per language
  pages/        Home, Landing, ProjectOverview, ProjectDetail, Legal, NotFound, composed from sections
  sections/     page sections, one folder each, with their sub-parts next to them
  seo/          head tags and JSON-LD per page
  theme/        tokens, keyframes, MUI theme, colour mode, surfaces
```

Conventions:

- A component file holds one component and stays under 300 lines. Helpers, types and sub-components get their own files. Content files are exempt from the line limit.
- A section wraps its body in `Section` so that `useSurface()` inside the body reads the right surface. That is why most sections come as `Name.tsx` plus `NameBody.tsx`.
- Strings live in `src/content`, visual values in `src/theme`.

Sections in page order:

- Home: Hero, TitleBand, About, Services, Projects, Resume, Contact.
- Landing page: LandingIntro, ContentBlocks, ProjectCards (references), LandingFaq, Contact.
- Project overview: OverviewIntro, ProjectCards (all projects), Contact.
- Project page: ProjectIntro, ProjectShowcase, ContentBlocks (case study), ProjectCards (the next three projects), Contact.

Masthead and Footer wrap every page.

Reusable components:

| Component          | Purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `Section`          | Section frame on a surface (`base`, `contrast`, `drench`), optional decoration behind the content |
| `Split`            | Asymmetric layout: narrow label column, content to the right            |
| `Hairline`         | One-pixel rule in the surface's line colour                              |
| `DashList`         | List with short dashes as bullets                                        |
| `ArrowLink`        | Link with arrow and underline, violet on hover, router or external       |
| `ArrowIcon`        | The arrow used by `ArrowLink` and the masthead navigation                |
| `Masthead`         | Four-column header: identity, services, anchor links, switches          |
| `Footer`           | Copyright, landing pages, projects, legal pages, profiles               |
| `LanguageSwitch`   | Links to the same page in the other language                            |
| `ThemeToggle`      | Light and dark switch                                                   |
| `SkipLink`         | Keyboard link that jumps past the navigation                            |
| `Seo`              | Swaps title, meta, canonical, hreflang and JSON-LD on navigation        |
| `Tower`            | The hero object, see Motion                                             |
| `Glow`             | Soft violet light behind an object, breathes slowly                     |
| `PulseDot`         | Square status dot with a pulsing ring                                   |
| `Marquee`          | Running band of terms, driven by scroll speed                           |
| `Bauteil`          | Isometric drawing (raster, layers, volume), drawn by scrolling          |
| `Reveal`           | Lifts its children in as they scroll into view                          |
| `ProjectThumbnail` | Project image with tilt, light spot and view circle; links to the project page or, with `external`, to the site; placeholder without image |
| `ProjectCard`      | Image, title, client and link to the project page                       |
| `ProjectStatus`    | Project status with a square, filled when live                          |
| `PageIntro`        | Head of every subpage: breadcrumb, H1, lead, optional right column      |
| `Breadcrumb`       | Path from the home page to the current page                             |
| `FactList`         | Label and value pairs between hairlines, e.g. the project facts         |
| `ContentBlock`     | One block of a landing or project page: text, list, pairs or stack      |
| `TimelineMarker`   | Line and marker next to a résumé station, violet or concrete            |
| `PlusMinus`        | Plus that turns into a minus in the résumé accordion                    |
| `LightRing`        | Turning ring of light in the violet room                                 |
| `Magnetic`         | Pulls its child slightly towards the mouse                               |

### Setting up the tools:

Node 18 or newer is required by Vite 5. Check with

```
$ node -v
```

Clone the repo, then install the modules by running:

```
$ yarn install
```

Make sure there were no errors installing the necessary modules to your application.

### Start the application

Start the development server by typing

```
$ yarn dev
```

The console shows the port the application is served on, in most cases: http://localhost:5173

Type checking runs as part of the build, not the dev server. To check types on their own:

```
$ yarn typecheck
```

### Routes and SEO

Route paths live in `src/i18n/routes.ts`, one per page and language:

| Page        | German                         | English                          |
| ----------- | ------------------------------ | -------------------------------- |
| Home        | `/`                            | `/en/`                           |
| Web design  | `/webdesign-berlin`            | `/en/web-design-berlin`          |
| Frontend    | `/frontend-entwickler-berlin`  | `/en/frontend-developer-berlin`  |
| Fullstack   | `/fullstack-entwickler-berlin` | `/en/fullstack-developer-berlin` |
| Projects    | `/projekte/`                   | `/en/projects/`                  |
| One project | `/projekte/<slug>`             | `/en/projects/<slug>`            |
| Imprint     | `/impressum`                   | `/en/legal-notice`               |
| Privacy     | `/datenschutz`                 | `/en/privacy`                    |

`src/seo/head.ts` builds title, description, canonical, hreflang, Open Graph and JSON-LD (`src/seo/schema.ts`) for each page. The prerender writes these tags into the static HTML; `<Seo>` swaps them on client-side navigation. Adding a page means adding a route key, an element in `App.tsx` and a case in `pageMeta()` (`src/seo/pageMeta.ts`); the sitemap follows automatically.

Project pages are generated from the project list. Adding one takes three steps: add the slug to `PROJECT_SLUGS` and an entry to `projects` in `content/projects.ts`, write `content/projectPages/<name>.ts` and register it in `content/projectPages/index.ts` together with its matching service pages. Route, page, sitemap entry, Open Graph image (the project screenshot) and structured data (`CreativeWork` plus breadcrumb, see `src/seo/projectSchema.ts`) follow from that. Keywords are written out in title, H1, lead and blocks; the `keywords` list only goes into the JSON-LD, never onto the page as a list.

Pages are prerendered in light mode. The browser does not hydrate them: `main.tsx` calls `createRoot`, which replaces the static markup. In dark mode the inline script in `index.html` removes the prerendered styles and keeps `#root` hidden until React has painted, so dark visitors never see a light flash.

The full audit with keyword strategy and off-page to-dos is in `docs/SEO-AUDIT.md`.

### Build and deploy

```
$ yarn build
```

Runs `tsc -b`, `vite build`, an SSR build of `src/entry-server.tsx` and `scripts/prerender.mjs`. Type errors fail the build. Output goes to `dist`: one static HTML file per page and language, plus `404.html` and `sitemap.xml`. Inspect the production bundle locally with

```
$ yarn preview
```

Deploy as a static site, build command `yarn build`, publish directory `dist`. On Apache (all-inkl), `public/.htaccess` maps `/impressum` to `impressum.html`, redirects `www` to the bare domain and serves `404.html` with a real 404 status. `public/_redirects` and `vercel.json` are older SPA fallbacks for Netlify and Vercel.

### Assets

<ul>
<li><code>public/portrait.jpg</code>, portrait, 4:5</li>
<li><code>public/projects/&lt;name&gt;.webp</code>, about 16:10, 1600 px wide, path and pixel size (<code>imageSize</code>) in <code>content/projects.ts</code>. The image is also the link preview of the project page.</li>
<li><code>public/og.jpg</code>, 1200 x 630</li>
</ul>

Missing files degrade to placeholders, they do not break the build.

### Before going live

<ul>
<li>Fill the fields marked <code>AUSFÜLLEN</code> in <code>src/content/legal.ts</code>. An incomplete imprint is actionable under German law.</li>
<li>Verify the GitHub and LinkedIn URLs in <code>src/content/site.ts</code>.</li>
<li>Add a privacy policy once analytics or a contact form are introduced.</li>
</ul>

### Contact me!

Get in touch! Contact me <a href="https://linkedin.com/in/daniel-von-boros-92878a186">here</a> to talk about collaborations.
