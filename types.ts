
export interface NewsItem {
  date: string;
  content: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  tags?: string[];
  url?: string;
  selected?: boolean;
}

export interface Award {
  date: string;
  title: string;
  institution?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  institution: string;
  email: string;
  bio: string;
  interests: string[];
  googleScholar?: string;
  github?: string;
  dblp?: string;
  twitter?: string;
  chineseUrl?: string;
}
