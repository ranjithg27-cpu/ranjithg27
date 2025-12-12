import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ExecutiveSummary from './views/ExecutiveSummary';
import MarketAnalysis from './views/MarketAnalysis';
import Personas from './views/Personas';
import ProductRoadmap from './views/ProductRoadmap';
import CostSimulator from './views/CostSimulator';
import { Menu, Activity, Users, Map, Calculator, PieChart } from 'lucide-react';

// Navigation State Type
export type ViewState = 'summary' | 'market' | 'personas' | 'roadmap' | 'simulator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('summary');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'summary': return <ExecutiveSummary />;
      case 'market': return <MarketAnalysis />;
      case 'personas': return <Personas />;
      case 'roadmap': return <ProductRoadmap />;
      case 'simulator': return <CostSimulator />;
      default: return <ExecutiveSummary />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-slate-800 z-50 p-4 flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Activity className="text-cyan-400" size={24} />
          <span className="font-bold text-lg">StableFlow</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          currentView={currentView} 
          onViewChange={(view) => {
            setCurrentView(view);
            setIsMobileMenuOpen(false);
          }} 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pt-16 lg:pt-0 p-6 lg:p-10 relative">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          {renderView()}
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;