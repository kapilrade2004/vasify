export interface ExtractedField {
  label: string;
  value: string;
}

export interface ExtractedTable {
  tableName: string;
  headers: string[];
  rows: string[][];
}

export interface ExtractedPage {
  pageNumber: number;
  fields: ExtractedField[];
  tables: ExtractedTable[];
}

export interface ExtractionResult {
  pages: ExtractedPage[];
}
