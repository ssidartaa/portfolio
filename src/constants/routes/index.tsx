import { IRoutes } from "./interface";

export const routes: IRoutes[] = [
  {
    title: "Home",
    description: "See all about me",
    shortcut: "Ctrl+Alt+H",
    path: "/",
  },
  {
    title: "Projects",
    description: "See all my projects",
    shortcut: "Ctrl+Alt+P",
    path: "/projects",
  },
  {
    title: "Contact",
    description: "Contact me",
    shortcut: "Ctrl+Alt+T",
    path: "/contact",
  },
];

export const excludedRoutes: string[] = ["/game"];
