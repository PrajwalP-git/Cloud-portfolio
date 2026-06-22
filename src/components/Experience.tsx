import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
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
              {"// experience"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Experience
            </Typography>
          </Box>

          <Stack spacing={3}>
            {experience.map((job) => (
              <Card key={`${job.company}-${job.role}`} elevation={0}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ color: "text.primary" }}>
                        {job.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "accent.main" }}>
                        {job.company}
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.duration}
                    </Typography>
                  </Stack>

                  <List sx={{ py: 0 }}>
                    {job.points.map((point, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          display: "list-item",
                          listStyleType: "'▹  '",
                          pl: 1,
                          py: 0.5,
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          "&::marker": {
                            color: "accent.main",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ color: "text.secondary" }}
                        >
                          {point}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}