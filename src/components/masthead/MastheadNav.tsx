import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { homeLabel, nav } from "../../content/site";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import { ArrowIcon } from "../arrowIcon/ArrowIcon";

/**
 * Dritte Spalte der Kopfzeile. Auf der Startseite springen die Links zu den
 * Abschnitten, auf allen anderen Seiten steht nur der Weg zur Startseite.
 */
export function MastheadNav({ onHome }: { onHome: boolean }) {
  const { pick, path } = useI18n();
  const surface = useSurface();

  const linkSx = {
    display: "flex",
    alignItems: "center",
    gap: "0.4em",
    fontWeight: 700,
    lineHeight: 1.45,
    letterSpacing: "-0.01em",
    transition: `opacity ${motion.fast}`,
    "&:hover": { color: surface.accent },
    "&:hover svg": { transform: "translateX(3px)" },
  } as const;

  return (
    <Box
      component="nav"
      sx={{
        gridColumn: { xs: "1 / -1", md: "auto" },
        justifySelf: { md: "start" },
      }}
    >
      {onHome ? (
        nav.map((item) => (
          <Link key={item.id} href={`#${item.id}`} sx={linkSx}>
            <ArrowIcon />
            {pick(item.label)}
          </Link>
        ))
      ) : (
        <Link component={RouterLink} to={path("home")} sx={linkSx}>
          <ArrowIcon />
          {pick(homeLabel)}
        </Link>
      )}
    </Box>
  );
}
