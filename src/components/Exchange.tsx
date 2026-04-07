import { ArrowLeft, ChevronDown, ArrowUpDown, Info, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Exchange() {
  const [amount, setAmount] = useState('500');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleExchange = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col h-full pb-32"
    >
      {/* Header */}
      <header className="flex items-center justify-between pt-4">
        <motion.button 
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="size-10 rounded-full flex items-center justify-center text-text-main hover:bg-surface transition-colors"
        >
          <ArrowLeft size={24} />
        </motion.button>
        <h2 className="text-lg font-bold">Exchange</h2>
        <div className="size-10" />
      </header>

      <main className="flex-1 flex flex-col gap-8 mt-8">
        <div className="relative flex flex-col gap-2">
          {/* Source */}
          <motion.div 
            whileFocusWithin={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="insight-gradient rounded-2xl p-6 flex flex-col transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-muted text-sm font-medium uppercase tracking-wider">You send</span>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span className="font-bold">USD</span>
                <ChevronDown size={16} />
              </motion.button>
            </div>
            <div className="flex items-center">
              <span className="text-text-muted text-5xl mr-1">$</span>
              <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-none text-text-main focus:ring-0 p-0 font-medium text-5xl placeholder-white/20"
              />
            </div>
          </motion.div>

          {/* Swap Button */}
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-background-dark border-4 border-background-dark rounded-full flex items-center justify-center z-10 group transition-transform"
          >
            <div className="size-10 bg-white/10 group-hover:bg-primary/20 group-hover:text-primary rounded-full flex items-center justify-center transition-colors">
              <ArrowUpDown size={20} />
            </div>
          </motion.button>

          {/* Destination */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="insight-gradient rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-muted text-sm font-medium uppercase tracking-wider">You receive</span>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span className="font-bold">EUR</span>
                <ChevronDown size={16} />
              </motion.button>
            </div>
            <div className="flex items-center">
              <span className="text-primary text-5xl mr-1">€</span>
              <motion.span 
                key={amount}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-primary text-5xl font-medium"
              >
                {(parseFloat(amount || '0') * 0.94).toFixed(2)}
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Rate */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex justify-center items-center gap-2 text-text-muted text-sm font-medium bg-white/5 py-2 px-4 rounded-full self-center cursor-default"
        >
          <Info size={16} />
          <span>1 USD = 0.94 EUR</span>
        </motion.div>

        <div className="mt-auto">
          <motion.button 
            disabled={status !== 'idle'}
            onClick={handleExchange}
            whileHover={status === 'idle' ? { scale: 1.02, filter: 'brightness(1.1)' } : {}}
            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            className={`w-full rounded-2xl h-16 flex items-center justify-center text-lg font-bold tracking-wide shadow-[0_8px_32px_rgba(128,59,247,0.3)] transition-all ${
              status === 'success' ? 'bg-success' : 'bg-primary'
            } text-white`}
          >
            {status === 'idle' && `Exchange $${amount}`}
            {status === 'processing' && <Loader2 className="animate-spin" />}
            {status === 'success' && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                <CheckCircle2 size={24} />
                <span>Exchange Complete</span>
              </motion.div>
            )}
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}
