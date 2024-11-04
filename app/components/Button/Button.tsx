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
    | "animated"
    | "carousel";
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
  rounded?:
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  disabled?: boolean;
  isIconOnly?: boolean; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Classes de cores
const colors = {
  default: "bg-default-blue text-default-white",
  primary: "bg-default-blue text-default-white",
  secondary: "bg-purple-800 text-white",
  tertiary: "bg-tertiary text-white",
  warning: "bg-yellow-400 text-gray-500 font-bold",
  success: "bg-green-800 text-gray-100",
  danger: "bg-red-700 text-gray-100",
};

// Classes de tamanhos de botão
const buttonSizes = {
  sm: "w-[6rem] h-[2rem] min-w-[4rem] min-h-[2rem] max-w-[8rem] max-h-[2.5rem] text-xs",
  md: "w-[8rem] h-[2.5rem] min-w-[6rem] min-h-[2rem] max-w-[10rem] max-h-[3rem] text-sm",
  lg: "w-[10rem] h-[3rem] min-w-[8rem] min-h-[2.5rem] max-w-[12rem] max-h-[3.5rem] text-base",
  xl: "w-[12rem] h-[3.5rem] min-w-[10rem] min-h-[3rem] max-w-[14rem] max-h-[4rem] text-lg",
};

// Classes de arredondamento
const roundedSizes = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  "5xl": "rounded-5xl",
  full: "rounded-full",
};

// Variantes de botão
const buttonVariants = cva(
  "duration-500 transition-transform whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center",
  {
    variants: {
      variant: {
        fill: "hover:bg-opacity-90 bg-opacity-100 shadow-md border border-solid border-default-white font-semibold",
        faded: "bg-light-accent text-default-blue border-2 border-solid border-gray-300 hover:bg-opacity-70 font-semibold shadow",
        ghost: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 transition-colors font-semibold",
        light: "bg-white text-blue-600 hover:bg-blue-200 duration-700",
        bordered: "border-2 border-gray-500 text-gray-600 hover:bg-gray-300 transition-colors",
        flat: "bg-blue-200 text-blue-600 hover:bg-opacity-60 transition-colors font-semibold",
        shadow: "bg-gray-500 text-white shadow-lg hover:shadow-xl transform transition-all",
        outline: "border-2 border-gray-500 text-gray-600 hover:bg-gray-300 transition-colors",
        link: "text-blue-500 underline hover:text-blue-700",
        animated: "relative m-1 cursor-pointer overflow-hidden border-2 border-blue-800 font-mono font-semibold",
        carousel: "relative inline-flex items-center justify-center overflow-hidden border-2 border-purple-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-4 hover:border-double",
      },
      size: buttonSizes,
      rounded: roundedSizes,
    },
    defaultVariants: {
      variant: "fill",
      size: "md",
      rounded: "md",
    },
  }
);

const Button = ({
  children,
  variant,
  color,
  size,
  rounded,
  className,
  style,
  disabled = false,
  isIconOnly = false,
  ...props
}: ButtonProps) => {
  // Obtém a classe de cor
  const colorClass = color && colors[color as keyof typeof colors] ? colors[color as keyof typeof colors] : "";

  // Obtém a classe de tamanho
  const sizeClass = isIconOnly ? "w-10 h-10" : buttonSizes[size as keyof typeof buttonSizes];

  return (
    <button
      type="button"
      className={cn(
        // Prioridade à variant, depois à color
        buttonVariants({ variant, size: isIconOnly ? undefined : size, rounded }),
        colorClass,
        className,
        {
          "cursor-not-allowed bg-opacity-40 hover:bg-opacity-40": disabled,
          "active:scale-90": !disabled,
          "min-w-none max-w-fit": isIconOnly
        }
      )}
      style={{ ...style, ...{ width: isIconOnly ? '40px' : undefined, height: isIconOnly ? '40px' : undefined } }} 
      disabled={disabled}
      {...props}
    >
      {isIconOnly ? ( 
        <span className="flex items-center justify-center h-full w-full">{children}</span>
      ) : variant === "animated" ? (
        <div className="group">
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-blue-800 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-blue-800 transition duration-300 group-hover:text-white">{children}</span>
        </div>
      ) : variant === "carousel" ? (
        <div className="group">
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-700 text-white duration-300 group-hover:translate-x-0">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
