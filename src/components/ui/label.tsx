"use client";

import type { ComponentProps } from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const Label = ({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    data-slot="label"
    className={cn(
      "flex items-center gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 font-medium text-sm leading-none peer-disabled:cursor-not-allowed group-data-[disabled=true]:pointer-events-none select-none",
      className,
    )}
    {...props}
  />
);

export { Label };
