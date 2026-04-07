import { Home, CreditCard, Repeat, PiggyBank, LayoutGrid, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export type Screen = 'home' | 'cards' | 'exchange' | 'vaults' | 'analytics';

interface BottomNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export default function BottomNav({ currentScreen, setScreen }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'exchange', label: 'Exchange', icon: Repeat },
    { id: 'vaults', label: 'Vaults', icon: PiggyBank },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-white/5 px-4 pb-8 pt-3 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-end max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen(item.id as Screen)}
              className={`flex flex-1 flex-col items-center justify-end gap-1 transition-colors relative ${
                isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-3 w-10 h-1 bg-primary rounded-full shadow-[0_0_12px_rgba(128,59,247,0.8)]"
                />
              )}
              <div className="flex h-8 items-center justify-center">
                <Icon size={isActive ? 28 : 24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <p className={`text-[11px] leading-normal tracking-[0.015em] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </p>
              {isActive && item.id === 'analytics' && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(128,59,247,0.8)]" 
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
