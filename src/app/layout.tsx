import { ReactNode } from "react";
import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";

import Header from "@/components/header";

import { layoutMetadata } from "@/constants/metadata";

import "@/styles/global.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = layoutMetadata;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className="vsc-initialized vsc-domain-localhost --vsc-domain">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
