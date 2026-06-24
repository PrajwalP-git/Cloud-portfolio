import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { personalInfo } from "../data/portfolioData";
import Image from "next/image";

const highlights: string[] = [
  "MCA Graduate",
  "7mo DevOps Internship",
  "AWS · Docker · K8s",
  "CI/CD Pipelines",
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={5}>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "accent.main", display: "block", mb: 1 }}
            >
              {"// about"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              About Me
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            {personalInfo.about.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  color: "text.primary",
                  opacity: 0.9,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
            <Image
              src="/my-image.jpeg"
              alt="About Image"
              width={270}
              height={270}
              style={{
                borderRadius: "50%",
                border: "1px solid #39FF14",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </Stack>

          <Grid container spacing={2}>
            {highlights.map((item) => (
              <Grid key={item} size={{ xs: 6, sm: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    background: "rgba(57, 255, 20, 0.04)",
                    border: "1px solid rgba(57, 255, 20, 0.15)",
                    borderRadius: 1,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(57, 255, 20, 0.08)",
                      borderColor: "rgba(57, 255, 20, 0.4)",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "accent.main",
                      fontWeight: 500,
                      fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    }}
                  >
                    {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}