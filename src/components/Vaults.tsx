import { Plus, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Vaults() {
  const vaults = [
    { name: 'Tokyo Trip', current: 2400, target: 5000, icon: '✈️', progress: 48 },
    { name: 'New MacBook', current: 1500, target: 1500, icon: '💻', progress: 100 },
    { name: 'Emergency Fund', current: 10000, target: 20000, icon: '☔', progress: 50 },
    { name: 'House Downpayment', current: 5000, target: 50000, icon: '🏡', progress: 10 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6 pb-32"
    >
      {/* Header */}
      <header className="flex items-center justify-between pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Vaults</h1>
        <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 flex items-center shadow-sm">
          <span className="text-sm font-semibold text-primary">4.2% APY</span>
        </div>
      </header>

      {/* Grid */}
      <main className="grid grid-cols-2 gap-4">
        {vaults.map((vault, i) => (
          <motion.button 
            key={vault.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-2xl shadow-lg relative overflow-hidden transition-all group"
          >
            <div className="relative size-20 mb-4">
              <svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <motion.circle 
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ strokeDashoffset: 264 - (264 * vault.progress) / 100 }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 + i * 0.1 }}
                  cx="50" cy="50" r="42" fill="none" 
                  stroke={vault.progress === 100 ? '#F8FAFC' : '#803bf7'} 
                  strokeWidth="8" strokeDasharray="264" strokeLinecap="round"
                />
              </svg>
              <motion.div 
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                className="absolute inset-0 flex items-center justify-center text-3xl"
              >
                {vault.icon}
              </motion.div>
            </div>
            <h3 className="text-base font-semibold text-text-main mb-1 text-center group-hover:text-primary transition-colors">{vault.name}</h3>
            <p className="text-xs font-medium text-text-muted tracking-wide">
              ${vault.current.toLocaleString()} / ${vault.target.toLocaleString()}
            </p>
          </motion.button>
        ))}
      </main>

      {/* FAB */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-6 size-16 rounded-full bg-primary text-white shadow-lg flex items-center justify-center z-40 transition-transform"
      >
        <Plus size={32} />
      </motion.button>
    </motion.div>
  );
}
