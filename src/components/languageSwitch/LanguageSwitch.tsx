import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { LANGUAGES, type Lang } from "../../i18n/types";
import { pathFor } from "../../i18n/routes";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

const NAMES: Record<Lang, string> = { de: "Deutsch", en: "English" };

/** Echte Links statt Buttons: Crawler folgen ihnen zur anderen Sprachfassung. */
export function LanguageSwitch() {
  const { lang, route } = useI18n();
  const { hash } = useLocation();
  const surface = useSurface();

  return (
    <Box
      role="group"
      aria-label={lang === "de" ? "Sprache wählen" : "Choose language"}
      sx={{ display: "flex", alignItems: "center", fontSize: "0.875rem" }}
    >
      {LANGUAGES.map((code, index) => {
        const isActive = code === lang;
        return (
          <Box key={code} sx={{ display: "flex", alignItems: "center" }}>
            {index > 0 && (
              <Box
                aria-hidden
                component="span"
                sx={{ color: surface.muted, px: "1px" }}
              >
                /
              </Box>
            )}
            <ButtonBase
              component={RouterLink}
              to={pathFor(route ?? "home", code) + hash}
              hrefLang={code}
              lang={code}
              aria-label={NAMES[code]}
              aria-current={isActive ? "true" : undefined}
              sx={{
                px: "3px",
                fontWeight: 700,
                fontSize: "inherit",
                fontFamily: "inherit",
                color: isActive ? surface.ink : surface.muted,
                transition: `color ${motion.fast}`,
                "&:hover": { color: surface.accent },
              }}
            >
              {code.toUpperCase()}
            </ButtonBase>
          </Box>
        );
      })}
    </Box>
  );
}
