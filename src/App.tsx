import './App.css';

import { useState } from 'react';
import { Header } from './components/Header';
import { RecentWorks } from './components/RecentWorks';
import { Main } from './components/Main';

function App() {
  const [more, setMore] = useState(false);

  function toggleNav() {
    const node = document.getElementById('mySidenav');
    if (node) {
      node.style.width = node.style.width === '250px' ? '0' : '250px';
    }
  }

  function showMore() {
    const nodes = document.getElementsByClassName('extra');
    for (let i = 0; i < nodes.length; i++) {
      const display = nodes[i].style.display;
      nodes[i].style.display = display === 'block' ? 'none' : 'block';
      setMore(!more);
    }
  }

  return (
    <>
      <Header toggleNav={toggleNav} />
      <Main />
      <RecentWorks showMore={showMore} more={more} />
    </>
  );
}

export default App;
