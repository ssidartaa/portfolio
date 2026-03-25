"use client";

import { usePathname } from "next/navigation";

import Container from "./ui/container";

import { excludedLinks, links } from "@/constants/header";

import { captalize } from "@/utils/string.utils";

const Header = () => {
  const pathName = usePathname();

  return (
    !excludedLinks.includes(pathName) && (
      <header className="top-0 z-30 sticky bg-background/70 shadow-lg backdrop-blur transition-all">
        <Container
          Tag="nav"
          className="flex justify-center md:justify-end items-center h-header"
        >
          <ul className="flex items-center gap-4">
            {links.map(({ title, path }, i) => (
              <li key={`${i}-${title}`} title={captalize(title)}>
                <a
                  aria-label={title.toLowerCase()}
                  href={path}
                  className="relative hover:text-primary capitalize transition-all duration-300"
                >
                  {title}

                  {pathName === path && (
                    <span className="top-6.5 left-0 absolute bg-primary shadow-primary w-full h-0.5 transition-all duration-300" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </header>
    )
  );
};

export default Header;
