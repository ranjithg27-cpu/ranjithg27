import React from 'react';
import { COMPETITORS } from '../constants';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, CartesianGrid } from 'recharts';

const MarketAnalysis: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Market & Competitive Analysis</h2>
        <p className="text-slate-400">
          Visualizing the gap between legacy banking, current crypto incumbents, and the StableFlow advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart Comparison */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Competitive Capabilities</h3>
          <p className="text-sm text-slate-400 mb-6">StableFlow outperforms in automation and business-utility while maintaining high speed.</p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius="70%" data={COMPETITORS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Efficiency Score"
                  dataKey="speed"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Automation"
                  dataKey="automation"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                />
                <Legend />
                <RechartsTooltip 
                   contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost Comparison Bar Chart */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Relative Cost Structure</h3>
          <p className="text-sm text-slate-400 mb-6">Estimated cost index (0-100) for a standard $1,000 cross-border B2B transaction.</p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPETITORS} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={80} />
                <RechartsTooltip cursor={{fill: '#334155', opacity: 0.4}} contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} />
                <Bar dataKey="fees" fill="#f43f5e" name="Cost Index (Lower is Better)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Market Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="text-4xl font-bold text-cyan-400 mb-2">$20T</div>
          <div className="text-lg font-semibold text-white">TAM</div>
          <div className="text-sm text-slate-400 mt-2">Total Addressable Market<br/>Global B2B Cross-Border Flow</div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="text-4xl font-bold text-blue-400 mb-2">$150B</div>
          <div className="text-lg font-semibold text-white">SAM</div>
          <div className="text-sm text-slate-400 mt-2">Serviceable Available Market<br/>SME + Freelancer Corridors</div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-cyan-900/20">
          <div className="text-4xl font-bold text-green-400 mb-2">$9M</div>
          <div className="text-lg font-semibold text-white">SOM (Yr 1)</div>
          <div className="text-sm text-slate-400 mt-2">Target Revenue<br/>0.1% Penetration @ 0.5% Fee</div>
        </div>
      </div>

      {/* Regulation Note */}
      <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-lg font-semibold text-blue-100">Macro Regulatory Tailwinds</h4>
          <p className="text-sm text-blue-200/70">
            US GENIUS Act & EU MiCA (2024-2025) have de-risked the sector, creating a clear path for fully-backed, regulated payment stablecoins.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
          View Compliance Specs
        </button>
      </div>
    </div>
  );
};

export default MarketAnalysis;