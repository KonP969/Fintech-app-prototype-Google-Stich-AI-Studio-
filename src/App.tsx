import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import BottomNav, { Screen } from './components/BottomNav';
import HomeDashboard from './components/Home';
import Analytics from './components/Analytics';
import Exchange from './components/Exchange';
import Vaults from './components/Vaults';
import Cards from './components/Cards';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeDashboard key="home" setScreen={setCurrentScreen} />;
      case 'analytics':
        return <Analytics key="analytics" />;
      case 'exchange':
        return <Exchange key="exchange" />;
      case 'vaults':
        return <Vaults key="vaults" />;
      case 'cards':
        return <Cards key="cards" />;
      default:
        return <HomeDashboard key="home" setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-main max-w-md mx-auto px-6 relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
      
      <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
    </div>
  );
}
