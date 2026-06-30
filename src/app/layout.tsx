import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "next-themes";
import ProjectsProvider from "@/contexts/projects";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { layoutMetadata } from "@/constants/metadata";

import "@/styles/global.css";
import "@/styles/tailwind.css";

export const metadata: Metadata = layoutMetadata;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="pt-BR" suppressHydrationWarning>
    <head />

    <body>
      <Analytics />

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ProjectsProvider>
          <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-1">{children}</div>

            <Footer />
          </div>
        </ProjectsProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
