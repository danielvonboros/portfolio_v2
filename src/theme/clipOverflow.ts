/**
 * Schneidet Überstehendes ab, ohne einen eigenen Scrollbereich zu erzeugen.
 *
 * `overflow: hidden` macht ein Element zum Scrollcontainer. Scrollgebundene
 * Animationen (`animation-timeline: view()`) messen dann gegen dieses Element
 * statt gegen das Fenster und bleiben stehen. `overflow: clip` schneidet
 * genauso ab, ohne das. Browser ohne `clip` bekommen `hidden`, sie kennen
 * scrollgebundene Animationen ohnehin nicht.
 */
export const clipOverflow = {
  overflow: "hidden",
  "@supports (overflow: clip)": { overflow: "clip" },
} as const;
