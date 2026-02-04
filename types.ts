export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface CaseStudyDetail extends CaseStudy {
  client: string;
  year: string;
  role: string;
  tools: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  contentImages: string[];
}