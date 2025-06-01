export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    github: string;
  };
  about: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    dates: string;
    details: string[];
  }[];
  education: {
    degree: string;
    school: string;
    dates: string;
  }[];
}
