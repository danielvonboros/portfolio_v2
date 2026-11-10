import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useI18n } from "../../i18n/useI18n";
import { skipLink } from "../../content/site";

/** Erster Tabstopp: überspringt die Navigation. Nur bei Fokus sichtbar. */
export function SkipLink() {
  const { pick } = useI18n();
  const theme = useTheme();

  return (
    <Box
      component="a"
      href="#main"
      sx={{
        position: "absolute",
        left: 16,
        top: -80,
        zIndex: 50,
        px: 2,
        py: 1.25,
        fontSize: "0.9375rem",
        fontWeight: 500,
        backgroundColor: theme.app.base.ink,
        color: theme.app.base.bg,
        "&:focus": { top: 16 },
      }}
    >
      {pick(skipLink)}
    </Box>
  );
}
