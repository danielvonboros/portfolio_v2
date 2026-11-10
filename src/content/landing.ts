import type { Localized } from '../i18n/types';
import type { RouteKey } from '../i18n/routes';
import type { BauteilShape } from '../components/bauteil/isometricShapes';
import type { ProjectSlug } from './projects';
import type { ContentBlock } from './contentBlock';

/**
 * Leistungsseiten — je eine pro Suchabsicht. `webdesign` richtet sich an
 * Selbstständige, Privatleute und kleine Unternehmen, `frontend` und
 * `fullstack` an Firmen, Agenturen und Produktteams. Die Startseite bleibt
 * Portfolio. Synonyme der Berufsbezeichnung (Frontend Engineer, Full Stack
 * Engineer, Webentwickler …) stehen im Fließtext und in den FAQ, nicht als
 * Begriffsliste — Keyword-Listen wertet Google als Spam.
 */
export type LandingKey = Extract<RouteKey, 'webdesign' | 'frontend' | 'fullstack'>;

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface LandingPage {
  meta: { title: string; description: string };
  /** Spaltenlabel und Name im Breadcrumb. */
  label: string;
  heading: string;
  lead: string;
  blocks: ContentBlock[];
  referencesHeading: string;
  faqHeading: string;
  faq: FaqEntry[];
  cta: { heading: string; lead: string; mailLabel: string };
  /** Leistungsart für die strukturierten Daten. */
  serviceType: string;
}

/** Bauteil, das neben der Überschrift der Seite steht, wie in den Leistungen. */
export const landingShapes: Record<LandingKey, BauteilShape> = {
  webdesign: 'volumen',
  frontend: 'raster',
  fullstack: 'schichten',
};

/** Projekte aus `projects.ts`, die auf der jeweiligen Seite als Referenz erscheinen. */
export const landingReferences: Record<LandingKey, ProjectSlug[]> = {
  webdesign: ['raumideenwerk-v2', 'studio-von-boros', 'denison-silva'],
  frontend: ['denison-silva', 'studio-von-boros', 'raumideenwerk-v2'],
  fullstack: ['denison-silva', 'studio-von-boros', 'cana-hallenbau'],
};

