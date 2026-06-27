import type { ReactNode } from "react";

import type { IFilterTypes } from "@/constants/projects/interfaces";

export interface IProject {
  id: number;
  name: string;
  topics: string[];
  url: string;
  deployments_url: string | null;
  description: string | null;
  language: string | null;
}

export interface IProps {
  children: ReactNode;
}

export interface IProjectsContext {
  handleFindAllProjects: () => Promise<void>;
  handleProjectsFilter: (filterType: IFilterTypes) => void;

  loading: boolean;
  projects: IProject[] | null;
  filter: IFilterTypes;
}
