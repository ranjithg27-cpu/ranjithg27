import React from 'react';
import { METRICS } from '../constants';
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockGrowthData = [
  { name: 'Q1', value: 20 },
  { name: 'Q2', value: 45 },
  { name: 'Q3', value: 90 },
  { name: 'Q4', value: 160 },
  { name: 'Q1', value: 280 },
];

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Executive Summary</h2>
        <p className="text-slate-400 max-w-3xl">
          StableFlow redefines cross-border payments for the programmable economy. 
          Moving beyond speculation, we provide a gasless, compliant, and automated payment rail for the $20T B2B market.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((metric, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-cyan-500/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-700/50 rounded-lg text-cyan-400">
                <metric.icon size={20} />
              </div>
              {metric.trendUp && <TrendingUp size={16} className="text-green-400" />}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="text-xs text-cyan-500 mt-2 font-medium">{metric.trend}</p>
          </div>
        ))}
      </div>

      {/* Main Value Prop & Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Projected Settlement Volume (WASV)</h3>
            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">Forecast 2026</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockGrowthData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} />
                <YAxis stroke="#64748b" tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Strategic Positioning</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Business-First</h4>
                  <p className="text-xs text-slate-400">Not for trading. Built for invoices, payroll, and escrow.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Regulatory Aligned</h4>
                  <p className="text-xs text-slate-400">GENIUS Act & MiCA compliant structure from Day 1.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Gasless Experience</h4>
                  <p className="text-xs text-slate-400">ERC-4337 Account Abstraction. No ETH needed.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-red-400" size={16} />
              <span className="text-sm font-semibold text-red-400">Market Gap</span>
            </div>
            <p className="text-xs text-slate-300">
              Current options (USDT/USDC) lack business utility features like automated tax splits and programmable escrow, leaving a $150B SAM underserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;