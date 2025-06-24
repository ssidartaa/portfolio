"use client";

import { usePathname } from "next/navigation";

import { excludedLinks, links } from "@/data/header";
import { captalize } from "@/utils/string.utils";

const Header = () => {
  const pathName = usePathname();

  return (
    !excludedLinks.includes(pathName) && (
      <header className="h-header shadow-lg backdrop-blur sticky top-0 z-30 transition-all bg-background/70">
        <nav className="container mx-auto h-full flex items-center justify-center md:justify-end px-5">
          <ul className="flex items-center gap-4">
            {links.map(({ title, path }, i) => (
              <li key={`${i}-${title}`} title={captalize(title)}>
                <a
                  aria-label={title.toLowerCase()}
                  href={path}
                  className="capitalize relative hover:text-primary transition-all duration-300"
                >
                  {title}

                  {pathName === path && (
                    <span className="absolute left-0 top-[26px] h-[2px] bg-primary w-full shadow-primary transition-all duration-300" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  );
};

export default Header;
