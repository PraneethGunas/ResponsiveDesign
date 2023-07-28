import './App.css';
import { useState } from 'react';
import RecentWorks from './components/RecentWorks';
import Features from './components/Features';
import Hero from './components/Hero';

function App() {
  const [showMore, setShowMore] = useState(true);

  return (
    <>
      <Hero />
      <Features />
      <RecentWorks showMore={showMore} setShowMore={setShowMore} />
    </>
  );
}

export default App;
