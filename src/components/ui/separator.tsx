"use client";

import type { ComponentProps } from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    data-slot="separator"
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "data-vertical:self-stretch bg-border data-horizontal:w-full data-vertical:w-px data-horizontal:h-px shrink-0",
      className,
    )}
    {...props}
  />
);

export { Separator };
