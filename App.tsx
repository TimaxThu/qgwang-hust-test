
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { PROFILE, NEWS, PUBLICATIONS, EDUCATIONS, AWARDS } from './data';

const App: React.FC = () => {
  const [showFullList, setShowFullList] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  const displayedPublications = showFullList 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.selected);

  const navItems = [
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'News', href: '#news', id: 'news' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Awards', href: '#awards', id: 'awards' },
    { name: 'Education', href: '#education', id: 'education' },
  ];

  // Scroll tracking logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px', 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const publicationActions = (
    <div className="flex items-center space-x-1">
      <button 
        onClick={() => setShowFullList(false)}
        className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all ${!showFullList ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        Selected
      </button>
      <button 
        onClick={() => setShowFullList(true)}
        className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all ${showFullList ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        Full List
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc] selection:bg-indigo-100">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  activeSection === item.id 
                  ? 'text-indigo-600 scale-105' 
                  : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
             <a 
              href={PROFILE.chineseUrl} 
              className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-slate-600"
            >
              Home Page (Chinese)
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1">
            {/* About Me */}
            <Section id="about" title="About Me">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg">
                <p>{PROFILE.bio}</p>
              </div>
            </Section>

            {/* News Section */}
            <Section id="news" title="Recent News">
              <div className="space-y-6">
                {NEWS.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="text-sm font-bold text-slate-400 w-24 flex-shrink-0 pt-0.5 group-hover:text-indigo-500 transition-colors">
                      {item.date}
                    </span>
                    <p className="text-slate-700 font-medium">{item.content}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Publications Section */}
            <Section id="publications" title="Publications" actions={publicationActions}>
              <p className="mb-6 text-[11px] text-slate-400 italic">
                <span className="font-extrabold text-slate-600">*</span> Corresponding author
              </p>

              <div className="space-y-6">
                {displayedPublications.map((pub, idx) => (
                  <div key={idx} className="group relative">
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                        {pub.title}
                      </h3>
                    </a>
                    
                    <p className="mt-1 text-slate-600 text-sm font-medium">
                      {pub.authors.split(', ').map((author, i) => {
                        const isCorresponding = author.trim().endsWith('*');
                        const cleanName = isCorresponding ? author.trim().slice(0, -1) : author.trim();
                        const isSelf = cleanName === PROFILE.name;
                        
                        return (
                          <span key={i}>
                            <span className={`${isSelf ? 'text-slate-900 border-b-2 border-indigo-200 font-semibold' : ''}`}>
                              {cleanName}{isCorresponding && <sup className="text-indigo-500 ml-0.5 font-bold" title="Corresponding Author">*</sup>}
                            </span>
                            {i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                          </span>
                        );
                      })}
                    </p>
                    
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-[13px] font-bold italic text-slate-700">{pub.venue} {pub.year}</span>
                      {pub.tags?.map((tag, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-widest font-bold bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Awards Section */}
            <Section id="awards" title="Selected Awards">
              <div className="space-y-5">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="text-sm font-bold text-slate-400 w-24 flex-shrink-0 pt-0.5">
                      {award.date}
                    </span>
                    <div>
                      <p className="text-slate-800 font-bold">{award.title}</p>
                      {award.institution && <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{award.institution}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education Section */}
            <Section id="education" title="Education">
              <div className="space-y-6">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                      <p className="text-slate-600 font-medium">{edu.degree}</p>
                      {edu.description && <p className="text-sm text-slate-500 mt-1 italic">{edu.description}</p>}
                    </div>
                    <span className="text-sm font-bold text-slate-400 whitespace-nowrap">{edu.period}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="mt-24 pt-12 border-t border-slate-100 text-slate-400 text-[10px] uppercase tracking-widest flex justify-between items-center font-bold">
              <p>© {new Date().getFullYear()} {PROFILE.name}</p>
              <p>Academic Portfolio</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
