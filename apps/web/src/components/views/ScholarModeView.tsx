import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ScholarSearchResponse } from "@/lib/search/types";
import clsx from "clsx";

interface ScholarModeViewProps {
  data?: ScholarSearchResponse;
  selectedPaperId?: string;
  onSelectPaper: (paperId: string) => void;
}

export function ScholarModeView({ data, selectedPaperId, onSelectPaper }: ScholarModeViewProps) {
  if (!data) {
    return null;
  }

  const selectedPaper =
    data.papers.find((paper) => paper.id === selectedPaperId) ?? data.papers[0];

  return (
    <section className="scholar-layout">
      <div className="scholar-results-list">
        <Card surface="frost" className="scholar-summary-card">
          <div className="summary-title-row">
            <p className="panel-label">Scholar workflow</p>
            <Chip tone="insight">SerpAPI-ready layer</Chip>
          </div>
          <p className="research-summary-copy">{data.summary}</p>
        </Card>

        {data.papers.map((paper) => {
          const active = selectedPaper.id === paper.id;
          return (
            <button
              key={paper.id}
              type="button"
              className={clsx("paper-card", {
                "paper-card-active": active
              })}
              onClick={() => onSelectPaper(paper.id)}
            >
              <div className="paper-card-top">
                <p className="paper-title">{paper.title}</p>
                <Chip tone={active ? "active" : "neutral"}>{paper.citations} cites</Chip>
              </div>
              <p className="paper-authors">{paper.authors.join(", ")}</p>
              <p className="result-snippet">{paper.abstract}</p>
              <div className="paper-meta-row">
                <span>{paper.source}</span>
                <span>{paper.year}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="scholar-side-panel-wrap">
        <Card surface="deep" className="scholar-preview-panel">
          <p className="panel-label panel-label-deep">Abstract preview</p>
          <h3>{selectedPaper.title}</h3>
          <p className="deep-meta">{selectedPaper.authors.join(", ")}</p>
          <p className="deep-meta">
            {selectedPaper.source} • {selectedPaper.year} • {selectedPaper.citations} citations
          </p>
          <p className="abstract-copy">{selectedPaper.abstract}</p>
          <div className="meta-chip-row">
            {selectedPaper.tags.map((tag) => (
              <Chip key={tag} tone="deep">
                {tag}
              </Chip>
            ))}
          </div>
          <a href={selectedPaper.url} target="_blank" rel="noreferrer" className="deep-link">
            Open source paper
          </a>
        </Card>

        <Card surface="frost" className="abstract-highlight-panel">
          <div className="summary-title-row">
            <p className="panel-label">AI highlight panel</p>
            <Chip tone="insight">Relevance lines</Chip>
          </div>
          {selectedPaper.highlightSentences.map((line) => (
            <p key={line} className="gold-highlight-line">
              {line}
            </p>
          ))}
        </Card>
      </div>
    </section>
  );
}
