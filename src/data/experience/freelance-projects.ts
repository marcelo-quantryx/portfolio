import type { FreelanceProject } from '../../types/experience';

export const freelanceProjects: FreelanceProject[] = [
  {
    company: "Liberty Music PR",
    website: "https://www.libertymusicpr.com",
    description: "Developed a web scraping framework using Python and Flask to extract data from social media and other websites. Built a PostgreSQL database to store scraped data and deployed the solution, including a REST API, on Heroku.",
    technologies: ["Python", "Flask", "PostgreSQL", "Heroku"],
    period: "March 2020 - September 2021"
  },
  {
    company: "Bytemine",
    website: "https://www.bytemine.io",
    description: "Developed a REST API backend using Python Flask and MySQL, deployed on an Ubuntu server with NGINX.",
    technologies: ["Python", "Flask", "MySQL", "NGINX", "Ubuntu"],
    period: "March 2020 - July 2021"
  },
  {
    company: "carwow",
    website: "https://www.carwow.co.uk",
    description: "Created a Klipfolio dashboard to monitor car dealership sales and customer feedback. Extracted data from REST APIs and HubSpot, processed it in Snowflake using SnowSQL, and integrated it into Klipfolio.",
    technologies: ["Klipfolio", "Snowflake", "SnowSQL", "REST APIs"],
    period: "January 2020 - February 2020"
  }
];