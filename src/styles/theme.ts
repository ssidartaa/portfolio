"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0e061f",
      paper: "#1c102f",
    },
    primary: {
      main: "#7c3aed",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9333ea",
      contrastText: "#fff",
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#cbd5e1",
    },
  },
});

export default theme;
