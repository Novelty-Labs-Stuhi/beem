export type SearchMode = "fast" | "research" | "scholar";

export interface SearchRequest {
  query: string;
  mode: SearchMode;
}

export interface FastResult {
  title: string;
  source: string;
  snippet: string;
  url: string;
}

export interface FastSearchResponse {
  answer: string;
  confidence: "high" | "medium";
  evidence: FastResult[];
}

export interface ScholarPaper {
  id: string;
  title: string;
  authors: readonly string[];
  year: number;
  source: string;
  citations: number;
  url: string;
  abstract: string;
  highlightSentences: readonly string[];
  tags: readonly string[];
}

export interface ScholarSearchResponse {
  summary: string;
  papers: ScholarPaper[];
  selectedPaperId: string;
}

export interface SearchResponse {
  mode: SearchMode;
  fast?: FastSearchResponse;
  scholar?: ScholarSearchResponse;
}

export interface ScholarProvider {
  searchScholar(query: string): Promise<ScholarSearchResponse>;
}
