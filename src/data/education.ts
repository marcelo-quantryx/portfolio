import type { Education, Language } from '../types/education';

export const education: Education = {
  institution: "University Centre of FEI",
  website: "https://portal.fei.edu.br/",
  location: "São Bernardo do Campo, Brazil",
  degree: "Bachelor of Science Production Engineering",
  period: "February 2009 - June 2015",
  description: "Degree focused on lean manufacturing, industrial planning, programming, automation process, statistical analysis, finance and costs."
};

export const languages: Language[] = [
  { name: "English", level: "C2" },
  { name: "Portuguese", level: "C2" },
  { name: "Spanish", level: "B2" }
];