import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FastSearchResponse } from "@/lib/search/types";

interface FastModeViewProps {
  data?: FastSearchResponse;
}

export function FastModeView({ data }: FastModeViewProps) {
  if (!data) {
    return null;
  }

  return (
    <section className="fast-layout">
      <Card surface="frost" className="answer-card-primary">
        <div className="answer-head">
          <Chip tone="active">Direct Answer</Chip>
          <Chip>{data.confidence} confidence</Chip>
        </div>
        <p className="answer-copy">{data.answer}</p>
      </Card>

      <div className="fast-evidence-list">
        {data.evidence.map((item) => (
          <Card key={item.url} className="fast-evidence-item">
            <a href={item.url} target="_blank" rel="noreferrer" className="result-title-link">
              {item.title}
            </a>
            <p className="result-snippet">{item.snippet}</p>
            <p className="result-meta">{item.source}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
