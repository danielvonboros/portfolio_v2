import type { SchemaNode } from './schemaIds';

/** Brotkrumenpfad für die strukturierten Daten, in der Reihenfolge von oben nach unten. */
export function breadcrumbList(items: { name: string; url: string }[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
