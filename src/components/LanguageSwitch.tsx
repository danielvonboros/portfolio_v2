import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useI18n } from "../i18n/useI18n";
import { LANGUAGES, type Lang } from "../i18n/types";
import { useSurface } from "../theme/surface";
import { motion } from "../theme/tokens";

const NAMES: Record<Lang, string> = { de: "Deutsch", en: "English" };

export function LanguageSwitch() {
  const { lang, setLang } = useI18n();
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
              onClick={() => setLang(code)}
              aria-label={NAMES[code]}
              aria-pressed={isActive}
              sx={{
                px: "3px",
                fontWeight: 700,
                fontSize: "inherit",
                fontFamily: "inherit",
                color: isActive ? surface.ink : surface.muted,
                transition: `color ${motion.fast}`,
                "&:hover": { color: surface.ink },
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
