"use client";
import clsx from "clsx";
import { Card } from "./ui/card";

interface CustomCardProps extends React.ComponentPropsWithoutRef<"div"> {}
const CustomCard = ({ className, children, ...rest }: CustomCardProps) => {
  return (
    <Card {...rest} className={clsx("relative shadow-none ", className)}>
      <div
        className="z-[2] duration-200 ease-in-out transition-opacity opacity-100 group-hover/all:opacity-0 group-hover/highlight:opacity-0"
        style={{
          position: "absolute",
          left: "-6px",
          top: "-6px",
          width: "16px",
          height: " 16px",
        }}
      >
        <div className="absolute w-4 h-4 flex items-center justify-center pointer-events-none">
          <div className="absolute w-3 h-3 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-900 dark:bg-landing-hero-xray-dot-center-bg pointer-events-auto"></div>
          <div className="w-4 h-4 absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <div
              className="opacity-0 animate-dot-waves w-4 h-4 rounded-full border-2 border-refine-blue dark:border-refine-cyan"
              style={{ animationDelay: "0ms" }}
            ></div>
          </div>
          <div className="w-4 h-4 absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <div
              className="opacity-0 animate-dot-waves w-4 h-4 rounded-full border-2 border-refine-blue dark:border-refine-cyan"
              style={{ animationDelay: "400ms" }}
            ></div>
          </div>
          <div className="w-4 h-4 absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <div
              className="opacity-0 animate-dot-waves w-4 h-4 rounded-full border-2 border-refine-blue dark:border-refine-cyan"
              style={{ animationDelay: "800ms" }}
            ></div>
          </div>
        </div>
      </div>
      <>{children}</>
    </Card>
  );
};

export default CustomCard;
