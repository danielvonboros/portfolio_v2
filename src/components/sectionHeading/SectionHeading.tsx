import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { ArrowIcon } from "../arrowIcon/ArrowIcon";
import { SplitText } from "../splitText/SplitText";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

interface SectionHeadingProps {
  text: string;
  /** Schriftgröße aus dem Theme. Im Dokument bleibt es immer eine h2. */
  size?: "h2" | "h3";
  maxWidth?: string;
  /**
   * Pfad der eigenen Seite des Abschnitts, z. B. /lebenslauf. Dann wird die
   * Überschrift zum Link: ohne Unterstreichung, mit kleinem Pfeil am Ende.
   */
  to?: string;
}

/**
 * Überschrift eines Abschnitts, deren Wörter beim Scrollen aufsteigen. Auf
 * der Startseite führt sie zur eigenen Seite des Abschnitts, der Ankertext
 * ist dabei die Überschrift selbst.
 */
export function SectionHeading({ text, size = "h3", maxWidth, to }: SectionHeadingProps) {
  const s = useSurface();

  if (!to) {
    return (
      <Typography variant={size} component="h2" sx={{ maxWidth }}>
        <SplitText text={text} trigger="scroll" />
      </Typography>
    );
  }

  // Der Pfeil hängt am letzten Wort, damit er nie allein in eine Zeile rutscht.
  const arrow = (
    <Box
      component="span"
      aria-hidden
      sx={{ display: "inline-block", pl: "0.28em", pr: "0.14em", color: s.accent }}
    >
      <ArrowIcon size="0.42em" weight={2.6} />
    </Box>
  );

  return (
    <Typography variant={size} component="h2" sx={{ maxWidth }}>
      <Link
        component={RouterLink}
        to={to}
        underline="none"
        sx={{
          color: "inherit",
          textDecoration: "none",
          transition: `color ${motion.fast}`,
          "&:hover": { color: s.accent },
          "&:hover svg": { transform: "translateX(0.1em)" },
          "&:focus-visible": { outline: `2px solid ${s.accent}`, outlineOffset: "6px" },
        }}
      >
        <SplitText text={text} trigger="scroll" suffix={arrow} />
      </Link>
    </Typography>
  );
}
