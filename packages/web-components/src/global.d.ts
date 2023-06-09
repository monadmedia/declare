export interface Link {
  text: string;
  href: string;
}

export interface Faq {
  key?: string;
  title: string;
  content: string;
  tags: string[];
}