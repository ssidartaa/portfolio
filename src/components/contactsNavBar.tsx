"use client";

import Link from "next/link";

import { Button } from "./ui/button";

import { contactInfos } from "@/constants/about";

const ContactsNavBar = () => (
  <nav>
    <ul className="flex justify-center items-center gap-2 w-full">
      {contactInfos.map(({ Icon, title, link }, i) => (
        <Button
          key={i}
          asChild
          variant="link"
          size="lg"
          className="flex justify-center items-center p-2 rounded-md text-foreground hover:text-chart-4 transition-colors duration-300"
        >
          <Link
            tabIndex={-1}
            href={link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            aria-label={title}
          >
            <Icon />
          </Link>
        </Button>
      ))}
    </ul>
  </nav>
);

export default ContactsNavBar;
