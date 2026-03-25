import type { Metadata } from "next";

import Client from "./_client";

import { gameMetadata } from "@/constants/metadata";

export const metadata: Metadata = gameMetadata;

const Game = () => <Client />;

export default Game;
