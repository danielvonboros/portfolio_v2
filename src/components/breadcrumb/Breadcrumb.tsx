import { Fragment } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { breadcrumbLabel } from "../../content/site";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

export interface Crumb {
  label: string;
  /** Ziel des Links. Fehlt es, ist das die aktuelle Seite. */
  to?: string;
}

/** Pfad von der Startseite bis zur aktuellen Seite, z. B. „Daniel von Boros / Projekte / Denison Silva“. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const { pick } = useI18n();
  const s = useSurface();

  return (
    <Typography
      component="nav"
      aria-label={pick(breadcrumbLabel)}
      variant="caption"
      sx={{ color: s.muted }}
    >
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && " / "}
          {item.to ? (
            <Link
              component={RouterLink}
              to={item.to}
              sx={{ color: "inherit", transition: `color ${motion.fast}`, "&:hover": { color: s.accent } }}
            >
              {item.label}
            </Link>
          ) : (
            <Box component="span" aria-current="page" sx={{ color: s.ink }}>
              {item.label}
            </Box>
          )}
        </Fragment>
      ))}
    </Typography>
  );
}
