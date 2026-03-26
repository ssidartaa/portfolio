"use client";

import Link from "next/link";
import { House } from "lucide-react";

const HomeLink = () => (
  <Link
    href="/"
    className="md:top-25 md:left-15 absolute flex justify-center items-center hover:bg-foreground/10 p-3 rounded-full w-full md:w-fit transition-all duration-300"
  >
    <House />
  </Link>
);
export default HomeLink;
