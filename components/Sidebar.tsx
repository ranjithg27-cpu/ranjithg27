import React from 'react';
import { Activity, Users, Map, Calculator, PieChart, BarChart3, LayoutDashboard } from 'lucide-react';
import { ViewState } from '../App';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'summary', label: 'Executive Summary', icon: LayoutDashboard },
    { id: 'market', label: 'Market Analysis', icon: BarChart3 },
    { id: 'personas', label: 'User Research', icon: Users },
    { id: 'roadmap', label: 'Execution Roadmap', icon: Map },
    { id: 'simulator', label: 'Cost Simulator', icon: Calculator },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-cyan-500/10 p-2 rounded-lg">
          <Activity className="text-cyan-400" size={28} />
        </div>
        <div>
          <h1 className="font-bold text-xl tracking-tight text-white">StableFlow</h1>
          <p className="text-xs text-slate-400">Strategy Report 2025</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewState)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }
              `}
            >
              <item.icon size={20} className={isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-700">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <h4 className="text-sm font-semibold text-slate-200 mb-1">North Star Metric</h4>
          <p className="text-xs text-slate-400 mb-2">Weekly Active Settlement Volume</p>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full w-3/4 rounded-full"></div>
          </div>
          <p className="text-right text-xs text-cyan-400 mt-1 font-mono">Target: $150M</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;