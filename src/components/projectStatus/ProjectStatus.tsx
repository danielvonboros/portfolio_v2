import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useI18n } from "../../i18n/useI18n";
import { statusLabel, type ProjectStatus as Status } from "../../content/projects";
import { useSurface } from "../../theme/surface";

/** Stand eines Projekts mit Quadrat: gefüllt, wenn online, sonst nur umrandet. */
export function ProjectStatus({ status }: { status: Status }) {
  const { pick } = useI18n();
  const s = useSurface();
  const live = status === "live";

  return (
    <Typography
      component="span"
      variant="caption"
      sx={{
        color: live ? s.ink : s.muted,
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
      }}
    >
      <Box
        component="span"
        aria-hidden
        sx={{
          width: 7,
          height: 7,
          backgroundColor: live ? s.accent : "transparent",
          border: `1px solid ${s.accent}`,
        }}
      />
      {pick(statusLabel[status])}
    </Typography>
  );
}
