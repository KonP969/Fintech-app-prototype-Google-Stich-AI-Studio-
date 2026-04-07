import { Plus, Cpu, Snowflake, Settings, Hash, Smartphone, Nfc, Landmark, CreditCard, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Cards() {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showModal, setShowModal] = useState<string | null>(null);

  const securityToggles = [
    { title: 'Online payments', desc: 'Pay on websites and apps', active: true },
    { title: 'Contactless', desc: 'Apple Pay & tap to pay', active: true },
    { title: 'ATM withdrawals', desc: 'Cash withdrawals worldwide', active: false },
    { title: 'Magstripe payments', desc: 'Swipe card to pay (less secure)', active: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8 pb-32"
    >
      {/* Header */}
      <header className="flex justify-between items-center pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Cards</h1>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <Plus size={20} />
        </motion.button>
      </header>

      {/* Carousel */}
      <section className="w-full">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 pb-8 pt-4 gap-6">
          {/* Primary Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative w-[320px] aspect-[1.586] rounded-[24px] overflow-hidden shrink-0 snap-center shadow-2xl shadow-primary/20 card-tilt group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-tr from-primary via-purple-600 to-pink-500 transition-opacity duration-500 ${isFrozen ? 'opacity-30 grayscale' : 'opacity-90'}`} />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <motion.div whileHover={{ rotate: 10 }}>
                  <Cpu size={36} className="text-white/80" fill="currentColor" />
                </motion.div>
                <div className="text-xl font-extrabold italic tracking-wider text-white">VISA</div>
              </div>
              <div className="mt-auto flex flex-col gap-1">
                <div className="text-white text-2xl font-medium tracking-[0.25em] mb-1 drop-shadow-md">•••• •••• •••• 4289</div>
                <div className="flex justify-between items-end text-white/80 text-sm font-medium uppercase tracking-widest">
                  <span>Alex Morgan</span>
                  <span>09/28</span>
                </div>
              </div>
            </div>
            {isFrozen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
              >
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  >
                    <Snowflake size={40} className="text-white" />
                  </motion.div>
                  <span className="text-white font-bold tracking-widest text-lg">FROZEN</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Frozen Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative w-[320px] aspect-[1.586] rounded-[24px] overflow-hidden shrink-0 snap-center shadow-2xl card-tilt cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 flex flex-col justify-between z-10 text-white/40">
              <div className="flex justify-between items-start">
                <Cpu size={36} fill="currentColor" />
                <div className="text-xl font-extrabold italic tracking-wider">MASTERCARD</div>
              </div>
              <div className="mt-auto flex flex-col gap-1">
                <div className="text-2xl font-medium tracking-[0.25em] mb-1">•••• •••• •••• 8110</div>
                <div className="flex justify-between items-end text-sm font-medium uppercase tracking-widest">
                  <span>Alex Morgan</span>
                  <span>11/25</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 rounded-[24px] backdrop-blur-[2px]">
              <div className="flex flex-col items-center gap-2">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <Snowflake size={40} className="text-white" />
                </motion.div>
                <span className="text-white font-bold tracking-widest text-lg">FROZEN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Controls */}
      <section className="flex gap-4">
        {[
          { id: 'freeze', label: isFrozen ? 'Unfreeze' : 'Freeze', icon: Snowflake },
          { id: 'settings', label: 'Settings', icon: Settings },
          { id: 'pin', label: 'PIN', icon: Hash },
        ].map((ctrl) => (
          <motion.button 
            key={ctrl.label} 
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (ctrl.id === 'freeze') {
                setIsFrozen(!isFrozen);
              } else {
                setShowModal(ctrl.label);
              }
            }}
            className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all"
          >
            <ctrl.icon size={24} className={ctrl.id === 'freeze' && isFrozen ? 'text-white' : 'text-primary'} />
            <span className="text-sm font-medium text-text-main">{ctrl.label}</span>
          </motion.button>
        ))}
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-surface-highlight w-full max-w-xs p-8 rounded-3xl border border-white/10 shadow-2xl relative"
            >
              <button 
                onClick={() => setShowModal(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-main"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="size-16 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold">{showModal}</h3>
                <p className="text-text-muted text-sm">This feature is currently in development. Stay tuned for updates!</p>
                <button 
                  onClick={() => setShowModal(null)}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Security */}
      <section className="pb-8">
        <h3 className="text-text-muted font-medium text-sm uppercase tracking-wider mb-4 px-2">Security</h3>
        <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden flex flex-col">
          {securityToggles.map((toggle, i) => (
            <motion.div 
              key={toggle.title} 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              className={`flex items-center justify-between p-4 cursor-pointer ${i !== securityToggles.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-text-main font-medium">{toggle.title}</span>
                <span className="text-text-muted text-sm">{toggle.desc}</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-8 rounded-full relative transition-colors border ${toggle.active ? 'bg-primary border-white/10' : 'bg-white/10 border-white/5'}`}
              >
                <motion.div 
                  layout
                  className={`absolute top-1 size-6 bg-white rounded-full shadow-sm ${toggle.active ? 'right-1' : 'left-1 opacity-80'}`} 
                />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
