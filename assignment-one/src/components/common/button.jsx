import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-3 sm:py-4 px-3.5 sm:px-[25px] bg-warning opacity-100 transition-all delay-160 hover:opacity-70 text-white rounded-md text-xs md:text-base",
        className
      )}
    >
      {children}
    </button>
  );
};