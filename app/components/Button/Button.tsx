import React from "react";
import { cva } from "class-variance-authority";

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} px-6 py-2 bg-slate-400 rounded-md hover:bg-opacity-70 duration-300 text-gray-800 transition-transform active:scale-90`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;