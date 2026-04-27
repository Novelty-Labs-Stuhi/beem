import { SearchMode } from "@/lib/search/types";
import { ModeSwitch } from "@/components/ui/ModeSwitch";
import { SearchInput } from "@/components/ui/SearchInput";
import { Chip } from "@/components/ui/Chip";

interface SearchHeroProps {
  mode: SearchMode;
  query: string;
  busy: boolean;
  onModeChange: (mode: SearchMode) => void;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
}

export function SearchHero({
  mode,
  query,
  busy,
  onModeChange,
  onQueryChange,
  onSearch
}: SearchHeroProps) {
  return (
    <section className="search-hero">
      <div className="search-hero-title-wrap">
        <p className="eyebrow">Guided Discovery</p>
        <h1>Follow the strongest beams of evidence.</h1>
        <p className="search-subtitle">
          Beem helps you move from a broad question to clear understanding with mode-aware search flows.
        </p>
      </div>

      <ModeSwitch mode={mode} onChange={onModeChange} />
      <SearchInput query={query} onQueryChange={onQueryChange} onSubmit={onSearch} busy={busy} />

      <div className="hero-chip-row">
        <Chip tone="active">{mode.toUpperCase()} MODE</Chip>
        <Chip>Source-ranked</Chip>
        <Chip>Evidence-first</Chip>
        <Chip tone="insight">AI Insight Layer</Chip>
      </div>
    </section>
  );
}
