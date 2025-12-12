import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Zap, Building2, ArrowRight } from 'lucide-react';

const CostSimulator: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [comparison, setComparison] = useState({
    legacy: { fee: 0, time: '3-5 Days', total: 0 },
    stableflow: { fee: 0, time: '15 Seconds', total: 0 }
  });

  useEffect(() => {
    // Legacy: ~$35 wire fee + 3% FX spread
    const legacyFee = 35 + (amount * 0.03);
    // StableFlow: $0.05 network fee + 0.5% FX/Ramp spread
    const stableFee = 0.05 + (amount * 0.005);

    setComparison({
      legacy: { fee: legacyFee, time: '3-5 Days', total: amount - legacyFee },
      stableflow: { fee: stableFee, time: '15 Seconds', total: amount - stableFee }
    });
  }, [amount]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const savedAmount = comparison.legacy.fee - comparison.stableflow.fee;
  const savedPercent = ((savedAmount / comparison.legacy.fee) * 100).toFixed(0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Interactive Value Simulator</h2>
        <p className="text-slate-400">
          See exactly how much freelancers and SMEs save by switching to StableFlow.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-xl">
        <div className="mb-10">
          <label className="block text-sm font-medium text-slate-300 mb-4">
            Transfer Amount: <span className="text-2xl font-bold text-white ml-2">${amount.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={amount}
            onChange={handleSliderChange}
            className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>$100</span>
            <span>$5,000</span>
            <span>$10,000</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-full p-2 z-10 hidden md:block border-4 border-slate-800">
                <span className="font-bold text-slate-300 text-sm">VS</span>
            </div>

          {/* Legacy Option */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Traditional Rail</h3>
                <p className="text-xs text-slate-400">SWIFT / PayPal / Payoneer</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                <span className="text-sm text-slate-400">Fees (Wire + FX)</span>
                <span className="text-lg font-semibold text-red-400">-${comparison.legacy.fee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                <span className="text-sm text-slate-400">Settlement Time</span>
                <span className="text-lg font-semibold text-slate-200 flex items-center gap-1">
                    <Clock size={16} /> {comparison.legacy.time}
                </span>
              </div>
              <div className="pt-4">
                <p className="text-xs text-slate-500 mb-1">Recipient Gets</p>
                <div className="text-3xl font-bold text-slate-400">${comparison.legacy.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>
            </div>
          </div>

          {/* StableFlow Option */}
          <div className="bg-cyan-900/10 p-6 rounded-xl border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">StableFlow</h3>
                <p className="text-xs text-cyan-400/80">Gasless Stablecoin Rail</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center py-2 border-b border-cyan-500/20">
                <span className="text-sm text-cyan-100/70">Fees (Network + Ramp)</span>
                <span className="text-lg font-semibold text-green-400">-${comparison.stableflow.fee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-cyan-500/20">
                <span className="text-sm text-cyan-100/70">Settlement Time</span>
                <span className="text-lg font-semibold text-white flex items-center gap-1">
                    <Zap size={16} className="text-yellow-400" /> {comparison.stableflow.time}
                </span>
              </div>
              <div className="pt-4">
                <p className="text-xs text-cyan-500 mb-1">Recipient Gets</p>
                <div className="text-3xl font-bold text-white">${comparison.stableflow.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-600/10 rounded-xl p-4 flex items-center justify-between border border-green-500/30">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-2 rounded-full text-white">
               <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-green-200">Total Savings Per Transaction</p>
              <p className="text-2xl font-bold text-white">${savedAmount.toFixed(2)} <span className="text-sm font-normal text-green-300">({savedPercent}% less fees)</span></p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-green-900/20">
            Start Saving <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostSimulator;