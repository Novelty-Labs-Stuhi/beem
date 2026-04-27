"use client";

import { SearchHero } from "@/components/search/SearchHero";
import { Button } from "@/components/ui/Button";
import { FastModeView } from "@/components/views/FastModeView";
import { ResearchModeView } from "@/components/views/ResearchModeView";
import { ScholarModeView } from "@/components/views/ScholarModeView";
import { runSearch } from "@/lib/search/searchService";
import { SearchMode, SearchResponse } from "@/lib/search/types";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_QUERY = "retrieval augmented generation factuality";

export function BeemApp() {
  const [mode, setMode] = useState<SearchMode>("scholar");
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [selectedPaperId, setSelectedPaperId] = useState<string | undefined>(undefined);
  const [busy, setBusy] = useState<boolean>(false);

  const executeSearch = useCallback(async () => {
    const nextQuery = query.trim() || "reliable language-model retrieval evaluation";
    setBusy(true);

    try {
      const result = await runSearch({ query: nextQuery, mode });
      setResponse(result);
      setSelectedPaperId(result.scholar?.selectedPaperId);
    } finally {
      setBusy(false);
    }
  }, [mode, query]);

  useEffect(() => {
    void executeSearch();
  }, [mode, executeSearch]);

  return (
    <div className="beem-app">
      <header className="top-nav">
        <div className="shell-row">
          <div className="brand-mark-wrap">
            <span className="brand-mark" aria-hidden>
              B
            </span>
            <div>
              <p className="brand-name">Beem</p>
              <p className="brand-sub">guided search + research</p>
            </div>
          </div>

          <nav className="top-nav-links" aria-label="Primary">
            <button type="button" className="top-nav-link top-nav-link-active">
              Discover
            </button>
            <button type="button" className="top-nav-link">
              Workspace
            </button>
            <button type="button" className="top-nav-link">
              Sources
            </button>
          </nav>

          <Button variant="secondary">Command K</Button>
        </div>
      </header>

      <main className="app-shell">
        <SearchHero
          mode={mode}
          query={query}
          busy={busy}
          onModeChange={setMode}
          onQueryChange={setQuery}
          onSearch={executeSearch}
        />

        {mode === "fast" && <FastModeView data={response?.fast} />}
        {mode === "research" && <ResearchModeView data={response?.scholar} />}
        {mode === "scholar" && (
          <ScholarModeView
            data={response?.scholar}
            selectedPaperId={selectedPaperId}
            onSelectPaper={setSelectedPaperId}
          />
        )}
      </main>
    </div>
  );
}
