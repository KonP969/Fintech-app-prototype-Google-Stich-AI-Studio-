import { ArrowLeft, ChevronDown, ShoppingCart, Car, Utensils, Popcorn } from 'lucide-react';
import { motion } from 'motion/react';

export default function Analytics() {
  const categories = [
    { name: 'Groceries', amount: '$850.00', icon: ShoppingCart, progress: 75 },
    { name: 'Transport', amount: '$320.00', icon: Car, progress: 45 },
    { name: 'Dining', amount: '$450.00', icon: Utensils, progress: 60 },
    { name: 'Entertainment', amount: '$210.00', icon: Popcorn, progress: 25 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6 pb-32"
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
        <h2 className="text-lg font-bold">Analytics</h2>
        <div className="size-10" />
      </header>

      {/* Month Selector */}
      <div className="flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 items-center justify-center gap-2 rounded-xl bg-surface-highlight px-6 hover:bg-opacity-80 transition-colors"
        >
          <span className="text-sm font-medium">September 2023</span>
          <ChevronDown size={16} className="text-text-muted" />
        </motion.button>
      </div>

      {/* Total Spent */}
      <section>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-text-muted text-sm font-medium mb-1"
        >
          Total Spent
        </motion.p>
        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold tracking-tight"
        >
          $2,450.00
        </motion.h1>
      </section>

      {/* Chart */}
      <section className="relative h-48 flex items-end justify-between gap-1.5 mt-8">
        {/* Tooltip */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-8 left-[55%] -translate-x-1/2 bg-surface px-3 py-1.5 rounded-lg shadow-lg border border-white/5 flex flex-col items-center"
        >
          <span className="text-xs font-bold">$125</span>
          <div className="w-2 h-2 bg-surface absolute -bottom-1 rotate-45 border-r border-b border-white/5" />
        </motion.div>

        {[20, 35, 15, 50, 25, 65, 40, 80, 30, 45].map((height, i) => (
          <motion.div 
            key={i} 
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
            whileHover={{ scaleY: 1.1, filter: 'brightness(1.2)' }}
            className={`w-full rounded-t-sm transition-all cursor-pointer ${i === 5 ? 'bg-accent shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'bg-surface-highlight hover:bg-text-muted'}`}
          />
        ))}
      </section>
      <div className="flex justify-between text-text-muted text-[10px] font-medium uppercase tracking-wider">
        <span>Sep 1</span>
        <span>Sep 10</span>
        <span>Sep 20</span>
        <span>Sep 30</span>
      </div>

      {/* Categories */}
      <section className="flex flex-col gap-6 mt-4">
        <h3 className="text-lg font-bold">Categories</h3>
        <div className="flex flex-col gap-5">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex flex-col gap-2 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="size-10 rounded-full bg-surface-highlight flex items-center justify-center group-hover:bg-surface transition-colors"
                  >
                    <cat.icon size={20} className="text-text-main" />
                  </motion.div>
                  <span className="font-medium group-hover:text-primary transition-colors">{cat.name}</span>
                </div>
                <span className="font-semibold">{cat.amount}</span>
              </div>
              <div className="w-full bg-surface-highlight h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="bg-primary h-full rounded-full" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
