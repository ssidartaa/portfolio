"use client";

import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Empty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="empty"
    className={cn(
      "flex flex-col flex-1 justify-center items-center gap-4 p-6 border-dashed rounded-xl w-full min-w-0 text-center text-balance",
      className,
    )}
    {...props}
  />
);

const EmptyHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="empty-header"
    className={cn("flex flex-col items-center gap-2 max-w-sm", className)}
    {...props}
  />
);

const emptyMediaVariants = cva(
  "flex justify-center items-center mb-2 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) => (
  <div
    data-slot="empty-icon"
    data-variant={variant}
    className={cn(emptyMediaVariants({ variant, className }))}
    {...props}
  />
);

const EmptyTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="empty-title"
    className={cn("font-medium text-sm tracking-tight", className)}
    {...props}
  />
);

const EmptyDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <div
    data-slot="empty-description"
    className={cn(
      "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
      className,
    )}
    {...props}
  />
);

const EmptyContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="empty-content"
    className={cn(
      "flex flex-col items-center gap-2.5 w-full min-w-0 max-w-sm text-sm text-balance",
      className,
    )}
    {...props}
  />
);

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
