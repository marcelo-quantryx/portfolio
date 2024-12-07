import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Blog } from './components/Blog';
import { BlogPostView } from './components/blog/BlogPostView';
import { Projects } from './components/Projects';
import { Referrals } from './components/Referrals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEO } from './components/common/SEO';
import { initGA4, pageview } from './utils/analytics';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Initialize Google Analytics
    initGA4();

    const handleLocationChange = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
      pageview(newPath); // Track page views
    };

    // Track initial page view
    pageview(currentPath);

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [currentPath]);

  const renderContent = () => {
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.split('/blog/')[1];
      return <BlogPostView slug={slug} />;
    }

    return (
      <>
        <Hero />
        <Experience />
        <Education />
        <Blog />
        <Projects />
        <Referrals />
        <Contact />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;