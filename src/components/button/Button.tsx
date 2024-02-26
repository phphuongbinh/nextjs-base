import React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../loading";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}
const variantClasses = {
  primary: "text-white bg-primary",
  secondary: "text-white bg-secondary",
};

const sizeClasses = {
  sm: "text-[10px] py-[5px] px-[7px]",
  md: "text-base",
  lg: "text-lg",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const child = !!isLoading ? (
    <Spinner size="sm" className="border-white"></Spinner>
  ) : (
    children
  );
  return (
    <button
      className={twMerge(
        "flex items-center justify-center font-semibold text-base p-2.5 gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className,
        isLoading ? "opacity-50 pointer-events-none" : ""
      )}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
