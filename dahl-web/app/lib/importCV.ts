export interface contacts {
    organization: string;
    department: string;
    address: string;
    phone: string;
    email: string;
  }
  
export interface education {
    degree: string;
    field: string;
    startYear: string;
    endYear: string;
    university: string;
    location: string;
  }
  
export interface experiences {
    title: string;
    startYear: string;
    endYear: string;
    organization: string;
    location: string;
  }
  
export interface publications {
    authors: string;
    year: string;
    title: string;
    journal: string;
    isbn: string;
    doi: string;
    link: string;
  }
  
export interface courses {
    organization: string;
    code: string;
    title: string;
    description: string;
    resources: string;
  }
  
export interface CV {
    name: string;
    title: string;
    contacts: contacts;
    education: {
      postDoc?: education;
      PhD?: education;
      Masters?: education;
      Bachelors?: education;
    };
    experiences: experiences[];
    publications: publications[];
    courses: courses[];
  }

import cvFile from "../public/Dahl-CV.json";

const cv: CV = cvFile as CV;

export default cv;  