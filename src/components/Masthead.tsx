import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";
import { identity, nav } from "../content/site";
import { services } from "../content/services";
import { useSurface } from "../theme/surface";
import { motion } from "../theme/tokens";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";

function Arrow() {
  return (
    <Box
      aria-hidden
      component="svg"
      viewBox="0 0 24 24"
      sx={{
        width: "0.95em",
        height: "0.95em",
        flexShrink: 0,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.4,
        transition: `transform ${motion.fast}`,
      }}
    >
      <path d="M4 12h14M12 5l7 7-7 7" strokeLinecap="square" />
    </Box>
  );
}

export function Masthead({
  anchorsActive = true,
}: {
  anchorsActive?: boolean;
}) {
  const { pick } = useI18n();
  const surface = useSurface();
  const href = (id: string) => (anchorsActive ? `#${id}` : `/#${id}`);

  return (
    <Box component="header" sx={{ position: "relative", zIndex: 10 }}>
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
              to="/"
              sx={{
                display: "block",
                fontWeight: 700,
                fontSize: "1.0625rem",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                transition: `opacity ${motion.fast}`,
                "&:hover": { opacity: 0.6 },
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
            {services.map((service) => (
              <Typography
                key={service.id}
                component="p"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                }}
              >
                {pick(service.navTitle)}
              </Typography>
            ))}
          </Box>

          <Box
            component="nav"
            sx={{
              gridColumn: { xs: "1 / -1", md: "auto" },
              justifySelf: { md: "start" },
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.id}
                href={href(item.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                  fontWeight: 700,
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  transition: `opacity ${motion.fast}`,
                  "&:hover": { opacity: 0.6 },
                  "&:hover svg": { transform: "translateX(3px)" },
                }}
              >
                <Arrow />
                {pick(item.label)}
              </Link>
            ))}
          </Box>

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
