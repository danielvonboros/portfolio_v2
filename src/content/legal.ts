import type { Localized } from '../i18n/types';


export const imprintData = {
  name: 'Daniel von Boros',
  street: 'AUSFÜLLEN — Straße und Hausnummer',
  city: 'AUSFÜLLEN — PLZ und Ort',
  country: { de: 'Deutschland', en: 'Germany' } satisfies Localized<string>,
  email: 'mail@danielvonboros.com',
  phone: 'AUSFÜLLEN — Telefonnummer',
  vatId: 'AUSFÜLLEN — USt-IdNr. nach § 27 a UStG',
};

export const imprint: Localized<{
  title: string;
  back: string;
  sections: { heading: string; lines: string[] }[];
}> = {
  de: {
    title: 'Impressum',
    back: 'Zurück zur Startseite',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        lines: [
          imprintData.name,
          imprintData.street,
          imprintData.city,
          imprintData.country.de,
        ],
      },
      {
        heading: 'Kontakt',
        lines: [`E-Mail: ${imprintData.email}`, `Telefon: ${imprintData.phone}`],
      },
      {
        heading: 'Umsatzsteuer-Identifikationsnummer',
        lines: [imprintData.vatId],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        lines: [imprintData.name, imprintData.street, imprintData.city],
      },
      {
        heading: 'Streitbeilegung',
        lines: [
          'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ec.europa.eu/consumers/odr',
          'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ],
      },
      {
        heading: 'Haftung für Inhalte und Links',
        lines: [
          'Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.',
          'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
        ],
      },
      {
        heading: 'Urheberrecht',
        lines: [
          'Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice',
    back: 'Back to the home page',
    sections: [
      {
        heading: 'Information under § 5 DDG',
        lines: [
          imprintData.name,
          imprintData.street,
          imprintData.city,
          imprintData.country.en,
        ],
      },
      {
        heading: 'Contact',
        lines: [`Email: ${imprintData.email}`, `Phone: ${imprintData.phone}`],
      },
      {
        heading: 'VAT identification number',
        lines: [imprintData.vatId],
      },
      {
        heading: 'Responsible for the content',
        lines: [imprintData.name, imprintData.street, imprintData.city],
      },
      {
        heading: 'Dispute resolution',
        lines: [
          'The European Commission provides a platform for online dispute resolution: ec.europa.eu/consumers/odr',
          'I am neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
        ],
      },
      {
        heading: 'Liability for content and links',
        lines: [
          'The content of these pages has been prepared with care. I cannot, however, guarantee that it is accurate, complete or up to date.',
          'This website contains links to external third-party sites whose content is outside my control. Responsibility for the content of linked pages always lies with their respective provider or operator.',
        ],
      },
      {
        heading: 'Copyright',
        lines: [
          'The content and works created on this website are subject to German copyright law. Reproduction, adaptation and distribution beyond the limits of copyright require my written consent.',
        ],
      },
    ],
  },
};
