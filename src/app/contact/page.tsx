import type { Metadata } from "next";

import Client from "./_client";

import { contactMetadata } from "@/constants/metadata";

export const metadata: Metadata = contactMetadata;

const Contact = () => <Client />;

export default Contact;
