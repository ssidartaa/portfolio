"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, FolderArchive, LinkIcon } from "lucide-react";

import { useTheme } from "next-themes";
import { useProjects } from "@/contexts/projects";

import Container from "@/components/ui/container";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import { captalize } from "@/utils/string.utils";

import { projectFilters, stackKeys } from "@/constants/projects";
import { info } from "@/constants/about";

import type { IFilterTypes } from "@/constants/projects/interfaces";

const Client = () => {
  const { GitHub } = info;

  const { resolvedTheme } = useTheme();
  const {
    handleFindAllProjects,
    handleProjectsFilter,

    loading,
    projects,
    filter,
  } = useProjects();

  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () =>
      setShowScrollTop(window.scrollY > window.innerHeight / 2);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects, loading]);

  useEffect(() => {
    handleFindAllProjects();
  }, [filter]);

  return (
    <Container
      Tag="main"
      className="relative flex flex-col gap-6 pt-12 min-h-main"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-muted-foreground text-4xl text-center tracking-tight">
          My Projects
        </h2>

        <p className="max-w-xl text-chart-2 text-sm sm:text-base text-justify">
          A bit of my journey as a developer. Many projects are no longer on the
          old site, or don't have source code access as they are private
          projects. Thank you for visiting, come back anytime and feel free to
          leave feedback in the project repository!
        </p>
      </div>

      <div className="flex justify-center w-full">
        <ul className="hidden sm:flex justify-center gap-4 w-full max-w-70">
          <ButtonGroup>
            {projectFilters.map(({ value, label }) => (
              <Button
                key={value}
                type="button"
                size="lg"
                title={`Filter to ${label}`}
                aria-label={`Filter to ${label}`}
                variant={filter === value ? "default" : "outline"}
                disabled={filter === value || loading}
                aria-disabled={filter === value || loading}
                onClick={() => filter === value || handleProjectsFilter(value)}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </ul>

        <Select
          value={filter}
          disabled={loading}
          aria-disabled={loading}
          onValueChange={(value) =>
            filter === value || handleProjectsFilter(value as IFilterTypes)
          }
        >
          <SelectTrigger className="sm:hidden w-full max-w-70">
            <SelectValue placeholder="Select a stack to filter" />
          </SelectTrigger>

          <SelectContent position="popper">
            <SelectGroup>
              <SelectLabel>Stacks</SelectLabel>

              {projectFilters.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {!loading ? (
        !!projects?.length ? (
          <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map(
              ({
                id,
                name,
                topics,
                html_url,
                homepage,
                description,
                language,
              }) => {
                const stack = stackKeys.find(({ value }) =>
                  topics.includes(value),
                )!;

                const isOpenSource = topics.includes("open-source");
                const isCurrentPage = html_url === GitHub.portifolio;

                return (
                  <Card
                    key={id}
                    className="group pt-0 dark:border border-2 w-full h-100 overflow-hidden"
                  >
                    <div className="relative bg-[url(/projectsBackground.webp)] bg-accent/80 h-35 overflow-hidden">
                      <div className="z-5 absolute inset-0 bg-black/20 md:bg-transparent md:dark:bg-black/15 md:dark:group-hover:bg-secondary/50 md:group-hover:bg-black/20 dark:bg-secondary/50 transition-all duration-300">
                        <nav className="flex justify-center items-center md:group-hover:opacity-100 md:opacity-0 w-full h-full transition-all duration-300">
                          <ul className="flex items-center gap-2">
                            <li>
                              <Button
                                asChild
                                variant="outline"
                                size="icon-lg"
                                title="GitHub Repository"
                                aria-label="GitHub Repository"
                                className="bg-transparent hover:bg-primary/10 border-foreground! border!"
                              >
                                <Link
                                  tabIndex={-1}
                                  href={html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <GitHub.Icon />
                                </Link>
                              </Button>
                            </li>

                            {homepage && (
                              <li>
                                <Button
                                  asChild
                                  variant="outline"
                                  size="icon-lg"
                                  title="Website Link"
                                  aria-label="Website Link"
                                  className="bg-transparent hover:bg-primary/10 border-foreground! border!"
                                >
                                  <Link
                                    tabIndex={-1}
                                    href={isCurrentPage ? "/" : homepage}
                                    target={isCurrentPage ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                  >
                                    <LinkIcon />
                                  </Link>
                                </Button>
                              </li>
                            )}
                          </ul>
                        </nav>
                      </div>

                      <figure>
                        <img
                          src={`https://opengraph.githubassets.com/1/${GitHub.description}/${name}`}
                          alt="Thumbnail"
                          className="absolute inset-0 blur-[2px] md:blur-none md:group-hover:blur-[2px] w-full h-full object-bottom object-contain transition-all duration-300"
                        />

                        <figcaption hidden className="sr-only">
                          Thumbnail
                        </figcaption>
                      </figure>
                    </div>

                    <CardContent className="flex flex-col gap-3">
                      <CardTitle className="text-lg text-center">
                        {captalize(name.replaceAll("-", " "), true)}
                      </CardTitle>

                      <CardAction className="flex flex-wrap justify-center items-center gap-2 w-full">
                        {isOpenSource && (
                          <Badge variant="secondary">{"</> Open Source"}</Badge>
                        )}

                        <figure
                          title={language}
                          aria-label={language}
                          className="w-4.5 h-4.5"
                        >
                          <img
                            src={`https://skillicons.dev/icons?i=${language.toLowerCase()}&theme=${resolvedTheme}`}
                            alt={language}
                            className="w-full h-full object-cover"
                          />

                          <figcaption hidden className="sr-only">
                            {language}
                          </figcaption>
                        </figure>

                        <Badge variant="outline">{stack.label}</Badge>
                      </CardAction>

                      {description && (
                        <CardDescription className="text-justify">
                          {description}
                        </CardDescription>
                      )}
                    </CardContent>
                  </Card>
                );
              },
            )}
          </ul>
        ) : (
          <div className="flex flex-1 justify-center items-center h-full">
            <Empty>
              <EmptyContent>
                <EmptyMedia variant="icon">
                  <FolderArchive />
                </EmptyMedia>

                <EmptyTitle>No Projects found</EmptyTitle>

                <EmptyDescription>
                  Try switching to a different stack filter
                </EmptyDescription>
              </EmptyContent>
            </Empty>
          </div>
        )
      ) : (
        <div className="flex flex-1 justify-center items-center h-full">
          <Spinner />
        </div>
      )}

      {showScrollTop && (
        <div className="bottom-10 left-0 z-20 sticky flex justify-center items-center mt-4 w-full">
          <Button
            asChild
            variant="ghost"
            size="icon"
            title="Scroll to top"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="animate-bounce"
          >
            <ChevronUp />
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Client;
