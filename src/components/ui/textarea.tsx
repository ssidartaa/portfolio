"use client";

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Textarea = ({ className, ...props }: ComponentProps<"textarea">) => (
  <textarea
    data-slot="textarea"
    className={cn(
      "flex bg-transparent disabled:bg-input/50 dark:bg-input/30 dark:disabled:bg-input/80 disabled:opacity-50 px-2.5 py-2 border border-input aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg outline-none w-full min-h-16 placeholder:text-muted-foreground md:text-sm text-base transition-colors field-sizing-content disabled:cursor-not-allowed",
      className,
    )}
    {...props}
  />
);

export { Textarea };
