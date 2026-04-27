import clsx from "clsx";
import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  tone?: "neutral" | "active" | "insight" | "deep";
}

export function Chip({ children, tone = "neutral" }: ChipProps) {
  return (
    <span
      className={clsx("beem-chip", {
        "beem-chip-active": tone === "active",
        "beem-chip-insight": tone === "insight",
        "beem-chip-deep": tone === "deep"
      })}
    >
      {children}
    </span>
  );
}
