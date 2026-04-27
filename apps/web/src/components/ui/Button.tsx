import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "secondaryOnDeep" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  wide?: boolean;
}

export function Button({ variant = "primary", wide, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "beem-button",
        {
          "beem-button-primary": variant === "primary",
          "beem-button-secondary": variant === "secondary",
          "beem-button-secondary-deep": variant === "secondaryOnDeep",
          "beem-button-ghost": variant === "ghost",
          "beem-button-wide": wide
        },
        className
      )}
      {...props}
    />
  );
}
