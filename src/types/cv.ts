export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
}

export interface LogoItem {
  type: 'icon' | 'image';
  content: string;
  alt?: string;
  link?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  logos?: LogoItem[];
  more?: string;
}

export interface Project {
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

export interface Skill {
  name: string;
  link: string;
  icone: string;
  rate: number;
}
export interface Education {
  period: string;
  school: string;
  description: string;
  logos?: LogoItem[];
  more?: string;
}

export interface Hobby {
  name: string;
  description?: string;
  logo: LogoItem;
}
