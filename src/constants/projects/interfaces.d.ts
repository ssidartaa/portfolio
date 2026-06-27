export type IFilterTypes = "all" | "fullstack" | "frontend" | "backend";

export interface IProjectFilters {
  initial?: boolean;
  value: IFilterTypes;
  label: string;
}
