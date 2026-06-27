"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "./ui/container";
import ContactsNavBar from "./contactsNavBar";
import { Button } from "./ui/button";

import { info } from "@/constants/about";
import { routes } from "@/constants/routes";

const Footer = () => {
  const pathName = usePathname();

  const {
    Username: { title: username },
    GitHub,
  } = info;

  if (!routes.map(({ path }) => path).includes(pathName)) return null;

  return (
    <footer className="pt-22.5 pb-5 h-footer">
      <Container
        Tag="div"
        className="flex flex-col justify-center items-center gap-1"
      >
        <ContactsNavBar />

        <p className="text-chart-2 text-xs xs:text-sm text-center">
          Copyright © {username}. All rights reserved
        </p>

        <Button
          asChild
          variant="link"
          className="flex items-center gap-2 p-2 text-muted-foreground hover:text-chart-4 hover:no-underline tracking-tight transition-colors duration-300"
        >
          <Link
            tabIndex={-1}
            href={GitHub.portifolio!}
            target="_blank"
            rel="noopener noreferrer"
            title="View code on GitHub"
            aria-label="View code on GitHub"
          >
            <GitHub.Icon className="w-4 h-4" />

            <span className="text-xs xs:text-sm">View code on GitHub</span>
          </Link>
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
