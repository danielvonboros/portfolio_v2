import Box from "@mui/material/Box";
import { useSurface } from "../../theme/surface";

export function Hairline() {
  const s = useSurface();
  return (
    <Box
      aria-hidden
      sx={{ height: "1px", backgroundColor: s.line, width: "100%" }}
    />
  );
}
