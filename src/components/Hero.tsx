"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { personalInfo } from "../data/portfolioData";

const TYPING_SPEED_MS = 45;
const START_DELAY_MS = 400;

export default function Hero() {
  const [typedTagline, setTypedTagline] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullTagline = personalInfo.tagline;

  useEffect(() => {
    let charIndex = 0;
    let typingInterval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (charIndex <= fullTagline.length) {
          setTypedTagline(fullTagline.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, TYPING_SPEED_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingInterval);
    };
  }, [fullTagline]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(57, 255, 20, 0.08), transparent)",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography
            variant="caption"
            sx={{
              color: "accent.main",
              display: "block",
              opacity: 0.8,
            }}
          >
            {"// whoami"}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.1,
              color: "text.primary",
            }}
          >
            Hi, I&apos;m{" "}
            <Box component="span" sx={{ color: "accent.main" }}>
              {personalInfo.name}
            </Box>
          </Typography>

          <Box sx={{ minHeight: { xs: "3.5rem", sm: "2.5rem" } }}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontFamily: '"IBM Plex Mono", monospace',
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              {typedTagline}
              <Box
                component="span"
                sx={{
                  color: "accent.main",
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              >
                ▋
              </Box>
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => handleScrollTo("#projects")}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScrollTo("#contact")}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}