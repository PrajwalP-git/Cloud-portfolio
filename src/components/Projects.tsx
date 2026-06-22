import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "../data/portfolioData";

const statusColors: Record<string, string> = {
  Live: "#39FF14",
  Deployed: "#39FF14",
  "In Progress": "#FFB300",
  Completed: "#39FF14",
  Archived: "#7A9A7A",
};

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "accent.main", display: "block", mb: 1 }}
            >
              {"// projects"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Projects
            </Typography>
          </Box>

          {projects.length === 0 ? (
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontStyle: "italic" }}
            >
              Projects coming soon — currently building and documenting.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {projects.map((project) => (
                <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    {project.status && (
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          borderColor:
                            statusColors[project.status] ?? "#39FF14",
                          color: statusColors[project.status] ?? "#39FF14",
                        }}
                      />
                    )}

                    <CardContent
                      sx={{
                        p: 3,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "text.primary",
                          pr: project.status ? 7 : 0,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.75,
                        }}
                      >
                        {project.stack.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Box>

                      <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                        {project.github && (
                          <Button
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<GitHubIcon />}
                            sx={{ color: "text.secondary" }}
                          >
                            Code
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<LaunchIcon />}
                            sx={{ color: "accent.main" }}
                          >
                            Live
                          </Button>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Container>
    </Box>
  );
}