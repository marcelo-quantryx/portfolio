import React from 'react';
import { ExperienceItem } from './experience/ExperienceItem';
import type { Experience } from '../types/experience';

export function Experience() {
  const experiences: Experience[] = [
    {
      company: "Xiatech Consulting Ltd",
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
      position: "Business Intelligence Developer",
      period: "March 2022 - December 2022",
      location: "Manchester, UK",
      description: "Built and maintained e-commerce platform using React and Node.js. Improved application performance and user experience.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS"]
    },
    {
      company: "Quantryx Ltd",
      position: "Freelancer Data Engineer",
      period: "June 2021 - February 2022",
      location: "Remote",
      description: "Developed custom web applications and solutions for various clients using modern technologies.",
      technologies: ["Python", "Flask", "REST", "SQLAlchemy", "BigQuery", "Dashboards"]
    },
    {
      company: "SMBC",
      position: "Software Engineer",
      period: "August 2020 - May 2021",
      location: "São Paulo, Brazil",
      description: "Worked on financial systems and banking applications. Focused on secure and scalable solutions.",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular", "Jenkins", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}