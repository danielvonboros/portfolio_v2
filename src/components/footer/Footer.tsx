import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useI18n } from "../../i18n/useI18n";
import { footer, identity } from "../../content/site";
import { SurfaceProvider } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import { Wordmark } from "../wordmark/Wordmark";
import { clipOverflow } from "../../theme/clipOverflow";

export function Footer() {
  const { pick, path } = useI18n();
  const theme = useTheme();
  const s = theme.app.base;
  const t = pick(footer);
  const year = new Date().getFullYear();

  const linkSx = {
    fontSize: "0.8125rem",
    fontWeight: 500,
    color: s.muted,
    transition: `color ${motion.fast}`,
    "&:hover": { color: s.accent },
  } as const;

  return (
    <SurfaceProvider kind="base">
      <Box
        component="footer"
        sx={{
          backgroundColor: s.bg,
          color: s.muted,
          borderTop: `1px solid ${s.line}`,
          transition: `background-color ${motion.base}`,
        }}
      >
        <Container sx={{ pt: { xs: 6, md: 9 }, ...clipOverflow }}>
          <Wordmark text={identity.name} />
        </Container>
        <Container sx={{ py: 4 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Typography variant="caption">
              © {year} {identity.name}. {t.rights}
            </Typography>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              <Link component={RouterLink} to={path("webdesign")} sx={linkSx}>
                {t.webdesign}
              </Link>
              <Link component={RouterLink} to={path("frontend")} sx={linkSx}>
                {t.frontend}
              </Link>
              <Link component={RouterLink} to={path("fullstack")} sx={linkSx}>
                {t.fullstack}
              </Link>
              <Link component={RouterLink} to={path("projects")} sx={linkSx}>
                {t.projects}
              </Link>
              <Link component={RouterLink} to={path("imprint")} sx={linkSx}>
                {t.imprint}
              </Link>
              <Link component={RouterLink} to={path("privacy")} sx={linkSx}>
                {t.privacy}
              </Link>
              {identity.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={linkSx}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="#top" sx={linkSx}>
                {t.toTop}
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SurfaceProvider>
  );
}
