import type { Metadata } from "next";

import LoadingComponent from "@/components/loading";

import { loadingMetadata } from "@/constants/metadata";

export const metadata: Metadata = loadingMetadata;

const Loading = () => <LoadingComponent />;

export default Loading;
