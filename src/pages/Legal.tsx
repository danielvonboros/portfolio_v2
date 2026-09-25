import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useI18n } from "../i18n/useI18n";
import { imprint, privacy } from "../content/legal";
import { Seo } from "../components/Seo";
import { ArrowLink } from "../components/ArrowLink";

export function Legal({ isPrivacy }: { isPrivacy?: boolean }) {
  const { pick } = useI18n();
  const theme = useTheme();
  const t = pick(isPrivacy ? privacy : imprint);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo titleOverride={t.title} />
      <Container sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 18 } }}>
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: "62ch" }}>
          <Typography variant="h3" component="h1">
            {t.title}
          </Typography>

          <Stack spacing={5}>
            {t.sections.map((section) => (
              <Stack key={section.heading} spacing={1}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {section.heading}
                </Typography>
                {section.lines.map((line) => {
                  const isPlaceholder = line.startsWith("AUSFÜLLEN");
                  return (
                    <Typography
                      key={line}
                      variant="body2"
                      sx={{
                        color: isPlaceholder
                          ? theme.app.focus
                          : theme.app.base.muted,
                        fontWeight: isPlaceholder ? 700 : 400,
                      }}
                    >
                      {line}
                    </Typography>
                  );
                })}
              </Stack>
            ))}
          </Stack>
          <Typography variant="h6" component="h1">
            {t.lastUpdated}
          </Typography>

          <Box sx={{ alignSelf: "flex-start" }}>
            <ArrowLink href="/" routerTo="/">
              {t.back}
            </ArrowLink>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
