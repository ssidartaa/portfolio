import type { Metadata } from "next";

import Client from "./_client";

import { projectsMetadata } from "@/constants/metadata";

export const metadata: Metadata = projectsMetadata;

const Projects = () => <Client />;

export default Projects;
