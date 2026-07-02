"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

import { gitHubApi } from "@/services/api";

import { projectFilters, projectTopicFilterKey } from "@/constants/projects";

import type { IProject, IProjectsContext, IProps } from "./interfaces";
import type { IFilterTypes } from "@/constants/projects/interfaces";

export const ProjectsContext = createContext({} as IProjectsContext);

const ProjectsProvider = ({ children }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [filter, setFilter] = useState<IFilterTypes>(
    projectFilters.find(({ initial }) => initial)?.value || "all",
  );

  const handleFindAllProjects = async () => {
    try {
      setLoading(true);

      const { data } = await gitHubApi.get<IProject[]>("/user/repos", {
        params: {
          visibility: "public",
          affiliation: "owner",
          sort: "updated",
        },
      });

      setProjects(
        data.filter(
          ({ topics }: IProject) =>
            topics.includes(projectTopicFilterKey) &&
            (filter === "all" || topics.includes(filter)),
        ),
      );
    } catch (err) {
      toast.error("Error fetching projects.");

      console.error("Error fetching projects ->", err);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectsFilter = (filterType: IFilterTypes) =>
    setFilter(filterType);

  return (
    <ProjectsContext.Provider
      value={{
        handleFindAllProjects,
        handleProjectsFilter,

        loading,
        projects,
        filter,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): IProjectsContext => useContext(ProjectsContext);

export default ProjectsProvider;
