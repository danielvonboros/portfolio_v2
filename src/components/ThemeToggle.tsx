import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useColorMode } from "../theme/ColorModeProvider";
import { useSurface } from "../theme/surface";
import { motion } from "../theme/tokens";
import { useI18n } from "../i18n/useI18n";

const TRACK_W = 56;
const TRACK_H = 30;
const KNOB = 18;
const BORDER = 2;
const INSET = 2;
const INNER_W = TRACK_W - BORDER * 2;
const KNOB_RIGHT = INNER_W - KNOB - INSET;

export function ThemeToggle() {
  const { mode, toggle } = useColorMode();
  const surface = useSurface();
  const { lang } = useI18n();

  const isDark = mode === "dark";
  const label =
    lang === "de"
      ? isDark
        ? "Zu hellem Erscheinungsbild wechseln"
        : "Zu dunklem Erscheinungsbild wechseln"
      : isDark
        ? "Switch to light appearance"
        : "Switch to dark appearance";

  return (
    <ButtonBase
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      sx={{
        width: TRACK_W,
        height: TRACK_H,
        flexShrink: 0,
        borderRadius: `${TRACK_H}px`,
        border: `${BORDER}px solid ${surface.ink}`,
        color: surface.ink,
        position: "relative",
        transition: `border-color ${motion.base}`,
        "&:hover .knob": {
          transform: `translateY(-50%) translateX(${isDark ? -2 : 2}px)`,
        },
      }}
    >
      <Box
        className="knob"
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: isDark ? INSET : KNOB_RIGHT,
          width: KNOB,
          height: KNOB,
          borderRadius: "50%",
          backgroundColor: surface.ink,
          transform: "translateY(-50%)",
          transition: `left ${motion.base}, background-color ${motion.base}, transform ${motion.fast}`,
        }}
      />
    </ButtonBase>
  );
}
