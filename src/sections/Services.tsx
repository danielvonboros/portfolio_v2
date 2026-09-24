import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section, Split, DashList } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { services, servicesIntro } from '../content/services';
import { SECTION_IDS } from '../content/site';
import { useSurface } from '../theme/surface';

function ServicesBody() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(servicesIntro);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Typography variant="h3" component="h2" sx={{ maxWidth: '18ch' }}>
          {t.heading}
        </Typography>

        <Stack>
          {services.map((service) => (
            <Box
              key={service.id}
              sx={{
                borderTop: `1px solid ${s.line}`,
                py: { xs: 4, md: 5 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
                columnGap: { md: 6, lg: 8 },
                rowGap: 3,
                '&:last-of-type': { borderBottom: `1px solid ${s.line}` },
              }}
            >
              <Typography variant="h4" component="h3" sx={{ maxWidth: '16ch' }}>
                {pick(service.title)}
              </Typography>

              <Stack spacing={3}>
                <Typography variant="body1" sx={{ maxWidth: '58ch' }}>
                  {pick(service.body)}
                </Typography>
                <DashList items={pick(service.items)} />
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Split>
  );
}

export function Services() {
  return (
    <Section id={SECTION_IDS.services} topRule>
      <ServicesBody />
    </Section>
  );
}
