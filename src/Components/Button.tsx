import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  variant?: "blue" | "white" | "dark" | "primary";
  fullWidth?: boolean;
  radius?: "lg" | "xl" | "2xl" | "sm" | "md" | "none";
  isLoading?: boolean;
  loadingLabel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  label,
  onClick,
  fullWidth,
  radius,
  variant,
  isLoading,
  loadingLabel,
  className,
  type,
}: Props) => {
  let rounded = `rounded-${radius || "lg"}`;
  let color = `bg-${variant || "blue"} text-${
    variant && variant === "white" ? "black" : "white"
  }`;
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${color} p-2  px-4 ${rounded} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {isLoading ? (loadingLabel ? loadingLabel : "Loading...") : label}
    </button>
  );
};

export default Button;
