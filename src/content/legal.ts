import type { Localized } from '../i18n/types';


export const imprintData = {
  name: 'Daniel von Boros',
  street: 'Kolonnenstrasse 8',
  city: '10827 Berlin',
  country: { de: 'Deutschland', en: 'Germany' } satisfies Localized<string>,
  email: 'mail@danielvonboros.com',
  phone: '+49 160 495 81 48',
  vatId: 'DE 456 695 805 nach § 27 a UStG',
};

export const imprint: Localized<{
  title: string;
  back: string;
  lastUpdated: string;
  sections: { heading: string; lines: string[] }[];
}> = {
  de: 
    {
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
        heading: 'Inhalt dieses Portfolios',
        lines: [
          'Diese Website stellt meinen beruflichen Werdegang, meine Kenntnisse in der Softwareentwicklung und ausgewählte Projekte vor.',
          'Bei gemeinschaftlich oder für andere Unternehmen entwickelten Projekten beschreibt die jeweilige Projektbeschreibung meinen Beitrag. Die Nennung eines Unternehmens oder die Verlinkung einer Website bedeutet keine Empfehlung oder Unterstützung dieses Portfolios durch das betreffende Unternehmen.',
        ],
      },
      {
        heading: 'Urheberrecht und Rechte Dritter',
        lines: [
          'Die auf dieser Website veröffentlichten Texte, Bilder und sonstigen Inhalte sind, soweit die gesetzlichen Voraussetzungen vorliegen, urheberrechtlich geschützt.',
          'Rechte an dargestellten Projekten, Unternehmenslogos, Marken und sonstigen Inhalten Dritter verbleiben bei den jeweiligen Rechteinhabern. Die Darstellung im Portfolio überträgt keine Nutzungsrechte an Besucher dieser Website.',
          'Nutzungen, die über die gesetzlich erlaubten Verwendungen hinausgehen, bedürfen der Zustimmung des jeweiligen Rechteinhabers.',
        ],
      },
      {
        heading: 'Datenschutz',
        lines: [
          'Informationen zur Verarbeitung personenbezogener Daten finden Sie in der gesonderten Datenschutzerklärung dieser Website.',
        ],
      },
    ],
    lastUpdated: 'Stand: 24. September 2026',
  },
  en: {
    title: 'Legal notice',
    back: 'Back to the home page',
    sections: [
      {
        heading: 'Information pursuant to Section 5 of the German Digital Services Act (DDG)',
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
        lines: [`VAT identification number pursuant to Section 27a of the German VAT Act (UStG): ${imprintData.vatId}`],
      },
      {
        heading: 'Responsible for the content',
        lines: [imprintData.name, imprintData.street, imprintData.city],
      },
      {
        heading: 'Content of This Portfolio',
        lines: [
          'This website presents my professional background, software development skills and selected projects.',
          'For projects developed collaboratively or for other companies, the respective project description explains my contribution. Mentioning a company or linking to a website does not imply that the company recommends or endorses this portfolio.',
        ],
      },
      {
        heading: 'Copyright and Third-Party Rights',
        lines: [
          'The texts, images and other content published on this website are protected by copyright where the statutory requirements for protection are met.',
          'Rights to the projects shown, company logos, trademarks and other third-party content remain with their respective rights holders. Their presentation in this portfolio does not grant website visitors any rights to use them.',
          'Any use beyond what is permitted by law requires the consent of the respective rights holder.',
        ],
      },
      {
        heading: 'Data Protection',
        lines: [
          "Information about the processing of personal data can be found in this website's separate Privacy Policy.",
        ],
      },
    ],
    lastUpdated: 'Last updated: September 24, 2026',
  },};

