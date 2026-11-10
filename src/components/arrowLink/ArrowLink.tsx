import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import { ArrowIcon } from "../arrowIcon/ArrowIcon";

interface ArrowLinkProps {
  href: string;
  routerTo?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const SIZES = {
  sm: { fontSize: "0.9375rem", arrow: 14 },
  md: { fontSize: "1.0625rem", arrow: 16 },
  lg: { fontSize: "clamp(1.125rem, 2vw, 1.5rem)", arrow: 22 },
} as const;

export function ArrowLink({
  href,
  routerTo,
  external = false,
  size = "md",
  children,
}: ArrowLinkProps) {
  const dim = SIZES[size];
  const s = useSurface();

  return (
    <Link
      {...(routerTo ? { component: RouterLink, to: routerTo } : { href })}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      sx={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 1,
        position: "relative",
        fontSize: dim.fontSize,
        fontWeight: 500,
        color: s.ink,
        paddingBottom: "3px",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "1px",
          background: "currentColor",
          opacity: 0.35,
          transition: `opacity ${motion.fast}`,
        },
        "&:hover": { color: s.accent },
        "&:hover::after": { opacity: 1 },
        "&:hover svg": { transform: "translateX(3px)" },
      }}
    >
      <Box component="span">{children}</Box>
      <Box component="span" sx={{ display: "flex", alignSelf: "center" }}>
        <ArrowIcon size={dim.arrow} weight={2} />
      </Box>
    </Link>
  );
}
