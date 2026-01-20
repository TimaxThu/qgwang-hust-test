
import React from 'react';
import { PROFILE } from '../data';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
      <div className="flex flex-col items-center lg:items-start space-y-6">
        {/* Profile Image - Adjusted for portrait orientation (3:4 aspect ratio) */}
        <div className="w-48 h-64 lg:w-64 lg:h-80 rounded-xl bg-gray-100 overflow-hidden shadow-md border border-slate-200">
          <img 
            src="https://qgwang-hust.github.io/images/me.png" 
            alt={PROFILE.name} 
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center lg:text-left">
          <h1 className="serif-heading text-3xl font-bold text-slate-900 tracking-tight">{PROFILE.name}</h1>
          <p className="text-lg font-medium text-slate-600 mt-1">{PROFILE.title}</p>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{PROFILE.institution}</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col space-y-3 w-full border-t border-slate-100 pt-6">
          <div className="flex items-center space-x-3 text-slate-600 group cursor-pointer" onClick={() => window.location.href = `mailto:${PROFILE.email}`}>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="text-sm font-semibold tracking-tight group-hover:text-indigo-600 transition-colors">{PROFILE.email}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
            {PROFILE.googleScholar && (
              <a href={PROFILE.googleScholar} target="_blank" className="p-2 bg-slate-50 border border-slate-100 rounded-lg hover:bg-white hover:shadow-md transition-all" title="Google Scholar">
                <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.828 3.38a7 7 0 0 1 14.344 0L24 9.5z"/></svg>
              </a>
            )}
            {PROFILE.github && (
              <a href={PROFILE.github} target="_blank" className="p-2 bg-slate-50 border border-slate-100 rounded-lg hover:bg-white hover:shadow-md transition-all" title="GitHub">
                <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            )}
            {PROFILE.dblp && (
              <a href={PROFILE.dblp} target="_blank" className="p-2 bg-slate-50 border border-slate-100 rounded-lg hover:bg-white hover:shadow-md transition-all" title="DBLP">
                <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Interests */}
        <div className="w-full">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {PROFILE.interests.map((interest, idx) => (
              <span key={idx} className="px-3 py-1 bg-white border border-slate-100 text-slate-600 text-xs rounded-md font-bold shadow-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
