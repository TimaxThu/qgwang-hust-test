
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, actions }) => {
  return (
    <section id={id} className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 scroll-mt-24">
      <div className="flex flex-wrap items-baseline mb-8 gap-x-6">
        <h2 className="serif-heading text-2xl font-semibold text-slate-800 flex items-center">
          <span className="w-8 h-px bg-slate-300 mr-4"></span>
          {title}
        </h2>
        {actions && <div className="flex-shrink-0">{actions}</div>}
      </div>
      <div className="pl-0 lg:pl-12">
        {children}
      </div>
    </section>
  );
};

export default Section;
