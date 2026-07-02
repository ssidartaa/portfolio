"use client";

import Link from "next/link";

import Container from "@/components/ui/container";

import { cn } from "@/lib/utils";

import { info } from "@/constants/about";

const Client = () => {
  const { Email, Whatsapp, Location } = info;

  return (
    <Container
      Tag="main"
      className="flex justify-center items-center min-h-main"
    >
      <div className="flex flex-col justify-center items-center gap-3 w-full max-w-4xl">
        <div className="flex justify-center items-center gap-4">
          <span className="border border-chart-2 w-5" />

          <span className="font-bold text-chart-2 text-sm sm:text-lg md:text-xl">
            Hey, Sidarta!
          </span>

          <span className="border border-chart-2 w-5" />
        </div>

        <h2 className="font-bold text-[2.5rem] text-muted-foreground sm:text-6xl md:text-7xl text-center tracking-tight">
          Let's Connect!
        </h2>

        <article className="max-w-xl text-chart-2 text-sm sm:text-base md:text-lg text-center">
          <p>
            Ready to turn ideas into reality? I'm always open to discussing new
            projects, collaborations, or just having a friendly chat about
            technology.
          </p>
        </article>

        <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-4 w-full">
          {[Email, Whatsapp].map(({ Icon, title, description, link }, i) => (
            <li
              key={i}
              aria-label={`Send message to ${title}`}
              title={`Send message to ${title}`}
              className="w-full"
            >
              <Link
                tabIndex={-1}
                href={link!}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col justify-center items-center gap-4 bg-card p-8 border rounded-xl transition-colors animate-pulse duration-300",
                  i === 1 && "delay-300",
                )}
              >
                <Icon className="size-8 text-chart-2" />

                <span className="font-bold text-muted-foreground text-lg">
                  {title}
                </span>

                <span>{description}</span>

                <span className="text-muted-foreground text-xs">
                  {title === "Email"
                    ? "Available for inquiries 24/7"
                    : "Quick responses during business hours"}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center items-center gap-2 mt-4 text-xs">
          <div className="flex items-center gap-2">
            <Location.Icon className="size-4" />

            <span>{Location.title}</span>
          </div>

          <span className="max-w-xl text-muted-foreground text-center">
            Available for remote work worldwide and open to local opportunities
            depending on the offer.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Client;
