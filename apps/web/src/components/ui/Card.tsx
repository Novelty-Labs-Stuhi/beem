import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  surface?: "soft" | "frost" | "deep";
  className?: string;
}

export function Card({ children, surface = "soft", className }: CardProps) {
  return (
    <article
      className={clsx(
        "beem-card",
        {
          "beem-card-soft": surface === "soft",
          "beem-card-frost": surface === "frost",
          "beem-card-deep": surface === "deep"
        },
        className
      )}
    >
      {children}
    </article>
  );
}
