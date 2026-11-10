import type { Localized } from '../../i18n/types';
import type { LandingKey } from '../landing';
import type { ProjectSlug } from '../projects';
import type { ProjectPage } from './projectPageTypes';
import { denisonSilva } from './denisonSilva';
import { studioVonBoros } from './studioVonBoros';
import { canaHallenbau } from './canaHallenbau';
import { raumideenwerkV2 } from './raumideenwerkV2';
import { raumideenwerk } from './raumideenwerk';

export type { ProjectPage } from './projectPageTypes';

/** Inhalt jeder Projektseite, eine Datei pro Projekt in diesem Ordner. */
export const projectPages: Record<ProjectSlug, Localized<ProjectPage>> = {
  'denison-silva': denisonSilva,
  'studio-von-boros': studioVonBoros,
  'cana-hallenbau': canaHallenbau,
  'raumideenwerk-v2': raumideenwerkV2,
  raumideenwerk: raumideenwerk,
};

/**
 * Leistungsseiten, die zu einem Projekt passen. Sie erscheinen auf der
 * Projektseite als Links mit Suchbegriff im Ankertext.
 */
export const projectServices: Record<ProjectSlug, LandingKey[]> = {
  'denison-silva': ['webdesign', 'frontend'],
  'studio-von-boros': ['webdesign', 'fullstack'],
  'cana-hallenbau': ['fullstack', 'webdesign'],
  'raumideenwerk-v2': ['webdesign', 'frontend'],
  raumideenwerk: ['webdesign'],
};
