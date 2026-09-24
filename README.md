![alt danielvonborosPortfolio](https://github.com/danielvonboros/danielvonboros-portfolio/blob/main/src/mat/portfolio-preview.png?raw=true)
Fullstack developer portfolio, bilingual, light and dark

<p>Personal portfolio for <a href="https://danielvonboros.com">danielvonboros.com</a></p>
<p>Client side single page application, no backend</p>

### Description

Portfolio site presenting work, services and résumé. All copy exists in German and English and is switched at runtime without a page reload or a route change. Colour mode follows the operating system until the visitor picks one, after which the choice is stored locally.

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
| Typeface             | Satoshi, served by Fontshare                             |
| Package manager      | yarn                                                     |
| Hosting              | Netlify or Vercel, static                                |

### Dependencies

<ul>
<li>@emotion/react</li>
<li>@emotion/styled</li>
<li>@mui/material</li>
<li>react</li>
<li>react-dom</li>
<li>react-router-dom</li>
</ul>

Dev dependencies

<ul>
<li>@types/node</li>
<li>@types/react</li>
<li>@types/react-dom</li>
<li>@vitejs/plugin-react</li>
<li>typescript</li>
<li>vite</li>
</ul>

No i18n library, no icon package, no CSS framework. Icons are inline SVG.

### User Stories

<ul>
<li>As a recruiter, I want to scan the résumé without expanding anything, so that I can judge fit in under a minute.</li>
<li>As a client, I want to read the site in German or English, so that I am not reading a machine translation of someone's second language.</li>
<li>As a visitor on a dark device, I want the site to arrive dark, so that I am not hit by a bright flash at night.</li>
</ul>

### Content model

Every content entry is a `Localized<T>`:

```ts
type Lang = "de" | "en";
type Localized<T> = Record<Lang, T>;
```

Components read it through `pick()` from `useI18n()`. Because `Localized` is a `Record` over the full `Lang` union, omitting a language fails `tsc`.

| File                  | Holds                                          |
| --------------------- | ---------------------------------------------- |
| `content/site.ts`     | identity, masthead tagline, nav, hero, contact |
| `content/about.ts`    | about copy, grouped tech stack                 |
| `content/services.ts` | three service blocks, long and short titles    |
| `content/projects.ts` | current projects, archived training projects   |
| `content/cv.ts`       | career stations, positions, education          |
| `content/legal.ts`    | imprint, § 5 DDG                               |

Adding a language: extend `LANGUAGES` in `src/i18n/types.ts`. The compiler then lists every entry still missing the new variant.

### Theming

All colour, type scale and spacing values live in `src/theme/tokens.ts`. `src/theme/theme.ts` builds the MUI theme from them per mode. Two base values carry both modes and swap roles between them.

| Token | Value     |
| ----- | --------- |
| grey  | `#DCDBD7` |
| black | `#0D0D0D` |

Components do not import colours directly. They call `useSurface()`, which returns the palette of the surface they are rendered on (`base` or `contrast`), so the same component works on light and dark without an `inverted` prop.

An inline script in `index.html` paints the background before React mounts. It shares the `dvb.mode` storage key with `ColorModeProvider`; changing one means changing the other.

### App structure

```
    danielvonboros-portfolio

    App
    |_  Masthead
    |   |_  LanguageSwitch
    |   |_  ThemeToggle
    |
    |_  Home
    |   |_  Hero
    |   |_  About
    |   |_  Services
    |   |_  Projects
    |   |_  Resume
    |   |_  Contact
    |
    |_  Imprint
    |_  Footer

    shared
    |_  Section, Split, Hairline, DashList
    |_  ArrowLink
    |_  Seo
```

#### Essential features of the Components

Masthead

<ul>
<li>Four column header: identity, services, anchor links, switches</li>
<li>Static, scrolls out of view</li>
<li>Anchor links resolve to <code>/#id</code> on routes other than <code>/</code></li>
</ul>
Hero
<ul>
<li>Display headline set per line, line breaks are authored not wrapped</li>
<li>Availability marker and location</li>
</ul>
About
<ul>
<li>Long form copy and grayscale portrait</li>
<li>Portrait falls back to a flat surface when the file is absent</li>
</ul>
Services
<ul>
<li>Three blocks, hairline separated</li>
<li>Short titles reused by the masthead</li>
</ul>
Projects
<ul>
<li>Renders on the contrast surface</li>
<li>Per project status: <code>live</code>, <code>inProgress</code>, <code>concept</code></li>
<li>Thumbnails fall back to a typographic placeholder on 404</li>
<li>Archive block for earlier training projects</li>
</ul>
Resume
<ul>
<li>Timeline, period in the left column</li>
<li>Task lists as MUI Accordion, per position default from <code>expanded</code> in <code>cv.ts</code></li>
<li>Props: <code>collapsible</code>, <code>defaultExpanded</code> (<code>fromData</code> | <code>none</code> | <code>first</code> | <code>all</code>)</li>
<li>Collapsed content stays mounted, so it remains indexable and findable in page search</li>
<li><code>@media print</code> forces every panel open</li>
</ul>
Contact
<ul>
<li>mailto set at display size</li>
</ul>
Imprint
<ul>
<li>Routes <code>/impressum</code> and <code>/legal-notice</code></li>
<li>Unfilled fields render in the focus colour as a reminder</li>
</ul>

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

### Build and deploy

```
$ yarn build
```

Runs `tsc -b` first, then `vite build`. Type errors fail the build. Output goes to `dist`. Inspect the production bundle locally with

```
$ yarn preview
```

Deploy as a static site, build command `yarn build`, publish directory `dist`. SPA rewrites are already committed: `public/_redirects` for Netlify, `vercel.json` for Vercel. Without them `/impressum` returns 404 on a direct hit.

### Assets

<ul>
<li><code>public/portrait.jpg</code>, portrait, 4:5</li>
<li><code>public/projects/&lt;slug&gt;.jpg</code>, 16:10, 1600 x 1000 minimum, slugs from <code>content/projects.ts</code></li>
<li><code>public/og.jpg</code>, 1200 x 630</li>
</ul>

Missing files degrade to placeholders, they do not break the build.

### Before going live

<ul>
<li>Fill the fields marked <code>AUSFÜLLEN</code> in <code>src/content/legal.ts</code>. An incomplete imprint is actionable under German law.</li>
<li>Verify the GitHub and LinkedIn URLs in <code>src/content/site.ts</code>.</li>
<li>Add a privacy policy once analytics or a contact form are introduced.</li>
<li>Self host Satoshi if the external font request is unwanted.</li>
</ul>

### Contact me!

Get in touch! Contact me <a href="https://linkedin.com/in/daniel-von-boros-92878a186">here</a> to talk about collaborations.
