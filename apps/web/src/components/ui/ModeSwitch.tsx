import { SearchMode } from "@/lib/search/types";
import clsx from "clsx";

interface ModeSwitchProps {
  mode: SearchMode;
  onChange: (mode: SearchMode) => void;
}

const MODES: Array<{ value: SearchMode; label: string }> = [
  { value: "fast", label: "Fast" },
  { value: "research", label: "Research" },
  { value: "scholar", label: "Scholar" }
];

export function ModeSwitch({ mode, onChange }: ModeSwitchProps) {
  return (
    <div className="mode-switch" role="tablist" aria-label="Search mode selector">
      {MODES.map((item) => (
        <button
          key={item.value}
          className={clsx("mode-switch-item", {
            "mode-switch-item-active": item.value === mode
          })}
          type="button"
          onClick={() => onChange(item.value)}
          role="tab"
          aria-selected={item.value === mode}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
