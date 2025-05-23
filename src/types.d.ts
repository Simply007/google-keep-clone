export type Note = {
  guid: string;
  title: string; // max 200 chars
  content: string;
  created: number; // timestamp
  modified: number; // timestamp
} 