/**
 * Das vorgerenderte HTML beginnt mit der Einblendung der Überschriften,
 * bevor JavaScript geladen ist. Danach ersetzt React dieses HTML
 * (`createRoot`, siehe main.tsx), und ohne Ausgleich liefe die Animation
 * ein zweites Mal von vorn.
 *
 * `measureBootOffset()` liest deshalb vor dem ersten Rendern ab, wie weit
 * die Animation schon ist. Die Überschriften des ersten Renderns starten mit
 * genau diesem Vorsprung und laufen nahtlos weiter. Alles, was später
 * erscheint (Navigation zu einer anderen Seite), startet normal.
 */

/** Markiert die Elemente, deren Animation gemessen wird. */
export const RISE_ATTRIBUTE = "data-rise";

let offsetMs = 0;
let firstRenderDone = false;

export function measureBootOffset(): void {
  if (typeof document.getAnimations !== "function") return;
  const running = document.getAnimations().find((animation) => {
    const target = (animation.effect as KeyframeEffect | null)?.target;
    return target instanceof Element && target.hasAttribute(RISE_ATTRIBUTE);
  });
  offsetMs = typeof running?.currentTime === "number" ? running.currentTime : 0;
}

/** Vorsprung in Millisekunden für Elemente des ersten Renderns, danach 0. */
export function bootOffset(): number {
  return firstRenderDone ? 0 : offsetMs;
}

/** Aufrufen, sobald das erste Rendern im Browser abgeschlossen ist. */
export function finishBoot(): void {
  firstRenderDone = true;
}
