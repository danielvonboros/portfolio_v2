import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Breadcrumb, type Crumb } from "../breadcrumb/Breadcrumb";
import { Glow } from "../glow/Glow";
import { SplitText } from "../splitText/SplitText";
import { useSurface } from "../../theme/surface";
import { clipOverflow } from "../../theme/clipOverflow";

interface PageIntroProps {
  crumbs: Crumb[];
  heading: string;
  lead: string;
  /** Unter der Einleitung, z. B. Verfügbarkeit und Links. */
  children?: ReactNode;
  /** Rechte Spalte, z. B. ein Bauteil oder die Eckdaten eines Projekts. */
  aside?: ReactNode;
  /** Vertikale Lage der rechten Spalte neben dem Text. */
  asideAlign?: "center" | "start";
}

/**
 * Kopf einer Unterseite: Brotkrumen, H1, Einleitung und optional eine
 * rechte Spalte. Leistungsseiten, Projektseiten und die Projektübersicht
 * beginnen alle damit.
 */
export function PageIntro({
  crumbs,
  heading,
  lead,
  children,
  aside,
  asideAlign = "center",
}: PageIntroProps) {
  const s = useSurface();

  return (
    <Box
      component="section"
      id="top"
      sx={{ position: "relative", ...clipOverflow, isolation: "isolate", color: s.ink }}
    >
      <Container
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: aside ? "minmax(0, 1fr) minmax(0, 340px)" : "minmax(0, 1fr)",
          },
          columnGap: { md: 8 },
          rowGap: { xs: 5, md: 8 },
          alignItems: asideAlign,
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Glow sx={{ right: "-14vw", top: "8%", width: "min(60vw, 760px)" }} />

        <Stack spacing={{ xs: 5, md: 8 }}>
          <Breadcrumb items={crumbs} />

          <Typography variant="h2" component="h1" sx={{ maxWidth: "22ch" }}>
            <SplitText text={heading} trigger="load" />
          </Typography>

          <Stack spacing={3} sx={{ maxWidth: "62ch" }}>
            <Typography variant="subtitle1" component="p">
              {lead}
            </Typography>
            {children}
          </Stack>
        </Stack>

        {aside}
      </Container>
    </Box>
  );
}
