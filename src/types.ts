export interface User {
  name: string;
  email: string;
  photo?: string;
  projects?: Project[];
}

export interface Project {
  name: string;
  id: string;
  type: string;
  description: string;
  detailedDescription: string;
  link?: string;
  linkRepo?: string;
  coverImage?: string;
  projectImages?: {
    desktop: string;
    tab: string;
    mobile: string;
  };
  year?: string;
  tools?: string[];
}
