import React, { useState } from 'react';
import { PERSONAS } from '../constants';
import { Quote, Frown, Target, ArrowRight } from 'lucide-react';

const Personas: React.FC = () => {
  const [activePersona, setActivePersona] = useState(PERSONAS[0]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">User Research Insights</h2>
        <p className="text-slate-400">
          Based on 23 qualitative interviews across key corridors (PH, IN, TR, VN).
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
        {/* Persona Selector List */}
        <div className="lg:w-1/3 space-y-4">
          {PERSONAS.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 group
                ${activePersona.id === persona.id 
                  ? 'bg-slate-800 border-cyan-500 shadow-lg shadow-cyan-900/20' 
                  : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                }
              `}
            >
              <img 
                src={persona.image} 
                alt={persona.name} 
                className={`w-12 h-12 rounded-full object-cover border-2 ${activePersona.id === persona.id ? 'border-cyan-400' : 'border-slate-600'}`}
              />
              <div>
                <h3 className={`font-bold ${activePersona.id === persona.id ? 'text-white' : 'text-slate-300'}`}>
                  {persona.name}
                </h3>
                <p className="text-xs text-slate-500">{persona.role}</p>
              </div>
              <ArrowRight className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${activePersona.id === persona.id ? 'text-cyan-400 opacity-100' : 'text-slate-500'}`} size={16} />
            </button>
          ))}
          
          <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl mt-8">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Emergent Themes</h4>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-2">
              <li>Payments feel slow & unpredictable.</li>
              <li>"Cashflow is king" - late money is lost money.</li>
              <li>Crypto concepts (Seed phrases) are a blocker.</li>
              <li>Platform fees (4-7%) are significant pain points.</li>
            </ul>
          </div>
        </div>

        {/* Persona Detail Card */}
        <div className="lg:w-2/3">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 h-full relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">{activePersona.name}</h2>
                  <p className="text-cyan-400 font-medium">{activePersona.role} • {activePersona.location}</p>
                </div>
                <Quote className="text-slate-600" size={48} />
              </div>

              <blockquote className="text-lg text-slate-300 italic border-l-4 border-cyan-500 pl-4 mb-8">
                "{activePersona.quote}"
              </blockquote>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-500/5 rounded-xl p-5 border border-red-500/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Frown className="text-red-400" size={20} />
                    <h4 className="font-bold text-red-100">Pain Points</h4>
                  </div>
                  <ul className="space-y-3">
                    {activePersona.painPoints.map((point, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-red-500/50 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-500/5 rounded-xl p-5 border border-green-500/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="text-green-400" size={20} />
                    <h4 className="font-bold text-green-100">Goals & Needs</h4>
                  </div>
                  <ul className="space-y-3">
                    {activePersona.goals.map((goal, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-green-500/50 mt-1">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personas;