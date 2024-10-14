import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-xl px-12 mx-auto", className)}>
      {children}
    </div>
  );
};