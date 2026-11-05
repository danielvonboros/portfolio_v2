# SEO-Audit danielvonboros.com

Stand: 5. November 2026 · umgesetzt im Branch `seo/audit-landingpages` · ergänzt um Frontend-Seite und Synonyme

**Ziel:** gefunden werden von (a) Privatleuten, Selbstständigen und kleinen Unternehmen, die einen Webdesigner suchen, und (b) Firmen, die einen Fullstack-Entwickler suchen.

**Kurzfassung:** Die Live-Seite ist für Suchmaschinen heute nahezu unsichtbar. Drei Ursachen wiegen schwer: Der Server liefert leeres HTML, Google sieht sehr wahrscheinlich nur die englische Fassung, und es gibt keine Seite, die zu den Suchbegriffen „Webdesigner“ oder „Website erstellen lassen“ passt. Alle drei sind im Branch behoben. Was danach am meisten bringt, liegt außerhalb des Codes (Abschnitt 6).

---

## 1. Kritische Befunde auf der Live-Seite

| # | Befund | Auswirkung | Status |
|---|--------|-----------|--------|
| 1 | **Leeres HTML.** Der Server liefert 1,9 KB mit leerem `<div id="root">`, alle Inhalte entstehen erst per JavaScript. | Google rendert verzögert. Bing nur teilweise. ChatGPT-Suche, Perplexity und Linkvorschauen (LinkedIn, WhatsApp, Slack) sehen keinen Inhalt. | ✅ Prerendering: jede Seite als fertiges HTML |
| 2 | **Sprache per Browser-Einstellung.** `navigator.language` entscheidet, ohne eigene URL. Googlebot rendert mit `en-US` und ohne localStorage. | Google indexiert sehr wahrscheinlich die **englische** Fassung, im HTML steht aber `lang="de"`. Die deutschen Texte sind dann nicht auffindbar. | ✅ Eigene URLs (`/`, `/en/…`) mit hreflang |
| 3 | **Keine Seite pro Suchabsicht.** Eine Startseite für zwei Zielgruppen; „Webdesigner“, „Website erstellen lassen“ und „Freelance“ kommen nirgends vor. Der Title nennt nur „Fullstack Developer“. | Die Seite kann für die gewünschten Suchen kaum ranken. | ✅ Zwei Leistungsseiten je DE/EN |
| 4 | `robots.txt`, `sitemap.xml` und `og.jpg` fehlen. Alle drei liefern `200` mit der Startseite (Soft-404). | Keine Sitemap für Google. Linkvorschauen ohne Bild bzw. mit kaputtem Bild. | ✅ Angelegt |
| 5 | Jede beliebige URL liefert `200` mit der Startseite. | Soft-404 und Duplicate Content | ✅ Echter 404 mit `noindex` |
| 6 | `www.danielvonboros.com` und `danielvonboros.com` liefern beide `200`. | Duplicate Content, Signale verteilen sich auf zwei Hosts. | ✅ 301 auf die Domain ohne www |
| 7 | Keine strukturierten Daten | Google kann Person, Leistung und Ort nicht sicher zuordnen. | ✅ JSON-LD |
| 8 | Statischer Canonical `/` für alle Routen | Impressum und Datenschutz verweisen auf die Startseite. | ✅ Canonical pro Seite |

Stichprobe: Eine Websuche nach „Daniel von Boros Developer Berlin“ findet die Seite nicht. Selbst die Suche nach dem eigenen Namen funktioniert also noch nicht.

## 2. Weitere On-Page-Befunde

