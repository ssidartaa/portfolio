import type { IProjectFilters } from "./interfaces";

export const projectTopicFilterKey = "portifolio-project";

export const stackKeys: IProjectFilters[] = [
  { value: "fullstack", label: "Full Stack" },
  { value: "frontend", label: "Front end" },
  { value: "backend", label: "Back end" },
];

export const projectFilters: IProjectFilters[] = [
  { initial: true, value: "all", label: "All" },
  ...stackKeys,
];
