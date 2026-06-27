export type Project = {
  title: string;
  category: string;
  impact: string;
  summary: string;
  technologies: string[];
  link?: string;
};

export type Achievement = {
  title: string;
  organization: string;
  year: string;
  detail: string;
};

export type Certification = {
  name: string;
  issuer: string;
  status: string;
};

export type PortfolioData = {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  expertise: string[];
  metrics: Array<{ label: string; value: string }>;
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
};