| Befund | Status |
|--------|--------|
| Weiterleitungen von `www.` und `http://` landeten auf `/seite.html`, weil all-inkl MultiViews aktiv hat | ✅ Pfad kommt jetzt aus der ursprünglichen Anfrage (`THE_REQUEST`), lokal mit Apache und MultiViews getestet |
| Lead-Absätze wurden als `<h6>` ausgegeben (MUI `subtitle1`), dadurch falsche Überschriften-Hierarchie | ✅ jetzt `<p>` |
| Rechtstexte hatten eine zweite `<h1>` („Stand: …“) | ✅ jetzt `<p>` |
| Hero-H1 wurde ohne Leerzeichen gelesen: „Interfaces,die halten.“ | ✅ behoben |
| Skip-Link nur auf Deutsch | ✅ zweisprachig |
| Sprachumschalter waren Buttons. Crawler fanden die englische Fassung nicht. | ✅ echte Links mit `hreflang` |
| Keine internen Links mit Suchbegriffen | ✅ Masthead, Leistungsblöcke und Footer verlinken die Leistungsseiten |
| H1 der Startseite („Interfaces, die halten.“) enthält keinen Suchbegriff | Offen, bewusst so gelassen: Die Leistungsseiten tragen die Keywords. Optional: das vorhandene, aber ungenutzte `hero.eyebrow` („Fullstack Developer · Berlin“) als Teil der H1 ausspielen. |
| `portrait.webp` hat 251 KB, angezeigt werden höchstens ~320 px | Offen: auf ca. 640 px Breite exportieren (~40 KB) |
| Bild-Alt der Projekte ist nur der Projektname | Offen: besser „Screenshot der Website raumideenwerk“ |
| `DashList`: `height: 1` heißt in MUI-`sx` 100 %. Aus dem Strich wird ein senkrechter Balken. | Offen, kosmetisch: `height: "1px"` |
| `public/.DS_Store` wird mit deployt | Offen: löschen, steht schon in `.gitignore` |

## 3. Nebenbei aufgefallen (kein SEO, aber live sichtbar)

- Die **Datenschutzerklärung** enthält einen sichtbaren Platzhalter: „[Tatsächlich eingerichtete beziehungsweise mit ALL-INKL.COM vereinbarte Fristen … eintragen.]“
- Die Datenschutzerklärung beschreibt einen **Lebenslauf-PDF-Download**, den es auf der Seite nicht gibt (`downloadLabel` wird nirgends verwendet).
- **LinkedIn-URL:** `site.ts` nutzt `/in/danielvonboros/`, die README `/in/daniel-von-boros-92878a186`. Bitte prüfen, welche stimmt. Die URL steht jetzt auch im JSON-LD (`sameAs`).

## 4. Keyword-Strategie

Jede Berufsbezeichnung hat eine Seite, die sie im Title, in der H1 oder im Fließtext trägt. Synonyme stehen dort, wo sie sich natürlich ergeben: im Einleitungstext und in einer FAQ, die die Titel erklärt („Frontend Developer, Frontend Engineer, UI Engineer: Was ist der Unterschied?“). Bewusst **nicht** verwendet: Meta-Keywords (ignoriert Google seit 2009), versteckter Text und Begriffslisten („Tags: …“). Beides wertet Google als Keyword-Stuffing.

| Begriff (gewünscht ★, ergänzt ＋) | Seite DE | Seite EN | Wo genau |
|---|---|---|---|
| ★ Web Designer, ＋ Webdesigner, ＋ Website-Designer | `/webdesign-berlin` | `/en/web-design-berlin` | Title (EN), Lead, FAQ „Webdesigner oder Webentwickler?“ |
| ＋ Website / Homepage erstellen lassen, ＋ Internetauftritt | `/webdesign-berlin` | – | Title, Fließtext |
| ★ Frontend Developer, ★ Frontend Engineer, ＋ Frontend-Entwickler | `/frontend-entwickler-berlin` (neu) | `/en/frontend-developer-berlin` (neu) | Title, H1, Lead, FAQ |
| ＋ UI Engineer, ＋ UI Developer, ＋ Design Engineer | `/frontend-entwickler-berlin` | `/en/frontend-developer-berlin` | Lead, Abschnitt „Frontend mit Gestaltungsblick“, FAQ |
| ＋ React-Entwickler / React Developer, ＋ TypeScript Developer | `/frontend-entwickler-berlin` | `/en/frontend-developer-berlin` | H1, Technologien, FAQ |
| ★ Full Stack Engineer, ＋ Fullstack Developer, ＋ Full-Stack-Entwickler | `/fullstack-entwickler-berlin` | `/en/fullstack-developer-berlin` | Title (EN „Fullstack Developer & Engineer“), Lead, FAQ |
| ★ Web Engineer, ★ Web Developer, ＋ Webentwickler, ＋ Software Engineer (Web) | `/fullstack-entwickler-berlin`, `/webdesign-berlin` | beide EN-Seiten | Lead, FAQ, Erfahrung |
| ＋ Node.js Developer, ＋ JavaScript-Entwickler, ＋ Webprogrammierer | – | – | nur strukturierte Daten (`hasOccupation`) |
| Freelance / Freelancer, Berlin | alle Leistungsseiten | alle Leistungsseiten | Titles, H1 |
| Daniel von Boros | `/` | `/en/` | Title, strukturierte Daten |

