interface IRoutes {
  title: string;
  description: string;
  shortcut: string[];
  path: string;
  homePage?: boolean;
}

export const routes: IRoutes[] = [
  {
    title: "Home",
    description: "See all about me",
    shortcut: ["Ctrl", "Alt", "H"],
    path: "/",
    homePage: true,
  },
  {
    title: "Projects",
    description: "See all my projects",
    shortcut: ["Ctrl", "Alt", "P"],
    path: "/projects",
  },
  {
    title: "Contact",
    description: "Contact me",
    shortcut: ["Ctrl", "Alt", "S"],
    path: "/contact",
  },
];
