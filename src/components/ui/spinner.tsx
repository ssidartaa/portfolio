"use client";

import type { ComponentProps } from "react";

import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

const Spinner = ({ className, ...props }: ComponentProps<"svg">) => (
  <Loader2Icon
    data-slot="spinner"
    role="status"
    aria-label="Loading"
    className={cn("size-10 text-primary animate-spin", className)}
    {...props}
  />
);

export { Spinner };