Alle Bezeichnungen stehen zusätzlich in den strukturierten Daten: `jobTitle` und `hasOccupation` (mit `alternateName`) an der Person, `makesOffer` am Unternehmen. Die Liste pflegst du in `occupations` in `src/content/site.ts`.

Realistisch eingeschätzt: „Webdesigner Berlin“ ist hart umkämpft (Agenturen, Verzeichnisse wie Trustlocal und Malt). Schneller erreichbar sind zwei Wege: das lokale Kartenpaket über das Google-Unternehmensprofil und Long-Tail-Begriffe wie „Webdesigner für Handwerker Berlin“ oder „React Freelancer Berlin“. Suchvolumina konnte ich ohne Keyword-Tool nicht prüfen. Belastbare Zahlen liefert die Search Console nach vier bis acht Wochen.

Hinweis zu FAQ-Daten: Google zeigt FAQ-Rich-Results seit 2023 nur noch für Behörden- und Gesundheitsseiten. Das `FAQPage`-Markup bringt also keine Sterne oder Aufklapp-Snippets. Es hilft aber KI-Suchen und Google, die Antworten zuzuordnen.

## 5. Was im Branch umgesetzt ist

**Technik**
- `src/i18n/routes.ts`: Routentabelle, eine URL pro Seite und Sprache
- `src/entry-server.tsx` und `scripts/prerender.mjs`: Jede Seite wird beim Build als HTML gerendert, inklusive Emotion-CSS, `404.html` und `sitemap.xml` mit hreflang
- `src/seo/head.ts`: Title, Description, Canonical, hreflang, Open Graph pro Seite
- `src/seo/schema.ts`: JSON-LD mit `Person`, `ProfessionalService` (Adresse aus dem Impressum), `WebSite`, `ProfilePage`; auf den Leistungsseiten zusätzlich `Service`, `FAQPage` und `BreadcrumbList`
- `public/.htaccess`: www → ohne www, `/seite` → `seite.html`, echter 404
- `public/robots.txt`, `public/og.jpg` (1200 × 630)
- Dunkelmodus: Vorgerendert wird hell. Ein Inline-Script verhindert bei dunklem Modus, dass das kurz aufblitzt.

**Inhalte**
- `src/content/landing.ts`: drei Leistungsseiten (Webdesign, Frontend, Fullstack) auf Deutsch und Englisch, je ca. 750–900 Wörter: Zielgruppe, Leistungen, Ablauf, Arbeitsweise, Referenzen, sechs bis acht FAQ, Kontakt
- Neue Titles und Descriptions für die Startseite, Hero-Text mit „Websites, Webanwendungen“

Neue Titles (alle ≤ 61 Zeichen):

| Seite | Title |
|-------|-------|
| `/` | Webdesigner & Fullstack-Entwickler Berlin \| Daniel von Boros |
| `/webdesign-berlin` | Webdesign Berlin: Website erstellen lassen \| Daniel von Boros |
| `/frontend-entwickler-berlin` | Freelance Frontend-Entwickler in Berlin \| Daniel von Boros |
| `/fullstack-entwickler-berlin` | Freelance Fullstack-Entwickler in Berlin \| Daniel von Boros |
| `/en/` | Web Designer & Fullstack Developer, Berlin \| Daniel von Boros |
| `/en/web-design-berlin` | Web Designer in Berlin for Small Businesses \| Daniel von Boros |
| `/en/frontend-developer-berlin` | Frontend Developer & Engineer in Berlin \| Daniel von Boros |
| `/en/fullstack-developer-berlin` | Fullstack Developer & Engineer in Berlin \| Daniel von Boros |

## 6. Bitte prüfen, bevor es live geht

