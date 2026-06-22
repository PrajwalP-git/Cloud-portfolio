import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Prajwal | Cloud & DevOps Portfolio",
  description:
    "Cloud/DevOps enthusiast specializing in backend, automation, CI/CD pipelines, and infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}