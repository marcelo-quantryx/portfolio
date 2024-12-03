import type { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    company: "Xiatech Consulting Ltd",
    website: "https://www.xiatech.io/",
    position: "Senior Data Engineer",
    period: "January 2023 - September 2024",
    location: "London, UK",
    description: "Leading development of data pipelines and ETL processes. Implementing cloud-native data solutions and mentoring junior engineers in best practices.",
    technologies: ["Python", "AWS", "Apache Airflow", "Snowflake", "dbt", "Docker"],
    detailedDescription: "Responsible for the maintenance and development of new datasets in Google Cloud BigQuery Data Warehouse, leveraging Terraform for infrastructure management. Additionally, I designed robust data pipelines, ensuring efficient data flow and storage. Proficient in managing and scaling datasets within Google Cloud BigQuery. Expert in designing and implementing data pipelines. Advanced skills in Python, with practical applications in data handling and process automation. Experienced in using Apache Airflow for data orchestration, Google PubSub for real-time data streaming, and PySpark for data processing and integration.",
    achievements: [
      "Real-Time ETL Development: Engineered a serverless ETL process to extract data from the EVA POS REST API using Google Cloud Functions and Python. This process feeds data directly into BigQuery, providing the business with access to real-time analytics.",
      "Data Integration Using PySpark: Utilised PySpark to integrate JSON data efficiently into BigQuery, handling a massive volume of approximately 20 billion rows (8TB), ensuring speed and data integrity during the data processing stage.",
      "Data Orchestration: Implemented Dataform to streamline the movement and management of data across various datasets in BigQuery, enhancing the overall workflow and data utilisation.",
      "Real-Time Data Streaming: Set up and managed Google PubSub for real-time data streaming, enabling immediate data availability and responsiveness for critical business operations."
    ]
  },
  {
    company: "I Saw It First",
    website: "https://www.isawitfirst.com/",
    position: "Business Intelligence Developer",
    period: "March 2022 - December 2022",
    location: "Manchester, UK",
    description: "Built and maintained e-commerce platform using React and Node.js. Improved application performance and user experience.",
    technologies: ["OOP", "ETL", "MSSQL", "Oracle NetSuite", "Python", "Flask", "AWS Lambda", "Shopify", "GraphQL"],
    detailedDescription: "As a Business Intelligence Developer at I Saw It First, I played a crucial role in developing and maintaining data pipelines and integrations between various e-commerce systems. My work focused on ensuring data accuracy, security, and reliability across the platform while implementing efficient ETL processes and maintaining database performance.",
    achievements: [
      "Aid in the scalability, security and repeatability of data pipelines through implementation of best practices and automated testing.",
      "Development of Data Models and ETL processes using Python, SQLAlchemy and AWS Lambda, improving data processing efficiency.",
      "Provided maintenance and optimization for MS SQL Server using T-SQL, SSIS and SSRS, ensuring optimal database performance.",
      "Full-stack development of web applications using Python Flask, Bootstrap and JavaScript, delivering intuitive user interfaces.",
      "Successfully integrated e-commerce tools Shopify and NetSuite using REST and GraphQL APIs, streamlining business operations."
    ]
  },
  {
    company: "Quantryx Ltd",
    website: "https://www.upwork.com/freelancers/marceloribeiro10",
    position: "Freelancer Data Engineer",
    period: "June 2021 - February 2022",
    location: "Remote",
    description: "Developed custom web applications and solutions for various clients using modern technologies.",
    technologies: ["Python", "Flask", "REST", "SQLAlchemy", "BigQuery", "Dashboards"]
  },
  {
    company: "SMBC",
    website: "https://www.smbcgroup.com/",
    position: "Software Engineer",
    period: "August 2020 - May 2021",
    location: "São Paulo, Brazil",
    description: "Worked on financial systems and banking applications. Focused on secure and scalable solutions.",
    technologies: ["Java", "Spring Boot", "Oracle", "Angular", "Jenkins", "Docker"]
  }
];