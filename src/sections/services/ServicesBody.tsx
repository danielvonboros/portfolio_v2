import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Split } from '../../components/split/Split';
import { DashList } from '../../components/dashList/DashList';
import { ArrowLink } from '../../components/arrowLink/ArrowLink';
import { Bauteil } from '../../components/bauteil/Bauteil';
import { Reveal } from '../../components/reveal/Reveal';
import { useI18n } from '../../i18n/useI18n';
import { services, servicesIntro } from '../../content/services';
import { useSurface } from '../../theme/surface';
import { motion } from '../../theme/tokens';

export function ServicesBody() {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(servicesIntro);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Reveal>
          <Typography variant="h3" component="h2" sx={{ maxWidth: '18ch' }}>
            {t.heading}
          </Typography>
        </Reveal>

        <Stack>
          {services.map((service) => (
            <Box
              key={service.id}
              sx={{
                borderTop: `1px solid ${s.line}`,
                py: { xs: 4, md: 5 },
                display: 'grid',
                gridTemplateColumns: {
                  xs: '88px minmax(0, 1fr)',
                  md: '120px minmax(0, 1fr) minmax(0, 1.3fr)',
                },
                columnGap: { xs: 3, md: 5, lg: 7 },
                rowGap: 3,
                transition: `background-color ${motion.base}`,
                '&:hover': { backgroundColor: `${s.accent}14` },
                '&:last-of-type': { borderBottom: `1px solid ${s.line}` },
              }}
            >
              <Bauteil shape={service.shape} />

              <Typography variant="h4" component="h3" sx={{ maxWidth: '16ch' }}>
                {pick(service.title)}
              </Typography>

              <Stack spacing={3} sx={{ gridColumn: { xs: '2', md: 'auto' } }}>
                <Typography variant="body1" sx={{ maxWidth: '58ch' }}>
                  {pick(service.body)}
                </Typography>
                <DashList items={pick(service.items)} />
                <Box sx={{ alignSelf: 'flex-start' }}>
                  <ArrowLink href={path(service.page)} routerTo={path(service.page)} size="sm">
                    {pick(service.more)}
                  </ArrowLink>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Split>
  );
}
