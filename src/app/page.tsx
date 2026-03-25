import type { Metadata } from "next";

import Client from "./_client";

import { homeMetadata } from "@/constants/metadata";

export const metadata: Metadata = homeMetadata;

const Home = () => <Client />;

export default Home;
