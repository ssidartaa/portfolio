"use client";

import { createContext, useContext, useState } from "react";

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

      console.log(data);

      setProjects(
        data.filter(({ topics }) => topics.includes(projectTopicFilterKey)),
      );
    } catch (err) {
      console.error("Error fetching projects:", err);
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
