import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: {
      main: string;
      dim: string;
      glow: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      main: string;
      dim: string;
      glow: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#39FF14",
      contrastText: "#0A0F0A",
    },
    secondary: {
      main: "#1A1F1A",
    },
    background: {
      default: "#080C08",
      paper: "#0F150F",
    },
    text: {
      primary: "#E8F5E8",
      secondary: "#7A9A7A",
    },
    accent: {
      main: "#39FF14",
      dim: "#1A7A0A",
      glow: "rgba(57, 255, 20, 0.15)",
    },
    divider: "rgba(57, 255, 20, 0.12)",
  },
  typography: {
    fontFamily: '"IBM Plex Mono", "Courier New", monospace',
    h1: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontSize: "0.85rem",
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontSize: "0.75rem",
      letterSpacing: "0.08em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@import": [
          "url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Mono:wght@300;400;500&display=swap')",
        ],
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: "#39FF14 #0A0F0A",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
        },
        "*::-webkit-scrollbar-track": {
          background: "#0A0F0A",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#1A7A0A",
          borderRadius: "3px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: "#39FF14",
        },
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"IBM Plex Mono", monospace',
          fontWeight: 500,
          letterSpacing: "0.05em",
          borderRadius: 2,
        },
        contained: {
          background: "#39FF14",
          color: "#080C08",
          boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)",
          "&:hover": {
            background: "#39FF14",
            boxShadow: "0 0 30px rgba(57, 255, 20, 0.5)",
          },
        },
        outlined: {
          borderColor: "#39FF14",
          color: "#39FF14",
          "&:hover": {
            borderColor: "#39FF14",
            background: "rgba(57, 255, 20, 0.08)",
            boxShadow: "0 0 15px rgba(57, 255, 20, 0.2)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.75rem",
          letterSpacing: "0.05em",
          borderRadius: 2,
          border: "1px solid rgba(57, 255, 20, 0.25)",
          background: "rgba(57, 255, 20, 0.06)",
          color: "#39FF14",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#0F150F",
          border: "1px solid rgba(57, 255, 20, 0.1)",
          borderRadius: 4,
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: "rgba(57, 255, 20, 0.35)",
            boxShadow: "0 0 30px rgba(57, 255, 20, 0.08)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(57, 255, 20, 0.12)",
        },
      },
    },
  },
});

export default theme;