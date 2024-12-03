import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            I am a Senior Data Engineer with extensive experience in building scalable data solutions and ETL pipelines. Currently at Xiatech, I lead the development of cloud-native data architectures and mentor junior engineers in best practices.
          </p>
          <p className="mb-4">
            My expertise spans both data engineering and full-stack development, with a strong focus on cloud technologies and modern development practices. I have a proven track record of delivering high-performance solutions for e-commerce platforms and financial institutions.
          </p>
          <p>
            I am passionate about creating efficient, maintainable systems and sharing knowledge with team members. My approach combines technical expertise with practical problem-solving to deliver robust solutions that drive business value.
          </p>
        </div>
      </div>
    </section>
  );
}