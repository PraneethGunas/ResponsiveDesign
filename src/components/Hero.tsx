import Navigation from './Navigation';
import laptop from '../img/laptop.png';

function Hero() {
  function toggleNav() {
    const node = document.getElementsByClassName('sidenav')[0] as HTMLElement;
    if (node) {
      node.style.width = node.style.width === '250px' ? '0' : '250px';
    }
  }
  return (
    <div className='container background-orange'>
      <Navigation toggleNav={toggleNav} />
      <div className='row feature'>
        <div className='large-5 columns'>
          <h1>Make things happen.</h1>
        </div>
        <div className='large-7 columns'>
          <img src={laptop} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
