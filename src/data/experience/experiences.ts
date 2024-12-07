import { companies } from './companies';
import { freelanceProjects } from './freelance-projects';
import type { Experience } from '../../types/experience';

export const experiences: Experience[] = [
  {
    ...companies.xiatech,
    position: "Data Engineer",
    period: "February 2022 - September 2024",
    description: "Led the design and implementation of cloud-native data solutions, ensuring efficient, scalable, and secure data pipelines. Mentored junior engineers and drove best practices for data engineering.",
    technologies: ["Python", "Google Cloud", "Terraform", "Apache Airflow", "PySpark", "BigQuery", "Dataform", "Docker"],
    detailedDescription: "Designed and maintained datasets in Google Cloud BigQuery while leveraging Terraform for infrastructure as code. Developed robust ETL pipelines, real-time streaming solutions using Google Pub/Sub, and data orchestration frameworks with Apache Airflow. Delivered optimized large-scale data processing systems utilizing PySpark and advanced Python scripting.",
    achievements: [
      "Engineered a serverless ETL system using Google Cloud Functions and Python to process data from the EVA POS REST API in real time, enabling instant analytics in BigQuery.",
      "Integrated 20 billion JSON data rows (~8TB) into BigQuery using PySpark, ensuring efficient processing and data integrity.",
      "Implemented Dataform to streamline dataset workflows in BigQuery, enhancing data management and analytics capabilities.",
      "Built a real-time data streaming architecture with Google Pub/Sub, improving responsiveness for critical business operations."
    ]
  },
  {
    ...companies.isawItFirst,
    position: "Business Intelligence Developer",
    period: "September 2021 - February 2022",
    description: "Enhanced data pipelines and reporting systems for e-commerce operations, delivering scalable and secure data integration solutions.",
    technologies: ["Python", "MSSQL", "AWS Lambda", "Flask", "GraphQL", "Shopify", "NetSuite"],
    detailedDescription: "Developed and optimized ETL pipelines and data models using Python, SQLAlchemy, and AWS Lambda. Improved database performance for MS SQL Server and designed full-stack web applications to support business intelligence initiatives.",
    achievements: [
      "Developed ETL workflows that increased data processing efficiency, leveraging Python and AWS Lambda.",
      "Integrated Shopify and NetSuite systems using REST and GraphQL APIs, streamlining data exchange for business processes.",
      "Enhanced reporting and database performance using T-SQL, SSIS, and SSRS.",
      "Created user-friendly web applications with Flask and JavaScript, supporting operational insights and decision-making."
    ]
  },
  {
    ...companies.freelance,
    position: "Freelancer Data Engineer",
    period: "December 2019 - September 2021",
    description: "Delivered tailored data solutions for various clients, specializing in data analysis, visualization, database management, and process automation.",
    technologies: ["Python", "Flask", "PostgreSQL", "Snowflake", "MySQL", "AWS Lambda", "Klipfolio", "Power BI", "Heroku", "NGINX", "Ubuntu", "REST APIs", "GraphQL", "Selenium", "BeautifulSoup4", "Pandas", "PyTesseract"],
    detailedDescription: "Provided end-to-end data solutions, including building dashboards, developing ETL pipelines, and implementing web scraping frameworks. Focused on leveraging Python and cloud-native tools to deliver scalable, efficient, and maintainable systems.",
    achievements: [
      "Developed Python scripts for OCR automation with PyTesseract, transforming text into structured formats using Pandas.",
      "Built Klipfolio and Power BI dashboards connected to dynamic data sources, including REST/GraphQL APIs, social media, and CRMs.",
      "Designed and deployed micro ETL frameworks using AWS Lambda and Python to integrate and transform data from APIs.",
      "Automated data extraction workflows using Selenium and BeautifulSoup4 for web scraping and reverse engineering."
    ],
    projects: freelanceProjects
  },
  {
    ...companies.itau,
    position: "Middle Office Data Analyst",
    period: "March 2015 - May 2018",
    description: "Led process optimization initiatives and data analysis for the middle office, focusing on automation, risk management, and operational efficiency.",
    technologies: ["VBA", "MS Access", "SQL", "C#", "MiniTab", "Excel"],
    detailedDescription: "Implemented comprehensive data analysis and process automation solutions for the middle office, focusing on risk management and operational efficiency. Developed automated reporting systems and conducted statistical analysis to optimize team capacity and resource allocation.",
    achievements: [
      "Devised a leaner and more scalable strategy for the area, with a focus on being proactive, business focused and risk aware through automation.",
      "Documented robust processes around new product issuances and retail launches, improving operational efficiency.",
      "Improved MIS reporting quality with user-friendly and intuitive reports for Senior Management and Sales.",
      "Constructed and maintained KPIs covering SLA, productivity, volume, cost, time, and quality metrics.",
      "Conducted statistical analysis using MiniTab to optimize capacity planning and headcount allocation."
    ]
  },
  {
    ...companies.smbcUk,
    position: "Data Governance Analyst",
    period: "June 2019 - November 2019",
    description: "Established Data Governance capabilities for EMEA, focusing on information asset management and GDPR compliance.",
    technologies: ["MS Access", "Excel VBA", "SQL", "Data Governance", "GDPR"],
    detailedDescription: "Led the design and implementation of the Information Asset Register from conception to delivery, including data warehouse architecture and application interface development. Implemented robust data management practices aligned with GDPR requirements.",
    achievements: [
      "Established Data Governance framework for EMEA region, including Information Asset Register development.",
      "Designed and implemented data warehouse architecture and user interface for data governance tools.",
      "Created standardized framework for personal data storage using MS Access and Excel VBA.",
      "Developed GDPR-compliant data interrogation tools aligned with internal procedures."
    ]
  }
];