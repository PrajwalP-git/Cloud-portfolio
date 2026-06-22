"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Slide appear={false} direction="down" in={showNavbar}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: "rgba(8, 12, 8, 0.85)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(57, 255, 20, 0.12)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                color: "accent.main",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {personalInfo.name}
              <Box
                component="span"
                sx={{ color: "text.primary", opacity: 0.6 }}
              >
                {" "}
                _
              </Box>
            </Typography>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: "text.primary",
                      "&:hover": {
                        color: "accent.main",
                        background: "transparent",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: "accent.main" }}
                aria-label="open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "70%",
              background: "#0F150F",
              borderLeft: "1px solid rgba(57, 255, 20, 0.15)",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "accent.main" }}
            aria-label="close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton onClick={() => handleNavClick(link.href)}>
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: { fontFamily: '"IBM Plex Mono", monospace' },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}