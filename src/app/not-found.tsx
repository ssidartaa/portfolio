import type { Metadata } from "next";
import Link from "next/link";
import { BotOff, Home } from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import { notFoundMetadata } from "@/constants/metadata";
import { routes } from "@/constants/routes";

export const metadata: Metadata = notFoundMetadata;

const NotFound = () => (
  <Container
    Tag="main"
    className="flex flex-col justify-center items-center gap-7 mt-15 md:mt-0 h-screen text-center select-none"
  >
    <BotOff className="w-30 h-30" />

    <div className="flex flex-col justify-center items-center gap-2 px-4 text-center">
      <h1 className="font-bold text-4xl uppercase">404 Page not found</h1>

      <p className="text-lg">The page you are looking for does not exist</p>
    </div>

    <Button asChild variant="outline" size="lg" className="px-10 py-5 rounded">
      <Link
        tabIndex={-1}
        href={routes.find(({ homePage }) => homePage)?.path || "/"}
        aria-label="Go to home page"
        title="Go to home page"
      >
        <Home />

        <span>Back to Home</span>
      </Link>
    </Button>
  </Container>
);

export default NotFound;
