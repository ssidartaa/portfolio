"use client";

import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`container mx-auto h-main overflow-x-clip px-5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
