"use client";

import { usePathname } from "next/navigation";

import Container from "../ui/container";
import ModeToggle from "./modeToggle";
import RoutesMenu from "./routesMenu";

import { excludedRoutes } from "@/constants/routes";

const Header = () => {
  const pathName = usePathname();

  if (excludedRoutes.includes(pathName)) return null;

  return (
    <header className="top-0 z-30 sticky bg-background/70 shadow-lg backdrop-blur transition-all">
      <Container
        Tag="nav"
        className="flex justify-center md:justify-end items-center gap-5 h-header"
      >
        <ModeToggle />

        <RoutesMenu />
      </Container>
    </header>
  );
};

export default Header;
