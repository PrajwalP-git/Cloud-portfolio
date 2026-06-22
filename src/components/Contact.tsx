import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { contact } from "../data/portfolioData";

export default function Contact() {
  const links = [
    {
      key: "github",
      href: contact.github,
      icon: <GitHubIcon fontSize="large" />,
      label: "GitHub",
    },
    {
      key: "linkedin",
      href: contact.linkedin,
      icon: <LinkedInIcon fontSize="large" />,
      label: "LinkedIn",
    },
    {
      key: "email",
      href: contact.email ? `mailto:${contact.email}` : undefined,
      icon: <EmailIcon fontSize="large" />,
      label: "Email",
    },
  ].filter((link) => Boolean(link.href));

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "accent.main", display: "block", mb: 1 }}
            >
              {"// contact"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                mb: 2,
              }}
            >
              Let&apos;s Connect
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 480,
                mx: "auto",
              }}
            >
              Open to paid internship opportunities in Cloud, DevOps, and
              Backend Engineering. Feel free to reach out — I&apos;d love to
              talk.
            </Typography>
          </Box>

          {links.length > 0 ? (
            <Stack direction="row" spacing={3}>
              {links.map((link) => (
                <IconButton
                  key={link.key}
                  component="a"
                  href={link.href}
                  target={link.key !== "email" ? "_blank" : undefined}
                  rel={link.key !== "email" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  sx={{
                    color: "text.primary",
                    border: "1px solid rgba(57, 255, 20, 0.2)",
                    borderRadius: 1,
                    p: 1.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "accent.main",
                      borderColor: "accent.main",
                      boxShadow: "0 0 20px rgba(57, 255, 20, 0.25)",
                      background: "rgba(57, 255, 20, 0.06)",
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontStyle: "italic" }}
            >
              Contact details coming soon.
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}