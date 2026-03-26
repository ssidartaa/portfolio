import type { Metadata } from "next";
import Link from "next/link";

import HomeLink from "@/components/homeLink";
import Container from "@/components/ui/container";

import { notFoundMetadata } from "@/constants/metadata";

export const metadata: Metadata = notFoundMetadata;

const NotFound = () => (
  <>
    <HomeLink />

    <Container
      Tag="main"
      className="flex flex-col justify-center items-center gap-10 mt-15 md:mt-0 min-h-main text-center select-none"
    >
      <div className="flex flex-col justify-center items-center gap-2 px-5 text-center">
        <h1 className="font-bold text-4xl uppercase">404 Page not found</h1>

        <p className="text-lg">The page you are looking for does not exist</p>
      </div>

      <Link
        href="/game"
        className="hover:bg-primary-foreground px-10 py-2 border-2 border-foreground rounded transition-all duration-300"
      >
        Play
      </Link>
    </Container>
  </>
);

export default NotFound;
