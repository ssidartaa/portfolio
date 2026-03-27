"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../ui/container";
import ModeToggle from "./modeToggle";
import RoutesSheet from "./routesSheet";

import { excludedRoutes } from "@/constants/routes";

const Header = () => {
  const pathName = usePathname();

  if (excludedRoutes.includes(pathName)) return null;

  return (
    <header className="top-0 z-30 sticky bg-background/70 shadow-lg backdrop-blur transition-all">
      <Container
        Tag="nav"
        className="flex justify-center xs:justify-between items-center gap-5 h-header"
      >
        <h1 className="hidden xs:inline font-bold text-primary text-lg md:text-3xl text-center uppercase">
          <Link href="/">SOFTWARE ENGINEER</Link>
        </h1>

        <div className="flex justify-between xs:justify-normal items-center gap-5 w-full xs:w-fit">
          <ModeToggle />

          <RoutesSheet />
        </div>
      </Container>
    </header>
  );
};

export default Header;
