export interface Company {
  name: string;
  website: string;
  location: string;
  additionalLinks?: {
    name: string;
    url: string;
  }[];
}

export interface FreelanceProject {
  company: string;
  website: string;
  description: string;
  technologies: string[];
  period: string;
}

export interface Experience extends Company {
  position: string;
  period: string;
  description: string;
  technologies: string[];
  detailedDescription?: string;
  achievements?: string[];
  projects?: FreelanceProject[];
}