Diese Aussagen habe ich aus deinen vorhandenen Texten abgeleitet, sie sind aber Zusagen. Stimmen sie so?

- „schriftliches Angebot mit festem Leistungsumfang“ (Webdesign-FAQ, Ablauf)
- „Du siehst einen Entwurf der wichtigsten Seiten, bevor die Umsetzung beginnt“
- „Die Verträge laufen auf deinen Namen“ (Domain und Hosting)
- „Bei einem Relaunch … alte Adressen werden sauber weitergeleitet“
- „per Videocall mit Kundinnen und Kunden aus ganz Deutschland“ / EN: „anywhere in Germany and beyond“
- „Tagessatz oder Festpreis“ (Fullstack-FAQ)
- „Ja, ich bin derzeit frei für neue Projekte“: veraltet, sobald du ausgebucht bist (steht auch im Hero)
- Telefonnummer und Straße stehen jetzt im JSON-LD. Sie sind aus dem Impressum übernommen, also ohnehin öffentlich.

**Empfehlung:** In der FAQ „Was kostet eine Website?“ einen Preisanker ergänzen, etwa „Eine kleine Website mit bis zu fünf Seiten beginnt bei … €“. Wer „Website erstellen lassen Kosten“ sucht, klickt deutlich eher, wenn eine Zahl dasteht.

## 7. To-dos außerhalb des Codes (nach Wirkung sortiert)

1. **Google Search Console:** Domain-Property anlegen, `https://danielvonboros.com/sitemap.xml` einreichen, für `/`, `/webdesign-berlin` und `/fullstack-entwickler-berlin` „Indexierung beantragen“. Dazu **Bing Webmaster Tools** (Import aus der GSC geht mit einem Klick). Bing beliefert auch die ChatGPT-Suche und DuckDuckGo.
2. **Google-Unternehmensprofil:** Hauptkategorie „Webdesigner“. Wenn keine Kunden in die Kolonnenstraße kommen, als Servicegebiet-Unternehmen anlegen (Adresse ausblenden, Gebiet Berlin). Name, Adresse und Telefon exakt wie im Impressum. Nach jedem Projekt um eine Bewertung bitten. Das ist der realistischste Weg zu „Webdesigner Berlin“.
3. **Links von eigenen Projekten:** Im Footer von raumideenwerk.com, studiovonboros.com und (mit Zustimmung) denisonsilva.com „Website: Daniel von Boros“ auf `/webdesign-berlin` verlinken.
4. **Profile mit Link zur Website**, überall mit derselben Schreibweise:
   - LinkedIn-Headline „Fullstack-Entwickler & Webdesigner in Berlin“, Website-Feld setzen
   - GitHub-Profil-README
   - Für Firmenkunden: Malt, freelance.de, freelancermap, GULP
   - Für Privatkunden: Gelbe Seiten, Das Örtliche, 11880
5. **Fallstudien:** pro Projekt eine eigene Seite (z. B. `/projekte/raumideenwerk`) mit Ausgangslage, Lösung und Ergebnis. Danach Ratgebertexte, die echte Suchfragen beantworten: „Was kostet eine Website?“, „WordPress oder individuelle Website?“.
6. **Nach vier bis acht Wochen:** In der Search Console unter „Leistung“ ansehen, für welche Suchanfragen die Seiten erscheinen, und Titles sowie Texte nachschärfen.

## 8. Checkliste nach dem Deployment

- [ ] `https://danielvonboros.com/robots.txt` liefert Text, `/sitemap.xml` liefert XML, `/og.jpg` liefert ein Bild
- [ ] `https://www.danielvonboros.com/webdesign-berlin` und `http://danielvonboros.com/webdesign-berlin` leiten per 301 auf `https://danielvonboros.com/webdesign-berlin` um, ohne `.html`
- [ ] `/gibts-nicht` liefert Status 404
- [ ] `/en` leitet auf `/en/` um, `/impressum` lädt ohne `.html`
- [ ] Seitenquelltext von `/webdesign-berlin` enthält den Text (nicht nur `<div id="root">`)
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) und [Schema Markup Validator](https://validator.schema.org/) für `/` und `/webdesign-berlin`
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) einmal aufrufen, damit das neue Vorschaubild geladen wird
