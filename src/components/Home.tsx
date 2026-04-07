import { Bell, ArrowUp, ArrowDown, Plus, Repeat, Lightbulb, Laptop, Banknote, Utensils, Car, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Screen } from './BottomNav';

interface HomeProps {
  setScreen: (screen: Screen) => void;
}

export default function HomeDashboard({ setScreen }: HomeProps) {
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const transactions = [
    { id: 1, name: 'Apple Store', category: 'Electronics', amount: '-$1,299.00', icon: Laptop, color: 'bg-surface-highlight' },
    { id: 2, name: 'Acme Corp', category: 'Salary', amount: '+$5,420.00', icon: Banknote, color: 'bg-success/20', iconColor: 'text-success' },
    { id: 3, name: 'Nobu', category: 'Dining', amount: '-$245.50', icon: Utensils, color: 'bg-surface-highlight' },
    { id: 4, name: 'Uber', category: 'Transport', amount: '-$24.99', icon: Car, color: 'bg-surface-highlight' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-8 pb-32"
    >
      {/* Header */}
      <header className="flex items-center justify-between pt-4">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="size-10 rounded-full surface-border bg-cover bg-center cursor-pointer" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1tn9nSUEEEKmtkrzTpcjIMQ5LlIj_DQ1ArMPOKVeiWCCwYHYVl2lAh6arnKiwI9n2qxRoJf90BeAPK-IFkArtWlUWmC9lqKXm6QYO5KaBrvjDrvqbNwBwXtuw_N7Nb6PEqn_Am4V6V9qjf7r2nW3UcKIz8ropocPjsqbsN8Ry5t9qOyQ3qPU6ely_c0Rg_ptCOjSeWGQbg5bUcEU2xM6MsMYpzMgZkDMFCVkx6p1IBJ-rSd5rroQghTIpXFwpxl82veXLOrw3yM6y')" }} 
        />
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: 'var(--color-surface-highlight)' }}
          whileTap={{ scale: 0.9 }}
          className="size-10 rounded-full bg-surface surface-border flex items-center justify-center text-text-main transition-colors"
        >
          <Bell size={20} />
        </motion.button>
      </header>

      {/* Balance */}
      <section className="flex flex-col items-center justify-center py-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-text-muted text-sm font-medium mb-2 tracking-wide uppercase"
        >
          Total Balance
        </motion.h1>
        <div className="flex items-center gap-3">
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-bold tracking-tight text-text-main"
          >
            $42,500.00
          </motion.span>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center bg-success/10 text-success px-2.5 py-1 rounded-full text-sm font-bold border border-success/20 cursor-default"
          >
            +2.4%
          </motion.div>
        </div>
      </section>

      {/* Actions */}
      <section className="flex justify-between items-center gap-4">
        {[
          { id: 'send', label: 'Send', icon: ArrowUp },
          { id: 'receive', label: 'Receive', icon: ArrowDown },
          { id: 'topup', label: 'Top Up', icon: Plus },
          { id: 'exchange', label: 'Exchange', icon: Repeat },
        ].map((action) => (
          <motion.button 
            key={action.label} 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (action.id === 'exchange') {
                setScreen('exchange');
              } else {
                setActiveAction(action.label);
                setTimeout(() => setActiveAction(null), 2000);
              }
            }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex items-center justify-center size-14 rounded-2xl bg-surface surface-border text-primary transition-all duration-200 group-hover:bg-surface-highlight group-hover:shadow-[0_8px_24px_-4px_rgba(128,59,247,0.3)] shadow-[0_4px_20px_-4px_rgba(128,59,247,0.15)]">
              <action.icon size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-medium text-text-muted group-hover:text-text-main transition-colors">{action.label}</span>
          </motion.button>
        ))}
      </section>

      {/* Action Feedback Overlay */}
      <AnimatePresence>
        {activeAction && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-6 right-6 bg-primary text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle2 size={24} />
            <span className="font-bold">{activeAction} requested successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Insight */}
      <motion.section 
        whileHover={{ scale: 1.02 }}
        className="insight-gradient rounded-2xl p-5 flex items-start gap-4 cursor-pointer"
      >
        <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary shrink-0">
          <Lightbulb size={20} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-text-main font-semibold text-base mb-1">Smart Insight</h3>
          <p className="text-text-muted text-sm leading-relaxed">You spent 15% less on Dining this week compared to last week. Keep it up!</p>
        </div>
      </motion.section>

      {/* Recent */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-main">Recent</h2>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-primary text-sm font-semibold"
          >
            See All
          </motion.button>
        </div>
        <div className="flex flex-col gap-4">
          {transactions.map((tx, i) => (
            <motion.div 
              key={tx.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="flex items-center justify-between p-2 rounded-xl cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-full flex items-center justify-center shrink-0 surface-border ${tx.color} ${tx.iconColor || 'text-text-main'}`}>
                  <tx.icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-text-main font-semibold text-base">{tx.name}</span>
                  <span className="text-text-muted text-sm">{tx.category}</span>
                </div>
              </div>
              <span className={`font-bold text-base ${tx.amount.startsWith('+') ? 'text-success' : 'text-text-main'}`}>
                {tx.amount}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
