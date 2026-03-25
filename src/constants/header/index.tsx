import { IHeaderLink } from "./interface";

export const links: IHeaderLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const excludedLinks: string[] = ["/game"];
