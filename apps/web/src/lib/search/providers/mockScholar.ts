import { ScholarProvider, ScholarSearchResponse } from "@/lib/search/types";

const PAPER_DATA = [
  {
    id: "p1",
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: ["Patrick Lewis", "Ethan Perez", "Aleksandra Piktus"],
    year: 2020,
    source: "NeurIPS",
    citations: 3854,
    url: "https://arxiv.org/abs/2005.11401",
    abstract:
      "We propose Retrieval-Augmented Generation, a framework that combines parametric and non-parametric memory for language generation. RAG models produce more factual outputs on open-domain QA and can attribute outputs to retrieved passages. The approach improves specificity and updateability compared with purely parametric generators.",
    highlightSentences: [
      "RAG models produce more factual outputs on open-domain QA.",
      "The approach improves specificity and updateability compared with purely parametric generators."
    ],
    tags: ["RAG", "open-domain QA", "factuality"]
  },
  {
    id: "p2",
    title: "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
    authors: ["Xuezhi Wang", "Jason Wei", "Dale Schuurmans"],
    year: 2022,
    source: "ICLR",
    citations: 2028,
    url: "https://arxiv.org/abs/2203.11171",
    abstract:
      "Instead of greedy decoding, we sample multiple diverse reasoning paths and select the most consistent answer. Self-consistency yields large gains on arithmetic and commonsense benchmarks. The method is simple and broadly applicable across model scales.",
    highlightSentences: [
      "Self-consistency yields large gains on arithmetic and commonsense benchmarks.",
      "The method is simple and broadly applicable across model scales."
    ],
    tags: ["reasoning", "chain-of-thought", "decoding"]
  },
  {
    id: "p3",
    title: "Toolformer: Language Models Can Teach Themselves to Use Tools",
    authors: ["Timo Schick", "Jane Dwivedi-Yu", "Roberta Raileanu"],
    year: 2023,
    source: "NeurIPS",
    citations: 1297,
    url: "https://arxiv.org/abs/2302.04761",
    abstract:
      "Toolformer trains language models to decide when and how to call external APIs. The model learns to integrate calculator, search, and translation outputs into its generations. Results indicate improved downstream performance while preserving fluency.",
    highlightSentences: [
      "Toolformer trains language models to decide when and how to call external APIs.",
      "Results indicate improved downstream performance while preserving fluency."
    ],
    tags: ["tool use", "API", "augmentation"]
  },
  {
    id: "p4",
    title: "Lost in the Middle: How Language Models Use Long Contexts",
    authors: ["Nelson F. Liu", "Kevin Lin", "John Hewitt"],
    year: 2024,
    source: "TACL",
    citations: 644,
    url: "https://arxiv.org/abs/2307.03172",
    abstract:
      "We study how model performance varies with the location of relevant information in long context windows. Models perform best when evidence is placed near the beginning or end of context. Performance declines when relevant documents are in the middle.",
    highlightSentences: [
      "Models perform best when evidence is placed near the beginning or end of context.",
      "Performance declines when relevant documents are in the middle."
    ],
    tags: ["long context", "evaluation", "retrieval"]
  }
] as const;

function scorePaper(query: string, content: string): number {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (terms.length === 0) {
    return 0;
  }

  const text = content.toLowerCase();
  return terms.reduce((score, term) => {
    if (text.includes(term)) {
      return score + 1;
    }
    return score;
  }, 0);
}

export class MockScholarProvider implements ScholarProvider {
  async searchScholar(query: string): Promise<ScholarSearchResponse> {
    const ranked = [...PAPER_DATA]
      .map((paper) => ({
        paper,
        score: scorePaper(query, `${paper.title} ${paper.abstract} ${paper.tags.join(" ")}`)
      }))
      .sort((a, b) => b.score - a.score || b.paper.citations - a.paper.citations)
      .slice(0, 3)
      .map((item) => item.paper);

    const papers = ranked.length > 0 ? ranked : PAPER_DATA.slice(0, 3);

    return {
      summary: `Focused scholar scan for \"${query}\" surfaced ${papers.length} high-signal papers with strong citation support.`,
      papers,
      selectedPaperId: papers[0].id
    };
  }
}
