import { useEffect, type ReactNode } from "react";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { Masthead } from "./components/masthead/Masthead";
import { Footer } from "./components/footer/Footer";
import { SurfaceProvider } from "./theme/surface";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Landing } from "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ProjectOverview } from "./pages/ProjectOverview";
import { Subpage } from "./pages/Subpage";
import { useI18n } from "./i18n/useI18n";
import { LANGUAGES } from "./i18n/types";
import {
  ROUTE_KEYS,
  isProjectRoute,
  projectSlugOf,
  routes,
  type RouteKey,
  type StaticRouteKey,
} from "./i18n/routes";
import { SkipLink } from "./components/skipLink/SkipLink";
import { ScrollProgress } from "./components/scrollProgress/ScrollProgress";
import { CursorLight } from "./components/cursorLight/CursorLight";
import { finishBoot } from "./components/splitText/bootOffset";

const PAGES: Record<StaticRouteKey, ReactNode> = {
  home: <Home />,
  about: <Subpage page="about" />,
  services: <Subpage page="services" />,
  webdesign: <Landing page="webdesign" />,
  frontend: <Landing page="frontend" />,
  fullstack: <Landing page="fullstack" />,
  projects: <ProjectOverview />,
  resume: <Subpage page="resume" />,
  contact: <Subpage page="contact" />,
  imprint: <Legal />,
  privacy: <Legal isPrivacy />,
};

/** Projektseiten entstehen aus der Projektliste, alle anderen stehen in PAGES. */
function pageFor(key: RouteKey): ReactNode {
  return isProjectRoute(key) ? <ProjectDetail slug={projectSlugOf(key)} /> : PAGES[key];
}

export default function App() {
  const { route } = useI18n();

  // Nach dem ersten Rendern starten neue Überschriften ohne Vorsprung.
  useEffect(finishBoot, []);

  return (
    <SurfaceProvider kind="base">
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <SkipLink />
        <ScrollProgress />
        <CursorLight />

        <Masthead onHome={route === "home"} />

        <Box component="main" id="main" sx={{ flex: 1 }}>
          <Routes>
            {ROUTE_KEYS.flatMap((key) =>
              LANGUAGES.map((lang) => (
                <Route
                  key={`${key}-${lang}`}
                  path={routes[key][lang]}
                  element={pageFor(key)}
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
