import { MockScholarProvider } from "@/lib/search/providers/mockScholar";
import { FastSearchResponse, SearchRequest, SearchResponse } from "@/lib/search/types";

const scholarProvider = new MockScholarProvider();

const FAST_EVIDENCE = [
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    source: "NeurIPS 2020",
    snippet:
      "RAG combines retrieval with generation to improve factuality and source-grounded outputs.",
    url: "https://arxiv.org/abs/2005.11401"
  },
  {
    title: "Lost in the Middle: How Language Models Use Long Contexts",
    source: "TACL 2024",
    snippet:
      "Placement of evidence strongly affects long-context reasoning performance.",
    url: "https://arxiv.org/abs/2307.03172"
  }
] as const;

function buildFastAnswer(query: string): FastSearchResponse {
  return {
    answer:
      query.length > 0
        ? `For \"${query}\", the strongest practical path is retrieval-backed synthesis with explicit evidence ranking.`
        : "Start with a concrete question and Beem can surface a direct answer with ranked evidence.",
    confidence: "high",
    evidence: FAST_EVIDENCE.map((item) => ({ ...item }))
  };
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function runSearch(request: SearchRequest): Promise<SearchResponse> {
  await wait(250);

  if (request.mode === "fast") {
    return {
      mode: "fast",
      fast: buildFastAnswer(request.query)
    };
  }

  const scholar = await scholarProvider.searchScholar(request.query);

  return {
    mode: request.mode,
    scholar
  };
}
