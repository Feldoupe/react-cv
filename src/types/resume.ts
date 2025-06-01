export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    phone: string;
    location: string;
    birthdate: string;
  };
  about: string;
  skills: string[];
  languages: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  activities: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  details: string[];
}
