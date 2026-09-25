import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { SurfaceProvider } from "./theme/surface";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";

export default function App() {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isHome = pathname === "/";

  return (
    <SurfaceProvider kind="base">
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* Erster Tabstopp: überspringt die Navigation. Nur bei Fokus sichtbar. */}
        <Box
          component="a"
          href="#main"
          sx={{
            position: "absolute",
            left: 16,
            top: -80,
            zIndex: 50,
            px: 2,
            py: 1.25,
            fontSize: "0.9375rem",
            fontWeight: 500,
            backgroundColor: theme.app.base.ink,
            color: theme.app.base.bg,
            "&:focus": { top: 16 },
          }}
        >
          Zum Inhalt springen
        </Box>

        <Masthead anchorsActive={isHome} />

        <Box component="main" id="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Legal />} />
            <Route path="/datenschutz" element={<Legal isPrivacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </SurfaceProvider>
  );
}
