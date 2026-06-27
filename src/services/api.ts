import axios from "axios";

import { GITHUB_TOKEN } from "@/utils/env.utils";

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});