export const landingPages: Record<LandingKey, Localized<LandingPage>> = {
  webdesign: {
    de: {
      meta: {
        title: 'Webdesign Berlin: Website erstellen lassen | Daniel von Boros',
        description:
          'Website erstellen lassen in Berlin: Konzept, Texte, Design und Umsetzung aus einer Hand – für Selbstständige und kleine Unternehmen. Schnell und ohne Baukasten.',
      },
      label: 'Webdesign Berlin',
      heading: 'Webdesign in Berlin für Selbstständige und kleine Unternehmen',
      lead: 'Du brauchst eine neue Website, oder die alte passt nicht mehr zu dem, was du heute machst? Als Webdesigner und Webentwickler plane, gestalte und baue ich sie — mit einer Person als Ansprechpartner, ohne Agenturkette und ohne Baukasten. Am Ende steht eine schnelle Website, die bei Google gefunden wird und die du selbst verstehst.',
      blocks: [
        {
          kind: 'text',
          heading: 'Für wen ich Websites baue',
          paragraphs: [
            'Für alle, die mit ihrer Arbeit sichtbar werden wollen: Selbstständige und Freiberufler, Handwerksbetriebe, Praxen und Studios, Kreative, kleine Marken und Unternehmen in Berlin und Umgebung. Oft gibt es schon eine Website, die über Jahre gewachsen ist. Oder es gibt noch keine, und die Visitenkarte verweist ins Leere.',
            'Ob du es Website, Homepage oder Internetauftritt nennst: Technisches Vorwissen brauchst du nicht. Wir sprechen darüber, wen du erreichen willst und was diese Menschen auf deiner Seite finden sollen. Den Rest übersetze ich in Struktur, Gestaltung und Code.',
          ],
        },
        {
          kind: 'list',
          heading: 'Was du bekommst',
          items: [
            'Konzept und Seitenstruktur: welche Seiten es braucht und was auf jeder steht',
            'Texte, die ich mit dir schreibe oder überarbeite, auf Wunsch zweisprachig auf Deutsch und Englisch',
            'Eigenes Design statt Vorlage, passend zu deiner Marke',
            'Saubere Umsetzung für Smartphone, Tablet und Desktop',
            'Technisches SEO: Seitentitel, Beschreibungen, strukturierte Daten, Sitemap und kurze Ladezeiten',
            'Datensparsame Technik: lokal eingebundene Schriften, keine unnötigen Drittanbieter',
            'Einrichtung von Domain und Hosting und eine Übergabe, nach der du Inhalte selbst pflegen kannst',
          ],
        },
        {
          kind: 'pairs',
          heading: 'So läuft ein Projekt ab',
          numbered: true,
          items: [
            {
              title: 'Erstgespräch',
              body: 'Du erzählst, was du machst und was die Website leisten soll. Danach bekommst du ein schriftliches Angebot mit klarem Leistungsumfang.',
            },
            {
              title: 'Struktur und Inhalte',
              body: 'Wir legen fest, welche Seiten es gibt und was darauf steht. Ich helfe bei den Texten und sage dir, welche Fotos noch fehlen.',
            },
            {
              title: 'Gestaltung',
              body: 'Du siehst einen Entwurf der wichtigsten Seiten, bevor die Umsetzung beginnt, und gibst Feedback.',
            },
            {
              title: 'Umsetzung',
              body: 'Ich baue die Website, teste sie auf echten Geräten und richte die Grundlagen für Google ein.',
            },
            {
              title: 'Livegang und Übergabe',
              body: 'Die Seite geht online, du bekommst eine kurze Einweisung und behältst einen Ansprechpartner, wenn später etwas dazukommen soll.',
            },
          ],
        },
        {
          kind: 'text',
          heading: 'Warum mit mir',
          paragraphs: [
            'Bevor ich Software gebaut habe, war ich Architekt und Bauleiter. Daher kommt meine Arbeitsweise: erst klären, was die Seite tragen muss, dann gestalten. Eine Website ist für mich ein Raum, durch den sich jemand bewegt. Meine Aufgabe ist, dass er findet, was er sucht, und dir am Ende schreibt.',
            'Technisch bekommt deine Website dieselbe Sorgfalt wie die Analyseplattform, an der ich drei Jahre mitentwickelt habe: kurze Ladezeiten, saubere Struktur, barrierearme Bedienung. Das merken Besucher, und Suchmaschinen auch.',
            'Und weil ich selbst zwei kleine Marken betreibe, kenne ich die andere Seite: wie viel Zeit Texte und Fotos kosten und wie wichtig es ist, dass Anfragen tatsächlich ankommen.',
          ],
        },
      ],
      referencesHeading: 'Websites, die ich gebaut habe',
      faqHeading: 'Häufige Fragen zum Webdesign',
      faq: [
        {
          question: 'Was kostet eine Website?',
          answer:
            'Das hängt vom Umfang ab: wie viele Seiten es braucht, ob sie mehrsprachig sein sollen, ob Texte und Fotos schon vorliegen und ob Funktionen wie Terminbuchung oder Formulare dazukommen. Nach dem Erstgespräch bekommst du ein schriftliches Angebot mit festem Leistungsumfang, damit du vorher weißt, woran du bist.',
        },
        {
          question: 'Wie lange dauert es, bis meine Website online ist?',
          answer:
            'Der größte Zeitfaktor sind meistens die Inhalte, nicht die Technik. Liegen Texte und Bilder früh vor, geht es deutlich schneller. Einen realistischen Zeitplan bekommst du zusammen mit dem Angebot.',
        },
        {
          question: 'Kann ich die Website später selbst bearbeiten?',
          answer:
            'Ja, das ist von Anfang an mitgedacht. Wir klären vorab, was du regelmäßig ändern willst, etwa Projekte, Termine oder Preise, und ich richte die Website so ein, dass du das ohne mich erledigen kannst. Für größere Erweiterungen bin ich weiter ansprechbar.',
        },
        {
          question: 'Baust du mit WordPress oder einem Baukasten?',
          answer:
            'Ich baue Websites individuell mit modernen Web-Technologien statt mit einem Baukasten. Das Ergebnis lädt schneller, bietet weniger Angriffsfläche und braucht keine ständigen Plugin-Updates. Ob ein Redaktionssystem sinnvoll ist, besprechen wir im Erstgespräch.',
        },
        {
          question: 'Webdesigner oder Webentwickler: Wen brauche ich?',
          answer:
            'Für eine gute Website meistens beides. Ein Webdesigner gestaltet, wie die Seite aussieht und wie sich Besucher durch sie bewegen. Ein Webentwickler setzt das technisch um, damit sie schnell lädt, auf allen Geräten funktioniert und bei Google gefunden wird. Bei mir bekommst du beides aus einer Hand, ohne Übergabe zwischen zwei Dienstleistern.',
        },
        {
          question: 'Wird meine Website bei Google gefunden?',
          answer:
            'Die technischen Grundlagen dafür baue ich von Anfang an ein: klare Seitenstruktur, eigene Seiten für deine wichtigsten Leistungen, aussagekräftige Seitentitel und Beschreibungen, strukturierte Daten und kurze Ladezeiten. Einen ersten Platz kann seriös niemand versprechen. Eine Seite, die Google versteht, ist aber die Voraussetzung dafür.',
        },
        {
          question: 'Machst du auch einen Relaunch meiner bestehenden Website?',
          answer:
            'Ja. Bei einem Relaunch prüfe ich zuerst, was die alte Seite bei Google schon erreicht hat, damit beim Umzug nichts verloren geht: Gute Inhalte bleiben, alte Adressen werden sauber weitergeleitet.',
        },
        {
          question: 'Kümmerst du dich auch um Domain und Hosting?',
          answer:
            'Ja. Ich helfe bei der Wahl des Anbieters, richte Domain und Hosting ein und bringe die Website online. Die Verträge laufen auf deinen Namen, damit die Website dir gehört.',
        },
        {
          question: 'Arbeitest du nur mit Kunden aus Berlin?',
          answer:
            'Nein. Ich sitze in Berlin-Schöneberg und treffe mich gern persönlich, arbeite aber genauso per Videocall mit Kundinnen und Kunden aus ganz Deutschland.',
        },
      ],
      cta: {
        heading: 'Erzähl mir von deinem Projekt.',
        lead: 'Schreib mir in ein paar Sätzen, was du machst und was deine Website können soll. Ich antworte innerhalb von zwei Werktagen.',
        mailLabel: 'E-Mail schreiben',
      },
      serviceType: 'Webdesign',
    },
    en: {
      meta: {
        title: 'Web Designer in Berlin for Small Businesses | Daniel von Boros',
        description:
          'Freelance web designer in Berlin: concept, copy, design and build from one person. Fast, search-friendly websites for freelancers and small businesses.',
      },
      label: 'Web design Berlin',
      heading: 'Web design in Berlin for freelancers and small businesses',
      lead: 'Need a new website, or has your old one stopped matching what you do today? As a web designer and web developer, I plan, design and build it — with one person to talk to, no agency relay and no page builder. What you end up with is a fast site that people find on Google and that you actually understand.',
      blocks: [
        {
          kind: 'text',
          heading: 'Who I build websites for',
          paragraphs: [
            'For anyone who wants their work to be found: freelancers and sole traders, trades and craft businesses, practices and studios, creatives, small brands and companies in and around Berlin. Often there is already a site that has grown over the years. Or there is none yet, and the business card points nowhere.',
            'If your business runs in English, that works: I write and build in English and German, and can put both on one site. Website, homepage, web presence: whatever you call it, you don’t need any technical background. We talk about who you want to reach and what they should find on your site. I translate the rest into structure, design and code.',
          ],
        },
        {
          kind: 'list',
          heading: 'What you get',
          items: [
            'Concept and site structure: which pages you need and what goes on each',
            'Copy that I write or rework with you, in English, German or both',
            'An original design instead of a template, fitted to your brand',
            'A clean build for phone, tablet and desktop',
            'Technical SEO: page titles, descriptions, structured data, sitemap and fast load times',
            'Privacy-minded technology: self-hosted fonts and no needless third parties',
            'Domain and hosting set up, and a handover after which you can update content yourself',
          ],
        },
        {
          kind: 'pairs',
          heading: 'How a project runs',
          numbered: true,
          items: [
            {
              title: 'First conversation',
              body: 'You tell me what you do and what the website needs to achieve. Afterwards you get a written quote with a clear scope.',
            },
            {
              title: 'Structure and content',
              body: 'We decide which pages exist and what goes on them. I help with the copy and tell you which photos are still missing.',
            },
            {
              title: 'Design',
              body: 'You see a draft of the key pages before the build starts, and give feedback.',
            },
            {
              title: 'Build',
              body: 'I build the site, test it on real devices and set up the groundwork for Google.',
            },
            {
              title: 'Launch and handover',
              body: 'The site goes live, you get a short walkthrough, and you keep a contact for whatever comes next.',
            },
          ],
        },
        {
          kind: 'text',
          heading: 'Why work with me',
          paragraphs: [
            'Before I built software, I was an architect and site manager. That is where my method comes from: first work out what the site has to carry, then design it. To me a website is a space someone moves through. My job is to make sure they find what they came for, and write to you at the end.',
            'Technically, your site gets the same care as the analysis platform I spent three years building: fast load times, a clean structure, accessible controls. Visitors notice, and so do search engines.',
            'And because I run two small brands myself, I know the other side too: how much time copy and photos take, and how much it matters that enquiries actually arrive.',
          ],
        },
      ],
      referencesHeading: 'Websites I have built',
      faqHeading: 'Web design questions',
      faq: [
        {
          question: 'How much does a website cost?',
          answer:
            'It depends on scope: how many pages you need, whether they should be multilingual, whether copy and photos already exist, and whether features such as booking or forms are part of it. After our first conversation you get a written quote with a fixed scope, so you know where you stand before anything starts.',
        },
        {
          question: 'How long until my website is live?',
          answer:
            'The biggest factor is usually the content, not the technology. If copy and images are ready early, things move much faster. You get a realistic schedule together with the quote.',
        },
        {
          question: 'Can I edit the website myself later?',
          answer:
            'Yes, that is planned in from the start. We agree up front what you want to change regularly, such as projects, dates or prices, and I set the site up so you can do that without me. For bigger additions I’m still around.',
        },
        {
          question: 'Do you use WordPress or a page builder?',
          answer:
            'I build websites individually with modern web technology rather than a page builder. The result loads faster, has a smaller attack surface and doesn’t need constant plugin updates. Whether a content management system makes sense is something we discuss in the first conversation.',
        },
        {
          question: 'Web designer or web developer: which do I need?',
          answer:
            'For a good website, usually both. A web designer shapes how the site looks and how visitors move through it. A web developer builds it so it loads fast, works on every device and gets found on Google. With me you get both from one person, with no handover between two providers.',
        },
        {
          question: 'Will my website be found on Google?',
          answer:
            'I build the technical groundwork in from the start: a clear structure, a dedicated page for each key service, meaningful titles and descriptions, structured data and fast load times. Nobody can honestly promise the top spot. A site Google understands is the precondition for it, though.',
        },
        {
          question: 'Can you relaunch my existing website?',
          answer:
            'Yes. For a relaunch I first check what the old site already ranks for, so nothing gets lost in the move: good content stays, and old addresses are redirected properly.',
        },
        {
          question: 'Do you take care of domain and hosting?',
          answer:
            'Yes. I help you choose a provider, set up domain and hosting and get the site online. The contracts are in your name, so the website belongs to you.',
        },
        {
          question: 'Do you only work with clients in Berlin?',
          answer:
            'No. I’m based in Berlin-Schöneberg and happy to meet in person, but I work just as well over video calls with clients anywhere in Germany and beyond.',
        },
      ],
      cta: {
        heading: 'Tell me about your project.',
        lead: 'Write a few sentences about what you do and what your website should do. I reply within two working days.',
        mailLabel: 'Send an email',
      },
      serviceType: 'Web design',
    },
  },

  frontend: {
    de: {
      meta: {
        title: 'Freelance Frontend-Entwickler in Berlin | Daniel von Boros',
        description:
          'Freelance Frontend-Entwickler in Berlin: React, TypeScript, Designsysteme und Datenvisualisierung. Drei Jahre Produkterfahrung, remote oder vor Ort.',
      },
      label: 'Frontend-Entwicklung',
      heading: 'Frontend-Entwickler in Berlin für React, TypeScript und Designsysteme',
      lead: 'Ob die Stelle Frontend Developer, Frontend Engineer oder UI Engineer heißt: Ich baue Oberflächen für Produkte, die über Jahre weiterwachsen sollen. Drei Jahre habe ich an einer datenintensiven Analyseplattform gearbeitet, mit Netzwerkgraphen, komplexen Datenstrukturen und einem Designsystem, das mit dem Produkt wachsen musste. Diese Erfahrung bringe ich heute als Freelancer in Teams ein.',
      blocks: [
        {
          kind: 'pairs',
          heading: 'Woran ich arbeite',
          items: [
            {
              title: 'React- und TypeScript-Anwendungen',
              body: 'Komponentenarchitektur, Zustand, Routing und Datenanbindung, streng typisiert von der API-Antwort bis zum Button.',
            },
            {
              title: 'Designsysteme und Komponentenbibliotheken',
              body: 'Bausteine, die in vielen Screens funktionieren statt nur in einem, abgestimmt mit dem Design-Team in Figma.',
            },
            {
              title: 'Datenvisualisierung und Dashboards',
              body: 'Interaktive Graphen, Diagramme und Tabellen, die auch bei Zehntausenden Einträgen bedienbar bleiben.',
            },
            {
              title: 'Barrierearme, responsive Oberflächen',
              body: 'Tastaturbedienung, Fokusführung, Lade- und Fehlerzustände, auf jeder Bildschirmgröße.',
            },
            {
              title: 'Modernisierung',
              body: 'Gewachsene Frontends auf TypeScript und moderne Build-Werkzeuge umstellen, Schritt für Schritt und ohne Stillstand.',
            },
          ],
        },
        {
          kind: 'stack',
          heading: 'Technologien',
          intro: 'Mein Schwerpunkt ist React mit TypeScript. Damit arbeite ich täglich:',
        },
        {
          kind: 'text',
          heading: 'Erfahrung',
          paragraphs: [
            'Bei Maltego Technologies war ich von 2021 bis 2024 Frontend Developer im Produktteam einer Analyseplattform für Ermittlungs- und Intelligence-Arbeit. Ich habe interaktive Oberflächen für komplexe Datenvisualisierung gebaut, UI-Komponenten für Datenstrukturen und Netzwerkgraphen konzipiert und das Designsystem mit weiterentwickelt. Agil, in enger Abstimmung mit Product Management, Design und Backend.',
            'Seitdem arbeite ich freiberuflich und baue Oberflächen mit React, Next.js und Vue, von mehrsprachigen Portfolio-Seiten mit Video bis zu Webanwendungen für kleine Marken.',
          ],
        },
        {
          kind: 'text',
          heading: 'Frontend mit Gestaltungsblick',
          paragraphs: [
            'Als Architekt habe ich gelernt, in Räumen und Wegen zu denken. Im Frontend heißt das: Mir ist nicht nur wichtig, dass eine Komponente funktioniert, sondern wie sich jemand durch die Oberfläche bewegt. Ich spreche mit Designerinnen und Designern auf Augenhöhe und gestalte kleinere Projekte auch selbst. Manche Teams nennen diese Rolle Design Engineer.',
          ],
        },
      ],
      referencesHeading: 'Aktuelle Projekte',
      faqHeading: 'Häufige Fragen zur Frontend-Entwicklung',
      faq: [
        {
          question: 'Frontend Developer, Frontend Engineer, UI Engineer: Was ist der Unterschied?',
          answer:
            'In der Praxis meist keiner. Die Titel beschreiben dieselbe Arbeit: Oberflächen im Browser bauen, mit HTML, CSS, TypeScript und einem Framework wie React. „Engineer“ betont oft Architektur und Codequalität, „UI“ die Nähe zum Design. Auf Deutsch heißt die Rolle Frontend-Entwickler. Ich decke alle drei Seiten ab.',
        },
        {
          question: 'Brauchen wir einen Frontend- oder einen Fullstack-Entwickler?',
          answer:
            'Wenn Backend und API stehen und vor allem an der Oberfläche gearbeitet wird, reicht Frontend. Müssen Datenmodell, API oder Deployment mitwachsen, lohnt sich jemand, der den ganzen Weg übernimmt. Ich kann beides.',
        },
        {
          question: 'Mit welchen Frameworks arbeitest du?',
          answer:
            'React mit TypeScript ist mein Schwerpunkt, dazu Next.js und Vite. Vue 3 setze ich in eigenen Projekten produktiv ein. Beim Styling arbeite ich mit MUI, Tailwind CSS und eigenen Design-Tokens.',
        },
        {
          question: 'Kannst du in ein bestehendes Designsystem einsteigen?',
          answer:
            'Ja. Ich steige in bestehende Komponentenbibliotheken ein, ergänze fehlende Bausteine und räume Inkonsistenzen auf, ohne laufende Features zu blockieren. Bei Maltego habe ich genau das drei Jahre lang an einem wachsenden Produkt gemacht.',
        },
        {
          question: 'Arbeitest du remote?',
          answer:
            'Ja, remote mit Teams in ganz Deutschland. In Berlin komme ich auch gern vor Ort dazu, etwa für Kick-offs, Workshops oder feste Teamtage.',
        },
      ],
      cta: {
        heading: 'Braucht euer Frontend Verstärkung?',
        lead: 'Schreib mir, woran ihr arbeitet, mit welchem Stack und ab wann. Ich antworte innerhalb von zwei Werktagen.',
        mailLabel: 'E-Mail schreiben',
      },
      serviceType: 'Frontend-Entwicklung',
    },
    en: {
      meta: {
        title: 'Frontend Developer & Engineer in Berlin | Daniel von Boros',
        description:
          'Freelance frontend developer in Berlin: React, TypeScript, design systems and data visualisation. Three years of product experience, remote or on site.',
      },
      label: 'Frontend development',
      heading: 'Frontend developer in Berlin for React, TypeScript and design systems',
      lead: 'Whether the role says frontend developer, frontend engineer or UI engineer: I build interfaces for products that need to keep growing. I spent three years on a data-heavy analysis platform, with network graphs, complex data structures and a design system that had to grow with the product. Today I bring that experience to teams as a freelancer.',
      blocks: [
        {
          kind: 'pairs',
          heading: 'What I work on',
          items: [
            {
              title: 'React and TypeScript applications',
              body: 'Component architecture, state, routing and data fetching, strictly typed from the API response to the button.',
            },
            {
              title: 'Design systems and component libraries',
              body: 'Building blocks that work across many screens rather than just one, aligned with the design team in Figma.',
            },
            {
              title: 'Data visualisation and dashboards',
              body: 'Interactive graphs, charts and tables that stay usable with tens of thousands of entries.',
            },
            {
              title: 'Accessible, responsive interfaces',
              body: 'Keyboard operation, focus management, loading and error states, on every screen size.',
            },
            {
              title: 'Modernisation',
              body: 'Moving frontends that have grown over time to TypeScript and modern build tooling, step by step and without downtime.',
            },
          ],
        },
        {
          kind: 'stack',
          heading: 'Technology',
          intro: 'My focus is React with TypeScript. This is what I work with day to day:',
        },
        {
          kind: 'text',
          heading: 'Experience',
          paragraphs: [
            'From 2021 to 2024 I was a frontend developer on the product team of Maltego Technologies, working on an analysis platform for investigative and intelligence work. I built interactive interfaces for complex data visualisation, designed UI components for data structures and network graphs, and helped evolve the design system. Agile, in close collaboration with product management, design and backend.',
            'Since then I have worked freelance, building interfaces with React, Next.js and Vue, from multilingual portfolio sites with video to web applications for small brands.',
          ],
        },
        {
          kind: 'text',
          heading: 'Frontend with a designer’s eye',
          paragraphs: [
            'As an architect I learned to think in spaces and routes. In the frontend that means I care not only that a component works, but how someone moves through the interface. I talk to designers as a peer and design smaller projects myself. Some teams call this role a design engineer.',
          ],
        },
      ],
      referencesHeading: 'Current work',
      faqHeading: 'Frontend questions',
      faq: [
        {
          question: 'Frontend developer, frontend engineer, UI engineer: what’s the difference?',
          answer:
            'In practice, usually none. The titles describe the same work: building interfaces in the browser with HTML, CSS, TypeScript and a framework such as React. “Engineer” often stresses architecture and code quality, “UI” the closeness to design. I cover all three sides.',
        },
        {
          question: 'Do we need a frontend or a fullstack developer?',
          answer:
            'If the backend and API are in place and most of the work is in the interface, frontend is enough. If the data model, API or deployment need to grow too, someone who covers the whole path pays off. I do both.',
        },
        {
          question: 'Which frameworks do you work with?',
          answer:
            'React with TypeScript is my focus, along with Next.js and Vite. I use Vue 3 in production on my own projects. For styling I work with MUI, Tailwind CSS and custom design tokens.',
        },
        {
          question: 'Can you join an existing design system?',
          answer:
            'Yes. I join existing component libraries, add missing building blocks and clean up inconsistencies without blocking ongoing features. At Maltego I did exactly that for three years on a growing product.',
        },
        {
          question: 'Do you work remotely?',
          answer:
            'Yes, remotely with teams across Germany and Europe. In Berlin I’m happy to join on site too, for kick-offs, workshops or regular team days.',
        },
      ],
      cta: {
        heading: 'Does your frontend need a hand?',
        lead: 'Tell me what you are working on, with which stack and from when. I reply within two working days.',
        mailLabel: 'Send an email',
      },
      serviceType: 'Frontend development',
    },
  },

  fullstack: {
    de: {
      meta: {
        title: 'Freelance Fullstack-Entwickler in Berlin | Daniel von Boros',
        description:
          'Freelance Fullstack-Entwickler in Berlin: React, TypeScript und Node.js. Teamverstärkung, Webanwendungen und Modernisierung bestehender Frontends – remote oder vor Ort.',
      },
      label: 'Fullstack-Entwicklung',
      heading: 'Freelance Fullstack-Entwickler in Berlin für React, TypeScript und Node.js',
      lead: 'Ob ihr einen Fullstack Developer, Full Stack Engineer oder Webentwickler sucht: Ich verstärke Produktteams und baue Webanwendungen vom Datenmodell bis zur Oberfläche. Drei Jahre Produktentwicklung an einer datenintensiven Analyseplattform, davor Architektur und Bauleitung: Ich bringe Code mit, der wartbar bleibt, und die Gewohnheit, Schnittstellen zwischen Menschen genauso ernst zu nehmen wie die zwischen Systemen.',
      blocks: [
        {
          kind: 'pairs',
          heading: 'Wie wir zusammenarbeiten können',
          items: [
            {
              title: 'Teamverstärkung',
              body: 'Ich steige in ein bestehendes Team ein und übernehme Features im Frontend oder quer durch den Stack, remote oder hybrid in Berlin.',
            },
            {
              title: 'Webanwendung von Grund auf',
              body: 'Vom Datenmodell über die REST-API bis zur Oberfläche, inklusive Authentifizierung und Deployment-Pipeline.',
            },
            {
              title: 'Modernisierung',
              body: 'Gewachsene Frontends aufräumen, auf TypeScript umstellen, ein Designsystem einziehen, ohne den laufenden Betrieb zu stören.',
            },
            {
              title: 'Audit und Entscheidungsgrundlage',
              body: 'Bestandsaufnahme von Code, Performance und SEO, mit einer klaren Empfehlung für den nächsten Schritt, etwa bei der Frage nach dem richtigen Stack.',
            },
          ],
        },
        {
          kind: 'stack',
          heading: 'Technologien',
          intro: 'Mein Schwerpunkt ist React mit TypeScript. Damit arbeite ich täglich:',
        },
        {
          kind: 'text',
          heading: 'Erfahrung',
          paragraphs: [
            'Bei Maltego Technologies habe ich von 2021 bis 2024 als Frontend-Entwickler an einer Analyseplattform für Ermittlungs- und Intelligence-Arbeit gearbeitet: interaktive Datenvisualisierung, Netzwerkgraphen mit Zehntausenden Knoten, UI-Komponenten für komplexe Datenstrukturen und ein Designsystem, das mit dem Produkt wachsen musste. Agil, in enger Abstimmung mit Product Management, Design und Backend.',
            'Seitdem arbeite ich als freiberuflicher Webentwickler und baue Websites und Webanwendungen mit React, Next.js, Vue und Node.js, von mehrsprachigen Portfolio-Seiten mit Video bis zur Bestandsanalyse gewachsener Unternehmensauftritte.',
          ],
        },
        {
          kind: 'pairs',
          heading: 'Was du von mir erwarten kannst',
          items: [
            {
              title: 'Struktur vor Fassade',
              body: 'Ich kläre Datenmodell, Zustände und Fehlerfälle, bevor ich Oberflächen baue. Das spart später die teuren Umbauten.',
            },
            {
              title: 'Wiederverwendbare Komponenten',
              body: 'Bausteine, die in mehreren Screens funktionieren, statt Einzellösungen: typisiert, zugänglich, mit Lade- und Fehlerzuständen.',
            },
            {
              title: 'Übergabefähiger Code',
              body: 'Code, den das Team ohne mich weiterführen kann: verständlich benannt, streng typisiert, ohne Abkürzungen, die später wehtun.',
            },
            {
              title: 'Klare Kommunikation',
              body: 'Auf Deutsch oder Englisch, mit kurzen Wegen und ehrlichen Einschätzungen zu Aufwand und Risiken. Koordination habe ich auf Baustellen mit vielen Gewerken gelernt.',
            },
          ],
        },
      ],
      referencesHeading: 'Aktuelle Projekte',
      faqHeading: 'Häufige Fragen zur Zusammenarbeit',
      faq: [
        {
          question: 'Fullstack Developer, Full Stack Engineer, Web Engineer: Was davon bist du?',
          answer:
            'Alles davon. Die Titel meinen in der Regel dieselbe Rolle: jemand, der eine Webanwendung vom Datenmodell über die API bis zur Oberfläche baut. In Ausschreibungen heißt sie auch Full-Stack-Entwickler, Webentwickler oder Software Engineer mit Web-Schwerpunkt. „Engineer“ betont meist Architektur und Codequalität. Mein Schwerpunkt liegt auf React und TypeScript im Frontend, mit Node.js im Backend.',
        },
        {
          question: 'Arbeitest du remote oder vor Ort?',
          answer:
            'Beides. Ich arbeite remote mit Teams in ganz Deutschland und komme in Berlin gern ins Büro, etwa für Kick-offs, Workshops oder feste Teamtage.',
        },
        {
          question: 'Mit welchen Frameworks arbeitest du?',
          answer:
            'Mein Schwerpunkt ist React mit TypeScript, dazu Next.js und Vite. Vue 3 setze ich in eigenen Projekten produktiv ein. Im Backend arbeite ich mit Node.js, Express und MongoDB, beim Deployment mit GitHub Actions, Netlify und Vercel.',
        },
        {
          question: 'Übernimmst du auch bestehende Projekte?',
          answer:
            'Ja. Ein großer Teil der Arbeit an Produkten ist Weiterentwicklung: Code verstehen, den andere geschrieben haben, aufräumen, ohne den Betrieb zu stören, und Schritt für Schritt modernisieren.',
        },
        {
          question: 'Machst du auch Design?',
          answer:
            'Im Rahmen der Umsetzung, ja. Ich arbeite mit Figma, setze bestehende Designs sorgfältig um und gestalte kleinere Projekte auch selbst. Bei großen Produkten arbeite ich am liebsten eng mit einem Design-Team zusammen.',
        },
        {
          question: 'Wie läuft die Abrechnung?',
          answer:
            'Ich arbeite freiberuflich mit eigener Umsatzsteuer-Identifikationsnummer. Ob ein Tagessatz oder ein Festpreis für einen klar umrissenen Umfang besser passt, hängt vom Projekt ab. Das klären wir im ersten Gespräch.',
        },
        {
          question: 'Bist du aktuell verfügbar?',
          answer:
            'Ja, ich bin derzeit frei für neue Projekte. Schreib mir kurz, worum es geht und ab wann ihr jemanden braucht. Ich antworte innerhalb von zwei Werktagen.',
        },
      ],
      cta: {
        heading: 'Fehlt euch noch jemand im Team?',
        lead: 'Schreib mir, woran ihr arbeitet und wobei ihr Unterstützung braucht. Ich antworte innerhalb von zwei Werktagen.',
        mailLabel: 'E-Mail schreiben',
      },
      serviceType: 'Fullstack-Webentwicklung',
    },
    en: {
      meta: {
        title: 'Fullstack Developer & Engineer in Berlin | Daniel von Boros',
        description:
          'Freelance fullstack developer in Berlin: React, TypeScript and Node.js. Team augmentation, web applications and frontend modernisation, remote or on site.',
      },
      label: 'Fullstack development',
      heading: 'Freelance fullstack developer in Berlin for React, TypeScript and Node.js',
      lead: 'Whether you’re hiring a fullstack developer, a full stack engineer or a web developer: I join product teams and build web applications from the data model to the interface. Three years of product work on a data-heavy analysis platform, and architecture and construction management before that: I bring code that stays maintainable, and the habit of taking the interfaces between people as seriously as the ones between systems.',
      blocks: [
        {
          kind: 'pairs',
          heading: 'Ways we can work together',
          items: [
            {
              title: 'Team augmentation',
              body: 'I join an existing team and take on features in the frontend or across the stack, remote or hybrid in Berlin.',
            },
            {
              title: 'Web application from scratch',
              body: 'From the data model and REST API to the interface, including authentication and a deployment pipeline.',
            },
            {
              title: 'Modernisation',
              body: 'Cleaning up frontends that have grown over time, moving to TypeScript, introducing a design system, without disrupting what is live.',
            },
            {
              title: 'Audit and decision support',
              body: 'A review of code, performance and SEO, with a clear recommendation for the next step, for example when choosing a stack.',
            },
          ],
        },
        {
          kind: 'stack',
          heading: 'Technology',
          intro: 'My focus is React with TypeScript. This is what I work with day to day:',
        },
        {
          kind: 'text',
          heading: 'Experience',
          paragraphs: [
            'From 2021 to 2024 I worked as a frontend developer at Maltego Technologies on an analysis platform for investigative and intelligence work: interactive data visualisation, network graphs with tens of thousands of nodes, UI components for complex data structures, and a design system that had to grow with the product. Agile, in close collaboration with product management, design and backend.',
            'Since then I have worked as a freelance web developer, building websites and web applications with React, Next.js, Vue and Node.js, from multilingual portfolio sites with video to audits of company websites that had outgrown their setup.',
          ],
        },
        {
          kind: 'pairs',
          heading: 'What you can expect',
          items: [
            {
              title: 'Structure before surface',
              body: 'I settle the data model, states and error cases before building interfaces. It saves the expensive rework later.',
            },
            {
              title: 'Reusable components',
              body: 'Building blocks that work across many screens instead of one-off solutions: typed, accessible, with loading and error states.',
            },
            {
              title: 'Code you can hand over',
              body: 'Code the team can carry on without me: clearly named, strictly typed, without shortcuts that hurt later.',
            },
            {
              title: 'Clear communication',
              body: 'In English or German, with short feedback loops and honest estimates of effort and risk. I learned coordination on construction sites with many trades.',
            },
          ],
        },
      ],
      referencesHeading: 'Current work',
      faqHeading: 'Working together',
      faq: [
        {
          question: 'Fullstack developer, full stack engineer, web engineer: which are you?',
          answer:
            'All of them. The titles usually describe the same role: someone who builds a web application from the data model and API to the interface. Job ads also call it full-stack web developer or software engineer with a web focus. “Engineer” tends to stress architecture and code quality. My focus is React and TypeScript on the frontend, with Node.js on the backend.',
        },
        {
          question: 'Do you work remotely or on site?',
          answer:
            'Both. I work remotely with teams across Germany and Europe, and I’m happy to come into the office in Berlin, for kick-offs, workshops or regular team days.',
        },
        {
          question: 'Which frameworks do you work with?',
          answer:
            'My focus is React with TypeScript, along with Next.js and Vite. I use Vue 3 in production on my own projects. On the backend I work with Node.js, Express and MongoDB, and deploy with GitHub Actions, Netlify and Vercel.',
        },
        {
          question: 'Do you take over existing projects?',
          answer:
            'Yes. Much of the work on a product is continued development: understanding code that others wrote, cleaning up without disrupting what is live, and modernising step by step.',
        },
        {
          question: 'Do you also design?',
          answer:
            'As part of the build, yes. I work in Figma, implement existing designs carefully and design smaller projects myself. On large products I prefer to work closely with a design team.',
        },
        {
          question: 'How do you bill?',
          answer:
            'I work as a freelancer with my own German VAT number. Whether a day rate or a fixed price for a clearly defined scope fits better depends on the project. We settle that in the first conversation.',
        },
        {
          question: 'Are you available right now?',
          answer:
            'Yes, I’m currently open to new projects. Tell me briefly what it is about and when you need someone. I reply within two working days.',
        },
      ],
      cta: {
        heading: 'Still missing someone on the team?',
        lead: 'Tell me what you are working on and where you need help. I reply within two working days.',
        mailLabel: 'Send an email',
      },
      serviceType: 'Fullstack web development',
    },
  },
};
