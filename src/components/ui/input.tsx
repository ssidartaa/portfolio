"use client";

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Input = ({ className, type, ...props }: ComponentProps<"input">) => (
  <input
    type={type}
    data-slot="input"
    className={cn(
      "file:inline-flex bg-transparent disabled:bg-input/50 dark:bg-input/30 dark:disabled:bg-input/80 file:bg-transparent disabled:opacity-50 px-2.5 py-1 border border-input aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 file:border-0 rounded-lg outline-none w-full min-w-0 h-8 file:h-6 file:font-medium placeholder:text-muted-foreground file:text-foreground md:text-sm file:text-sm text-base transition-colors disabled:cursor-not-allowed disabled:pointer-events-none",
      className,
    )}
    {...props}
  />
);

export { Input };
