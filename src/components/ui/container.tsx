"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IProps extends HTMLAttributes<ElementType> {
  Tag: ElementType;
  children?: ReactNode;
}

const Container = ({ Tag, children, className, ...rest }: IProps) => (
  <Tag className={cn("mx-auto px-5 container", className)} {...rest}>
    {children}
  </Tag>
);

export default Container;
