import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { SplitText } from "../../components/splitText/SplitText";
import { useI18n } from "../../i18n/useI18n";
import { contact, identity } from "../../content/site";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import { Magnetic } from "../../components/magnetic/Magnetic";
import type { ContactProps } from "./contactTypes";


export function ContactBody({ heading, lead }: ContactProps) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(contact);

  return (
    <Split label={pick({ de: "Kontakt", en: "Contact" })}>
      <Stack spacing={{ xs: 5, md: 7 }}>
        <Typography variant="h2" component="h2">
          <SplitText text={heading ?? t.heading} trigger="scroll" />
        </Typography>

        <Typography variant="subtitle1" component="p" sx={{ maxWidth: "52ch" }}>
          {lead ?? t.lead}
        </Typography>

        <Box>
          <Magnetic>
            <Link
              href={`mailto:${identity.email}`}
              sx={{
                display: "inline-block",
                fontSize: "clamp(1.5rem, 4.5vw, 3.25rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                wordBreak: "break-word",
                borderBottom: `2px solid ${s.line}`,
                pb: 1,
                transition: `border-color ${motion.base}`,
                "&:hover": { borderColor: s.ink },
              }}
            >
              {identity.email}
            </Link>
          </Magnetic>
          <Typography
            variant="caption"
            sx={{ color: s.muted, display: "block", pt: 2 }}
          >
            {t.mailLabel}
          </Typography>
        </Box>

        <Box sx={{ borderTop: `1px solid ${s.line}`, pt: 3 }}>
          <Typography
            variant="caption"
            sx={{ color: s.muted, display: "block" }}
          >
            {t.socialLabel}
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{ pt: 1.5 }}
            flexWrap="wrap"
            useFlexGap
          >
            {identity.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: s.muted,
                  transition: `color ${motion.fast}`,
                  "&:hover": { color: s.ink },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Split>
  );
}
