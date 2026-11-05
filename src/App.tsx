import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { SurfaceProvider } from "./theme/surface";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Landing } from "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { useI18n } from "./i18n/useI18n";
import { LANGUAGES } from "./i18n/types";
import { ROUTE_KEYS, routes, type RouteKey } from "./i18n/routes";
import { skipLink } from "./content/site";

const PAGES: Record<RouteKey, ReactNode> = {
  home: <Home />,
  webdesign: <Landing page="webdesign" />,
  frontend: <Landing page="frontend" />,
  fullstack: <Landing page="fullstack" />,
  imprint: <Legal />,
  privacy: <Legal isPrivacy />,
};

export default function App() {
  const { pick, route } = useI18n();
  const theme = useTheme();

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
          {pick(skipLink)}
        </Box>

        <Masthead anchorsActive={route === "home"} />

        <Box component="main" id="main" sx={{ flex: 1 }}>
          <Routes>
            {ROUTE_KEYS.flatMap((key) =>
              LANGUAGES.map((lang) => (
                <Route
                  key={`${key}-${lang}`}
                  path={routes[key][lang]}
                  element={PAGES[key]}
                />
              )),
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </SurfaceProvider>
  );
}
