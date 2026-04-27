import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ScholarSearchResponse } from "@/lib/search/types";

interface ResearchModeViewProps {
  data?: ScholarSearchResponse;
}

export function ResearchModeView({ data }: ResearchModeViewProps) {
  if (!data) {
    return null;
  }

  const lead = data.papers[0];

  return (
    <section className="research-layout">
      <div className="research-results-column">
        <Card surface="frost" className="research-summary-card">
          <p className="panel-label">Research synthesis</p>
          <p className="research-summary-copy">{data.summary}</p>
        </Card>

        {data.papers.map((paper) => (
          <Card key={paper.id} className="result-card">
            <p className="result-title">{paper.title}</p>
            <p className="result-snippet">{paper.abstract}</p>
            <div className="result-meta-row">
              <span>{paper.source}</span>
              <span>{paper.year}</span>
              <span>{paper.citations} citations</span>
            </div>
          </Card>
        ))}
      </div>

      <Card surface="deep" className="research-preview-panel">
        <p className="panel-label panel-label-deep">Preview</p>
        <h3>{lead.title}</h3>
        <p>{lead.highlightSentences[0]}</p>
        <div className="highlight-stack">
          {lead.highlightSentences.map((line) => (
            <p key={line} className="highlight-line">
              {line}
            </p>
          ))}
        </div>
        <div className="meta-chip-row">
          <Chip tone="deep">{lead.source}</Chip>
          <Chip tone="deep">{lead.year}</Chip>
          <Chip tone="deep">{lead.citations} citations</Chip>
        </div>
      </Card>
    </section>
  );
}
