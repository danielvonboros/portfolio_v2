import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { identity } from "../../content/site";
import { services } from "../../content/services";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import { ThemeToggle } from "../themeToggle/ThemeToggle";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";
import { MastheadNav } from "./MastheadNav";

/**
 * Kopfzeile: Name, Leistungen, Navigation, Sprache und Farbmodus. Die
 * Navigation hängt davon ab, ob die Startseite offen ist (`MastheadNav`).
 */
export function Masthead({ onHome }: { onHome: boolean }) {
  const { pick, path } = useI18n();
  const surface = useSurface();

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        zIndex: 10,
        backgroundColor: surface.bg,
        color: surface.ink,
        transition: `background-color ${motion.base}, color ${motion.base}`,
      }}
    >
      <Container sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 5 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr auto",

              md: "minmax(0, 2fr) minmax(0, 2fr) minmax(0, 7fr) auto",
            },
            columnGap: { md: 4, lg: 6 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "start",
          }}
        >
          <Box>
            <Link
              component={RouterLink}
              to={path("home")}
              sx={{
                display: "block",
                fontWeight: 700,
                fontSize: "1.0625rem",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                transition: `opacity ${motion.fast}`,
                "&:hover": { color: surface.accent },
              }}
            >
              {identity.name}
            </Link>
            <Typography
              component="p"
              sx={{
                fontWeight: 700,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              {pick(identity.tagline).map((line, i) => (
                <Box key={i} component="span" sx={{ display: "block" }}>
                  {line}
                </Box>
              ))}
            </Typography>
            <Box
              aria-hidden
              sx={{
                width: 18,
                height: "2px",
                backgroundColor: surface.ink,
                mt: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              gridColumn: { xs: "1 / -1", md: "auto" },
              display: { xs: "none", sm: "block" },
            }}
          >
            {/* Verlinkt auf die Leistungsseiten: interne Links mit Suchbegriff im Ankertext. */}
            {services.map((service) => (
              <Link
                key={service.id}
                component={RouterLink}
                to={path(service.page)}
                sx={{
                  display: "block",
                  fontWeight: 700,
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  transition: `opacity ${motion.fast}`,
                  "&:hover": { color: surface.accent },
                }}
              >
                {pick(service.navTitle)}
              </Link>
            ))}
          </Box>

          <MastheadNav onHome={onHome} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              gridRow: { xs: 1, md: "auto" },
              gridColumn: { xs: 2, md: "auto" },
              justifySelf: "end",
            }}
          >
            <LanguageSwitch />
            <ThemeToggle />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
