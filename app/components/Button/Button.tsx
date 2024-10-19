import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

export type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | "fill"
    | "faded"
    | "ghost"
    | "light"
    | "bordered"
    | "flat"
    | "shadow"
    | "outline"
    | "link"
    | "disabled"
    | "animated"
    | "carousel"; // Nova variante para carrossel
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "tertiary"
    | "warning"
    | "success"
    | "danger"
    | string;
  size?: "sm" | "md" | "lg" | "xl";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const colors = {
  default: "bg-gray-600 text-white",
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  tertiary: "bg-purple-500 text-white",
  warning: "bg-yellow-500 text-black",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
};

const buttonSizes = {
  sm: "px-3 py-1 text-sm min-w-[80px] min-h-8 max-w-[8rem]",
  md: "px-4 py-2 text-base min-w-[100px] min-h-10 max-w-[11rem]",
  lg: "px-5 py-3 text-lg min-w-[120px] min-h-12 max-w-[14rem]",
  xl: "px-6 py-4 text-xl min-w-[140px] min-h-14 max-w-[16rem]",
};

const buttonVariants = cva(
  "rounded-md duration-500 transition-transform active:scale-90 whitespace-nowrap overflow-hidden text-ellipsis",
  {
    variants: {
      variant: {
        fill: "bg-opacity-90 hover:bg-opacity-100 text-white bg-blue-600 shadow-md border border-solid border-gray-200",
        faded: "bg-gray-500 text-gray-50 border-2 border-solid border-gray-300 hover:bg-opacity-70",
        ghost: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 transition-colors",
        light: "bg-white text-blue-600 hover:bg-blue-200 duration-700",
        bordered: "border-2 border-gray-500 text-gray-600 hover:bg-gray-300 transition-colors",
        flat: "bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",
        shadow: "bg-gray-500 text-white shadow-lg hover:shadow-xl transform transition-all",
        outline: "border-2 border-gray-500 text-gray-600 hover:bg-gray-300 transition-colors",
        link: "text-blue-500 underline hover:text-blue-700",
        disabled: "bg-gray-400 text-white cursor-not-allowed opacity-50",
        animated: "relative m-1 cursor-pointer overflow-hidden border-2 border-blue-800 font-mono font-semibold",
        carousel: "relative inline-flex items-center justify-center overflow-hidden border-2 border-purple-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-4 hover:border-double",
      },
      size: buttonSizes,
    },
    defaultVariants: {
      variant: "faded",
      size: "md",
    },
  }
);

const Button = ({
  children,
  variant,
  color,
  size,
  className,
  style,
  ...props
}: ButtonProps) => {
  const colorClass = color && colors[color as keyof typeof colors]
    ? colors[color as keyof typeof colors]
    : "";

  return (
    <button
      type="button"
      className={cn(
        buttonVariants({ variant, size }),
        colorClass,
        className,
        { "cursor-not-allowed": variant === "disabled" }
      )}
      style={style}
      disabled={variant === "disabled"}
    >
      {variant === "animated" ? (
        <div className="group">
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-blue-800 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-blue-800 transition duration-300 group-hover:text-white">{children}</span>
        </div>
      ) : variant === "carousel" ? (
        <div className="group">
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-700 text-white duration-300 group-hover:translate-x-0">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="ease absolute top-0 left-0 flex h-full w-full transform items-center justify-center text-purple-700 transition-all duration-300 group-hover:translate-x-full">
            {children}
          </span>
          <span className="invisible relative">{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
