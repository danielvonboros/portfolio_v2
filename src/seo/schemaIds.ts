import { SITE_URL } from '../i18n/routes';

/**
 * Feste Kennungen der Knoten, die auf jeder Seite vorkommen. Andere Knoten
 * verweisen per `{ '@id': … }` darauf, statt sie zu wiederholen.
 */
export const PERSON_ID = `${SITE_URL}/#person`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type SchemaNode = Record<string, unknown>;