export const privacy: Localized<{
  title: string;
  back: string;
  sections: { heading: string; lines: string[] }[];
  lastUpdated: string;
}> = {de:{
    title: "Datenschutzerklärung",
    back: "Zurück zur Startseite",
    sections: [
      {
        heading: "1. Verantwortlicher",
        lines: [
          "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
          imprintData.name,
          imprintData.street,
          imprintData.city,
          "Deutschland",
          `E-Mail: ${imprintData.email}`,
          `Telefon: ${imprintData.phone}`,
        ],
      },
      {
        heading: "2. Allgemeine Informationen",
        lines: [
          "Diese Website dient der Präsentation meines beruflichen Werdegangs und meiner Softwareprojekte. Personenbezogene Daten werden insbesondere bei der technischen Bereitstellung der Website und bei einer Kontaktaufnahme verarbeitet.",
          "Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, beispielsweise IP-Adressen, Namen und E-Mail-Adressen.",
        ],
      },
      {
        heading: "3. Hosting und Domainverwaltung",
        lines: [
          "Die Website wird bei ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf, Deutschland, gehostet. Auch die Domain wird über diesen Anbieter verwaltet.",
          "Beim Aufruf der Website verarbeitet der Hosting-Anbieter die zur Übermittlung der Inhalte erforderlichen Verbindungsdaten. Hierzu gehören insbesondere Ihre IP-Adresse, angeforderte Seiten und Dateien, Datum und Uhrzeit des Zugriffs sowie technische Browser- und Protokollinformationen. Abhängig von den Browsereinstellungen kann auch die zuvor besuchte Seite übermittelt werden.",
          "Die Verarbeitung dient der Auslieferung der Website, der Sicherstellung ihrer Stabilität und Sicherheit sowie der Erkennung und Behebung technischer Fehler.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse besteht im sicheren und zuverlässigen Betrieb dieses Portfolios. ALL-INKL.COM wird für die Bereitstellung der Website als Hosting-Dienstleister eingesetzt.",
          "Speicherdauer der Zugriffs- und Fehlerprotokolle: [Tatsächlich eingerichtete beziehungsweise mit ALL-INKL.COM vereinbarte Fristen oder konkrete Löschkriterien eintragen.]",
          "Weitere Informationen: https://all-inkl.com/datenschutzinformationen/",
        ],
      },
      {
        heading: "4. Kontaktaufnahme per E-Mail oder Telefon",
        lines: [
          "Die Website enthält einen E-Mail-Link. Beim Anklicken dieses mailto-Links wird die von Ihnen eingerichtete E-Mail-Anwendung geöffnet. Über die Website selbst wird dadurch keine Nachricht an mich versendet.",
          "Wenn Sie mir eine E-Mail senden oder mich telefonisch kontaktieren, verarbeite ich die von Ihnen mitgeteilten Angaben. Dazu gehören insbesondere Ihre Kontaktdaten, der Inhalt Ihrer Nachricht, gegebenenfalls Anhänge und technische Kommunikationsdaten.",
          "Mein E-Mail-Postfach wird bei ALL-INKL.COM betrieben. Eingehende E-Mails werden dort empfangen und gespeichert. Ihr eigener E-Mail-Anbieter verarbeitet die Nachricht im Rahmen des von Ihnen veranlassten Versands.",
          "Die Verarbeitung dient der Beantwortung Ihrer Anfrage und der weiteren beruflichen Kommunikation. Bei Anfragen, die auf den Abschluss oder die Durchführung eines Vertrags mit mir gerichtet sind, ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.",
          "Bei anderen Anfragen, insbesondere allgemeinen beruflichen Kontaktaufnahmen und Nachrichten von Unternehmensvertretern, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse besteht in der Bearbeitung Ihrer Nachricht und dem beruflichen Austausch.",
          "Die Bereitstellung Ihrer Angaben ist freiwillig. Ohne eine geeignete Kontaktmöglichkeit oder ausreichende Informationen kann ich Ihre Anfrage möglicherweise nicht beantworten.",
        ],
      },
      {
        heading: "5. Download meines Lebenslaufs",
        lines: [
          "Auf dieser Website können Sie meinen Lebenslauf als PDF herunterladen. Eine Registrierung oder die Angabe einer E-Mail-Adresse ist hierfür nicht erforderlich.",
          "Beim Abruf der PDF werden die für die Dateiübertragung erforderlichen technischen Daten verarbeitet. Hierfür gelten die Angaben zum Hosting in Abschnitt 3. Eine zusätzliche personenbezogene Erfassung oder Auswertung von Downloads durch mich erfolgt nicht.",
          "Die im Lebenslauf genannten beruflichen Stationen sind Informationen über meinen Werdegang. Durch das Herunterladen werden keine Besucherdaten an die dort genannten Arbeitgeber übermittelt.",
        ],
      },
      {
        heading: "6. Projektbilder und lokal bereitgestellte Dateien",
        lines: [
          "Projektbilder, die Lebenslauf-PDF, Schriftdateien und die für die Darstellung erforderlichen Programmdateien werden über den Webspace bei ALL-INKL.COM bereitgestellt.",
          "Die verwendeten Schriftarten sind lokal eingebunden. Beim Laden der Schriftarten wird keine Verbindung zu einem externen Schriftanbieter hergestellt.",
          "Die Website wurde mit React, Vite, MUI und TypeScript entwickelt. Diese Softwarekomponenten dienen der technischen Erstellung und Darstellung. Durch ihre Verwendung werden keine Besucherdaten an deren Entwickler übermittelt.",
          "Für die technische Auslieferung dieser Dateien gelten die Angaben zum Hosting in Abschnitt 3.",
        ],
      },
      {
        heading: "7. Links zu GitHub, LinkedIn und Projektwebsites",
        lines: [
          "Diese Website enthält einfache Links zu GitHub, LinkedIn und externen Projekt- beziehungsweise Unternehmenswebsites. Es werden keine Inhalte dieser Anbieter als Social-Media-Plugins, eingebettete Profile oder externe Vorschauen geladen.",
          "Allein durch die Darstellung dieser Links wird keine Verbindung zu den verlinkten Anbietern hergestellt. Wenn Sie einen Link anklicken, verlassen Sie diese Website beziehungsweise öffnen die Zielseite.",
          "Beim Aufruf der Zielseite verarbeitet deren Betreiber die dort anfallenden Daten, beispielsweise Ihre IP-Adresse und technische Browserinformationen. Abhängig von Browser- und Website-Einstellungen kann auch eine Herkunftsinformation übermittelt werden. Für diese Verarbeitung gelten die Datenschutzhinweise der jeweiligen Zielseite.",
          "Datenschutzhinweise von GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
          "Datenschutzhinweise von LinkedIn: https://www.linkedin.com/legal/privacy-policy",
        ],
      },
      {
        heading: "8. Cookies und Nutzungsanalyse",
        lines: [
          "Diese Website verwendet keine Analyse- oder Werbetracking-Dienste. Es werden keine Cookies oder vergleichbaren Speichertechnologien zur Wiedererkennung von Besuchern oder zur Erstellung von Nutzungsprofilen eingesetzt.",
          "Die im Abschnitt zum Hosting beschriebene Verarbeitung technischer Verbindungsdaten bleibt hiervon unberührt.",
        ],
      },
      {
        heading: "9. Speicherdauer",
        lines: [
          "Personenbezogene Daten werden nur so lange gespeichert, wie sie für den jeweiligen Zweck erforderlich sind. Für technische Protokolle gilt die in Abschnitt 3 angegebene Speicherdauer.",
          "Daten aus Kontaktanfragen werden gelöscht, sobald das Anliegen abschließend bearbeitet ist und keine weitere Kommunikation, gesetzliche Aufbewahrungspflicht oder andere Rechtsgrundlage eine weitere Speicherung erfordert.",
          "Soweit eine gesetzliche Aufbewahrungspflicht besteht, erfolgt die weitere Speicherung auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Eine erforderliche Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        heading: "10. Ihre Rechte",
        lines: [
          "Unter den gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:",
          "Auskunft nach Art. 15 DSGVO;",
          "Berichtigung nach Art. 16 DSGVO;",
          "Löschung nach Art. 17 DSGVO;",
          "Einschränkung der Verarbeitung nach Art. 18 DSGVO;",
          "Datenübertragbarkeit nach Art. 20 DSGVO;",
          "Widerspruch nach Art. 21 DSGVO.",
          "Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit bereits erfolgter Verarbeitungen bleibt unberührt.",
          "Werden Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Ich verarbeite diese Daten dann nicht weiter, sofern ich keine zwingenden schutzwürdigen Gründe nachweisen kann, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.",
          "Zur Ausübung Ihrer Rechte können Sie sich über die in Abschnitt 1 genannten Kontaktdaten an mich wenden.",
        ],
      },
      {
        heading: "11. Beschwerderecht",
        lines: [
          "Sie haben nach Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere an Ihrem gewöhnlichen Aufenthaltsort, Ihrem Arbeitsplatz oder am Ort des vermuteten Verstoßes.",
          "Für meinen Sitz ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit zuständig: https://www.datenschutz-berlin.de/",
        ],
      },
    ],
    lastUpdated: "Stand: 24. September 2026",
  },

  en: {
    title: "Privacy Policy",
    back: 'Back to the home page',
    sections: [
      {
        heading: "1. Data Controller",
        lines: [
          "The controller responsible for processing personal data on this website is:",
          imprintData.name,
          imprintData.street,
          imprintData.city,
          "Germany",
          `Email: ${imprintData.email}`,
          `Phone: ${imprintData.phone}`,
        ],
      },
      {
        heading: "2. General Information",
        lines: [
          "This website presents my professional background and software projects. Personal data is processed primarily to provide the website technically and when you contact me.",
          "Personal data is information relating to an identified or identifiable individual, such as IP addresses, names and email addresses.",
        ],
      },
      {
        heading: "3. Hosting and Domain Management",
        lines: [
          "This website is hosted by ALL-INKL.COM – Neue Medien Münnich, proprietor René Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany. The domain is also managed through this provider.",
          "When you access the website, the hosting provider processes the connection data required to deliver its content. This includes, in particular, your IP address, requested pages and files, the date and time of access, and technical browser and protocol information. Depending on your browser settings, the previously visited page may also be transmitted.",
          "Processing serves to deliver the website, ensure its stability and security, and detect and resolve technical errors.",
          "The legal basis is Article 6(1)(f) GDPR. My legitimate interest is the secure and reliable operation of this portfolio. ALL-INKL.COM is used as the hosting provider to make the website available.",
          "Retention period for access and error logs: [Enter the periods actually configured or agreed with ALL-INKL.COM, or specific deletion criteria.]",
          "Further information: https://all-inkl.com/datenschutzinformationen/",
        ],
      },
      {
        heading: "4. Contact by Email or Telephone",
        lines: [
          "This website contains an email link. Clicking this mailto link opens the email application you have configured. This does not itself send a message to me through the website.",
          "If you send me an email or contact me by telephone, I process the information you provide. This includes, in particular, your contact details, the content of your message, any attachments and technical communication data.",
          "My email account is hosted by ALL-INKL.COM. Incoming emails are received and stored there. Your own email provider processes the message as part of the transmission you initiate.",
          "Processing serves to respond to your enquiry and continue professional communication. For enquiries aimed at entering into or performing a contract with me, the legal basis is Article 6(1)(b) GDPR.",
          "For other enquiries, particularly general professional contacts and messages from company representatives, processing is based on Article 6(1)(f) GDPR. My legitimate interest is handling your message and engaging in professional communication.",
          "Providing your information is voluntary. Without suitable contact details or sufficient information, I may be unable to respond to your enquiry.",
        ],
      },
      {
        heading: "5. Downloading My CV",
        lines: [
          "You can download my CV as a PDF from this website. No registration or email address is required.",
          "When you retrieve the PDF, the technical data required to transfer the file is processed. The hosting information in Section 3 applies. I do not separately collect or analyse personal data relating to downloads.",
          "The employment history listed in the CV describes my professional background. Downloading it does not transfer visitor data to the employers mentioned.",
        ],
      },
      {
        heading: "6. Project Images and Locally Hosted Files",
        lines: [
          "Project images, the CV PDF, font files and the program files required to display the website are provided through the webspace hosted by ALL-INKL.COM.",
          "Fonts are hosted locally. Loading them does not establish a connection to an external font provider.",
          "The website was developed using React, Vite, MUI and TypeScript. These software components are used to build and display the website. Their use does not transfer visitor data to their developers.",
          "The hosting information in Section 3 applies to the technical delivery of these files.",
        ],
      },
      {
        heading: "7. Links to GitHub, LinkedIn and Project Websites",
        lines: [
          "This website contains standard links to GitHub, LinkedIn and external project or company websites. No content from these providers is loaded as social media plugins, embedded profiles or external previews.",
          "Merely displaying these links does not establish a connection to the linked providers. If you click a link, you leave this website or open the destination page.",
          "When you access the destination page, its operator processes the data generated there, such as your IP address and technical browser information. Depending on browser and website settings, referral information may also be transmitted. The privacy notice of the destination website applies to that processing.",
          "GitHub's Privacy Statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
          "LinkedIn's Privacy Policy: https://www.linkedin.com/legal/privacy-policy",
        ],
      },
      {
        heading: "8. Cookies and Usage Analytics",
        lines: [
          "This website does not use analytics or advertising tracking services. No cookies or similar storage technologies are used to recognise visitors or create usage profiles.",
          "This does not affect the processing of technical connection data described in the hosting section.",
        ],
      },
      {
        heading: "9. Retention Periods",
        lines: [
          "Personal data is retained only for as long as necessary for the relevant purpose. Technical logs are subject to the retention period stated in Section 3.",
          "Data from contact enquiries is deleted once the matter has been fully resolved, unless further communication, a statutory retention obligation or another legal basis requires continued storage.",
          "Where a statutory retention obligation applies, continued storage is based on Article 6(1)(c) GDPR. Necessary storage for establishing, exercising or defending legal claims is based on Article 6(1)(f) GDPR.",
        ],
      },
      {
        heading: "10. Your Rights",
        lines: [
          "Subject to the applicable legal conditions, you have the following rights in particular:",
          "Access under Article 15 GDPR;",
          "Rectification under Article 16 GDPR;",
          "Erasure under Article 17 GDPR;",
          "Restriction of processing under Article 18 GDPR;",
          "Data portability under Article 20 GDPR;",
          "Objection under Article 21 GDPR.",
          "Where processing is based on your consent, you may withdraw it at any time with effect for the future. The lawfulness of processing already carried out remains unaffected.",
          "Where your data is processed on the basis of Article 6(1)(f) GDPR, you may object at any time on grounds relating to your particular situation. I will then cease processing that data unless I can demonstrate compelling legitimate grounds overriding your interests, rights and freedoms, or processing serves to establish, exercise or defend legal claims.",
          "To exercise your rights, please contact me using the details in Section 1.",
        ],
      },
      {
        heading: "11. Right to Lodge a Complaint",
        lines: [
          "Under Article 77 GDPR, you have the right to lodge a complaint with a data protection supervisory authority, particularly in the place of your habitual residence, place of work or the alleged infringement.",
          "The authority responsible for my place of business is the Berlin Commissioner for Data Protection and Freedom of Information: https://www.datenschutz-berlin.de/",
        ],
      },
    ],
    lastUpdated: "Last updated: 24 September 2026",
  },
};