// lib/certificationsData.ts
export type Certification = {
  title: string;
  institution: string;
  date: string;
  description: string;
  pdfUrl: string;
};

export const certificationsData: Certification[] = [
  {
    title: "Certified Data Science Professional",
    institution: "American Academy of Project Management, USA (FAAPM)",
    date: "Date of Certification",
    description: "This certification was awarded by the American Academy of Project Management, recognizing expertise in Data Science.",
    pdfUrl: "pdf/datascience.pdf",
  },
  {
    title: "Machine Learning",
    institution: "Stanford University, Coursera",
    date: "Nov 2021",
    description: "Completed the Machine Learning course offered by Stanford University on Coursera.",
    pdfUrl: "pdf/Coursera Certificates-1.pdf",
  },
  {
    title: "Cyber Security to Everyone",
    institution: "University of Maryland, Coursera",
    date: "Nov 2021",
    description: "Completed the Cyber Security to Everyone course offered by the University of Maryland on Coursera.",
    pdfUrl: "pdf/Coursera Certificates-2.pdf",
  },
];
