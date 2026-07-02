"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, ChevronDown, Send, X } from "lucide-react";

import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import ContactsNavBar from "@/components/contactsNavBar";

import { allTechs, info } from "@/constants/about";
import { Button } from "@/components/ui/button";

const Client = () => {
  const { Username } = info;

  const [collapseTechs, setCollapseTechs] = useState<boolean>(true);
  const [visibleTechsCount, setVisibleTechsCount] = useState<number>(3);

  const hiddenTechsCount = allTechs.length - visibleTechsCount;

  useEffect(() => {
    const updateCount = () => {
      if (window.matchMedia("(min-width: 1024px)").matches)
        setVisibleTechsCount(5);
      else setVisibleTechsCount(3);
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);

  return (
    <Container Tag="main" className="pt-8 min-h-main">
      <section className="relative flex justify-center md:justify-between gap-8 px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-4 md:max-w-sm lg:max-w-md max-w-lg">
          <Badge
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 w-max h-max font-bold text-chart-2 text-sm uppercase"
          >
            <Username.Icon />

            {Username.description}
          </Badge>

          <h2 className="font-bold text-[28px] text-muted-foreground xs:text-[37px] sm:text-[39px] text-center uppercase">
            {Username.title}
          </h2>

          <p className="text-sm text-justify">
            <span className="font-semibold text-primary">Full Stack </span>
            development with a pronounced focus and enthusiasm for creating
            powerful and innovative solutions. My experience covers both
            <span className="font-semibold text-primary"> Front end </span>and
            <span className="font-semibold text-primary"> Back end</span>,
            allowing me to build complete and integrated applications. I am
            constantly looking for new challenges that allow me to learn and
            apply the latest technologies, ensuring the delivery of robust,
            scalable, and secure products.
          </p>

          <div className="flex sm:flex-row flex-col gap-3">
            <Button
              asChild
              variant="default"
              className="flex items-center gap-2 px-6 h-14"
            >
              <Link href="/contact" rel="noopener noreferrer">
                <span>Contact Me</span>

                <Send />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 px-6 h-14"
            >
              <Link
                href={Username.link!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>

                <ArrowDownToLine />
              </Link>
            </Button>
          </div>

          <div className="hidden md:flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <span className="py-1 font-semibold text-muted-foreground text-xs uppercase">
                Tech Stack:
              </span>

              {!collapseTechs && (
                <Button
                  variant="outline"
                  size="icon-xs"
                  onClick={() => setCollapseTechs(true)}
                  className="text-muted-foreground"
                >
                  <X />
                </Button>
              )}
            </div>

            <ul className="flex flex-wrap gap-2.5 text-xs">
              {(collapseTechs
                ? allTechs.slice(0, visibleTechsCount)
                : allTechs
              ).map((tech, i) => (
                <li key={i}>
                  <Badge
                    variant="outline"
                    className="bg-muted text-muted-foreground"
                  >
                    {tech}
                  </Badge>
                </li>
              ))}

              {collapseTechs && hiddenTechsCount > 0 && (
                <li>
                  <Badge
                    variant="outline"
                    onClick={() => setCollapseTechs(false)}
                    className="gap-[2px] bg-muted text-primary transition-none cursor-pointer"
                  >
                    +{hiddenTechsCount} More +
                  </Badge>
                </li>
              )}
            </ul>
          </div>

          <ContactsNavBar />
        </div>

        <div className="hidden relative md:flex w-[510px] max-h-[520px]">
          <figure className="w-full h-full">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="h-full object-contain"
            />
          </figure>

          <div></div>
        </div>

        <Button
          asChild
          variant="ghost"
          size="icon-xs"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight / 2, behavior: "smooth" })
          }
          className="hidden md:block bottom-0 left-1/2 absolute text-primary -translate-x-1/2 translate-y-1/2 animate-bounce"
        >
          <ChevronDown />
        </Button>
      </section>
    </Container>
  );
};

export default Client;
