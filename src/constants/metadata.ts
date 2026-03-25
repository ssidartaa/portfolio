import { Metadata, Viewport } from "next";

export const siteName = "Portifólio";
export const siteDescription =
  "Portfólio pessoal de Sidarta Oliveira, desenvolvedor e estudante de engenharia de software.";

export const layoutViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "var(--light)" },
    { media: "(prefers-color-scheme: dark)", color: "var(--gray-2)" },
  ],
};

export const layoutMetadata: Metadata = {
  applicationName: siteName,
  generator: "Next.js",
  title: { default: siteName, template: `%s - ${siteName}` },
  description: siteDescription,
  keywords: [
    "Portfolio",
    "Sidarta Oliveira",
    "Software Engineer",
    "Sobre mim",
    "Projetos",
    "Contato",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/ico" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/ico" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/ico" }],
    shortcut: "/favicon.ico",
  },
  robots:
    process.env.NODE_ENV === "production"
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "favicon.ico",
        width: 236,
        height: 235,
        alt: `${siteName} – ${siteDescription}`,
      },
    ],
  },
};

export const homeMetadata: Metadata = {
  title: `Home - ${siteName}`,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Home - ${siteName}`,
    description: siteDescription,
    type: "website",
  },
};
