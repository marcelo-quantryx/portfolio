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
import { initGTM } from './utils/gtm';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Initialize Google Tag Manager
    initGTM();

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

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