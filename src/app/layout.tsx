import { ReactNode } from "react";
import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";

import Header from "@/components/header";

import { layoutMetadata } from "@/constants/metadata";

import "@/styles/global.css";

export const metadata: Metadata = layoutMetadata;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
