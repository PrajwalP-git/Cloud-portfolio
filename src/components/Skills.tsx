import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
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
              {"// skills"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Technical Skills
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {skills.map((group) => (
              <Grid key={group.category} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "accent.main",
                        fontSize: "1rem",
                        mb: 2,
                      }}
                    >
                      {group.category}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {group.items.map((item) => (
                        <Chip
                          key={item.name}
                          label={
                            item.note ? (
                              <>
                                {item.name}
                                <Box
                                  component="span"
                                  sx={{
                                    color: "text.secondary",
                                    fontSize: "0.7rem",
                                    ml: 0.5,
                                    opacity: 0.8,
                                  }}
                                >
                                  ({item.note})
                                </Box>
                              </>
                            ) : (
                              item.name
                            )
                          }
                          size="small"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}