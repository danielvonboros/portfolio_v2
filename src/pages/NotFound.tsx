import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useI18n } from "../i18n/useI18n";
import { notFound } from "../content/site";
import { Seo } from "../components/seo/Seo";
import { ArrowLink } from "../components/arrowLink/ArrowLink";

/** Wird auch als `404.html` vorgerendert und trägt `noindex`. */
export function NotFound() {
  const { pick, path } = useI18n();
  const t = pick(notFound);

  return (
    <>
      <Seo page="notFound" />
      <Container sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 18 } }}>
        <Stack spacing={{ xs: 5, md: 7 }} sx={{ maxWidth: "62ch" }}>
          <Typography variant="h2" component="h1">
            {t.title}
          </Typography>
          <Typography variant="subtitle1" component="p">{t.lead}</Typography>
          <Box sx={{ alignSelf: "flex-start" }}>
            <ArrowLink href={path("home")} routerTo={path("home")}>
              {t.back}
            </ArrowLink>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
