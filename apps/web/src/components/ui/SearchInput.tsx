import { FormEvent } from "react";

interface SearchInputProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  busy: boolean;
}

export function SearchInput({ query, onQueryChange, onSubmit, busy }: SearchInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="search-hero-input" onSubmit={handleSubmit}>
      <div className="search-prefix" aria-hidden>
        Beam
      </div>
      <input
        className="search-input-control"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Ask anything. Be specific for richer signals..."
        aria-label="Search query"
      />
      <button className="search-submit" type="submit" disabled={busy}>
        {busy ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
