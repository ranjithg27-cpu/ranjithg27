import React from 'react';
import { ROADMAP } from '../constants';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const ProductRoadmap: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Execution Roadmap</h2>
        <p className="text-slate-400">
          A phased approach to building the programmable economy layer, starting with trust.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-10 space-y-12 py-4">
        {ROADMAP.map((phase, index) => {
          // Determine status color/icon based on mocked progress (assuming Phase 1 is in progress)
          const isComplete = false;
          const isInProgress = index === 0;
          
          return (
            <div key={index} className="relative pl-8 md:pl-16">
              {/* Timeline Node */}
              <div className={`
                absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 
                ${isInProgress ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-900 border-slate-600'}
              `}></div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${isInProgress ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700 text-slate-400'}`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-slate-400 flex items-center gap-1">
                        <Clock size={14} /> {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  {isInProgress && (
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium animate-pulse">
                      <Circle size={12} fill="currentColor" /> In Progress
                    </div>
                  )}
                </div>

                <p className="text-slate-300 italic mb-6">Goal: {phase.goal}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {phase.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg">
                      <CheckCircle className="text-slate-600 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductRoadmap;