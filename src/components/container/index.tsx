"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/string.utils";

interface IProps extends HTMLAttributes<ElementType> {
  Tag: ElementType;
  children?: ReactNode;
}

const Container = ({ Tag, children, className, ...rest }: IProps) => {
  return (
    <Tag className={cn("mx-auto px-5 container", className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Container;
