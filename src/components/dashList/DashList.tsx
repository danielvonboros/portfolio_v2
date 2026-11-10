import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSurface } from "../../theme/surface";

export function DashList({ items }: { items: string[] }) {
  const s = useSurface();
  return (
    <Box
      component="ul"
      sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: "6px" }}
    >
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{
            color: s.muted,
            maxWidth: "68ch",
            display: "grid",
            gridTemplateColumns: "14px 1fr",
            alignItems: "baseline",
            // Pixelwerte als Strings: Zahlen bis 1 liest MUI als Prozent.
            "&::before": {
              content: '""',
              width: "5px",
              height: "1px",
              backgroundColor: s.muted,
              transform: "translateY(-4px)",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
