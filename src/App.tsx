import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { Masthead } from "./components/masthead/Masthead";
import { Footer } from "./components/footer/Footer";
import { SurfaceProvider } from "./theme/surface";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Landing } from "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { useI18n } from "./i18n/useI18n";
import { LANGUAGES } from "./i18n/types";
import { ROUTE_KEYS, routes, type RouteKey } from "./i18n/routes";
import { SkipLink } from "./components/skipLink/SkipLink";

const PAGES: Record<RouteKey, ReactNode> = {
  home: <Home />,
  webdesign: <Landing page="webdesign" />,
  frontend: <Landing page="frontend" />,
  fullstack: <Landing page="fullstack" />,
  imprint: <Legal />,
  privacy: <Legal isPrivacy />,
};

export default function App() {
  const { route } = useI18n();

  return (
    <SurfaceProvider kind="base">
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <SkipLink />

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
