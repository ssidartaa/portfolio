import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@mui/material";

import Header from "@/components/header";

import theme from "@/styles/theme";
import "@/styles/global.css";
import "@/styles/inline.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test",
  description: "Portfolio of Sidarta Oliveira - Software Engineer",
  applicationName: "Portfolio",
  creator: "Sidarta Oliveira - Software Engineer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
