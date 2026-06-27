"use client";

import { useEffect } from "react";

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
import { SpinLoad } from "@/components/loading";
import {
  Card,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { captalize } from "@/utils/string.utils";

import { projectFilters, stackKeys } from "@/constants/projects";
import { info } from "@/constants/about";

import type { IFilterTypes } from "@/constants/projects/interfaces";

const Client = () => {
  const { GitHub } = info;

  const {
    handleFindAllProjects,
    handleProjectsFilter,

    loading,
    projects,
    filter,
  } = useProjects();

  useEffect(() => {
    handleFindAllProjects();
  }, [filter]);

  return (
    <Container Tag="main" className="flex flex-col gap-6 pt-12 min-h-main">
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
        <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {projects && !!projects.length ? (
            projects.map(
              ({
                id,
                name,
                topics,
                url,
                deployments_url,
                description,
                language,
              }) => {
                const stack = stackKeys.find(({ value }) =>
                  topics.includes(value),
                );

                return (
                  <Card
                    key={id}
                    className="group pt-0 w-full h-89.5 overflow-hidden"
                  >
                    <div className="relative bg-[url(/projectsBackground.webp)] bg-accent/80 h-35.5 overflow-hidden">
                      <div className="z-5 absolute inset-0 dark:bg-black/25 dark:group-hover:bg-secondary/50 group-hover:bg-black/20 transition-all duration-300">
                        <nav>
                          <ul>
                            <li></li>

                            <li></li>
                          </ul>
                        </nav>
                      </div>

                      <img
                        src={`https://opengraph.githubassets.com/1/${GitHub.description}/${name}`}
                        alt="Thumbnail"
                        className="absolute inset-0 group-hover:blur-[2px] w-full h-full object-bottom object-contain transition-all duration-300"
                      />
                    </div>

                    <CardContent>
                      <CardAction>
                        {!!stack && (
                          <Badge variant="outline">{stack.label}</Badge>
                        )}
                      </CardAction>

                      <CardTitle>
                        {captalize(name.replaceAll("-", " "), true)}
                      </CardTitle>

                      {description && (
                        <CardDescription className="text-justify">
                          {description}
                        </CardDescription>
                      )}
                    </CardContent>
                  </Card>
                );
              },
            )
          ) : (
            <></>
          )}
        </ul>
      ) : (
        <div className="flex flex-1 justify-center items-center h-full">
          <SpinLoad />
        </div>
      )}
    </Container>
  );
};

export default Client;
