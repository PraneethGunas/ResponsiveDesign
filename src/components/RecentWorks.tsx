import robot from '../img/robot.png';
import pizza from '../img/pizza.png';
import eyeball from '../img/eyeball.png';
import umbrella from '../img/umbrella.png';
import rocket from '../img/rocket.png';
import jacket from '../img/jacket.png';
import ghost from '../img/ghost.png';
import ff from '../img/ff.png';
import utility from '../img/utility.png';
import { useState } from 'react';

function RecentWorks() {
  const [showMore, setShowMore] = useState(true);

  function toggleShowMore() {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) {
      const nodes = document.getElementsByClassName(
        'extra'
      ) as HTMLCollectionOf<HTMLElement>;
      for (const element of nodes) {
        element.style.display = showMore ? 'inline-block' : 'none';
      }
      setShowMore(!showMore);
    }
  }

  return (
    <div className='container-spacy background-green recent'>
      <h2>Recent works</h2>
      <p>
        Lorem ipsum dolor sit amet, aliquam scribentur cu pri, est ut consulatu
        iracundia, ex debet altera tritani nam. Et qui delenit consequat
        efficiendi.
      </p>
      <ul className='in-list'>
        <li className='selected'>
          <a>All</a>
        </li>
        <li>
          <a>Web</a>
        </li>
        <li>
          <a>Mobile</a>
        </li>
        <li>
          <a>Design</a>
        </li>
        <li>
          <a>Photography</a>
        </li>
        <li>
          <a>Type</a>
        </li>
      </ul>
      <div className='row'>
        <div className='large-4 columns'>
          <div className='item background-grey'>
            <img src={robot} />
          </div>
        </div>
        <div className='large-4 columns'>
          <div className='item background-white'>
            <img src={pizza} />
          </div>
        </div>
        <div className='large-4 columns'>
          <div className='item background-red'>
            <img src={eyeball} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='large-4 columns'>
          <div className='item background-yellow'>
            <img src={umbrella} />
          </div>
        </div>
        <div className='large-4 columns'>
          <div className='item background-baby-blue'>
            <img src={rocket} />
          </div>
        </div>
        <div className='large-4 columns extra'>
          <div className='item background-pale-blue'>
            <img src={jacket} />
          </div>
        </div>
      </div>{' '}
      <div className='row'>
        <div className='large-4 columns extra'>
          <div className='item background-slate-blue'>
            <img src={ghost} />
          </div>
        </div>
        <div className='large-4 columns extra'>
          <div className='item background-midnight'>
            <img src={ff} />
          </div>
        </div>
        <div className='large-4 columns extra'>
          <div className='item background-blue'>
            <img src={utility} />
          </div>
        </div>
      </div>
      <a className='button button-secondary show-more' onClick={toggleShowMore}>
        {showMore ? 'Show more' : 'Hide'}
      </a>
    </div>
  );
}

export default RecentWorks;
