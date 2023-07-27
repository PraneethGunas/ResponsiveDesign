import plane from '../img/plane.png';
import heart from '../img/heart.png';
import cog from '../img/cog.png';
import robot from '../img/robot.png';
import pizza from '../img/pizza.png';
import eyeball from '../img/eyeball.png';
import umbrella from '../img/umbrella.png';
import rocket from '../img/rocket.png';
import jacket from '../img/jacket.png';
import ghost from '../img/ghost.png';
import ff from '../img/ff.png';
import utility from '../img/utility.png';

const images = [
  { src: robot, color: 'grey', alt: 'Robot' },
  { src: pizza, color: 'white', alt: 'Pizza' },
  { src: eyeball, color: 'red', alt: 'Eyeball' },
  { src: umbrella, color: 'yellow', alt: 'Umbrella' },
  { src: rocket, color: 'baby-blue', alt: 'Rocket' },
  { src: jacket, color: 'pale-blue', alt: 'Jacket' },
  { src: ghost, color: 'slate-blue', alt: 'Ghost' },
  { src: ff, color: 'midnight', alt: 'FF' },
  { src: utility, color: 'blue', alt: 'Utility' },
];

export function RecentWorks({ showMore, more }) {
  return (
    <>
      <div className='container-spacy features'>
        <div className='row'>
          <div className='large-4 columns'>
            <img src={plane} />
            <h5>Flat Design</h5>
            <p>
              Lorem ipsum dolor sit amet, aliquam scribentur cu pri, est ut
              consulatu iracundia, ex debet altera tritani nam. Et qui delenit
              consequat efficiendi.
            </p>
          </div>
          <div className='large-4 columns'>
            <img src={heart} />
            <h5>Quality code</h5>
            <p>
              Lorem ipsum dolor sit amet, aliquam scribentur cu pri, est ut
              consulatu iracundia, ex debet altera tritani nam. Et qui delenit
              consequat efficiendi.
            </p>
          </div>
          <div className='large-4 columns'>
            <img src={cog} />
            <h5>Great Support</h5>
            <p>
              Lorem ipsum dolor sit amet, aliquam scribentur cu pri, est ut
              consulatu iracundia, ex debet altera tritani nam. Et qui delenit
              consequat efficiendi.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container-spacy background-green recent'>
        <h2>Recent works</h2>
        <p>
          Lorem ipsum dolor sit amet, aliquam scribentur cu pri, est ut
          consulatu iracundia, ex debet altera tritani nam. Et qui delenit
          consequat efficiendi.
        </p>
        <div className={'scroll'}>
          <ul className='in-list'>
            <li className='selected'>
              <a href='#'>All</a>
            </li>
            <li>
              <a href='#'>Web</a>
            </li>
            <li>
              <a href='#'>Mobile</a>
            </li>
            <li>
              <a href='#'>Design</a>
            </li>
            <li>
              <a href='#'>Photography</a>
            </li>
            <li>
              <a href='#'>Type</a>
            </li>
          </ul>
        </div>
        {images.map((image, index) => (
          <div key={index} className={`row ${index > 2 ? 'extra' : ''}`}>
            <div className='large-4 columns'>
              <div className={`item background-${image.color}`}>
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          </div>
        ))}
        <a className='button button-secondary show-more' onClick={showMore}>
          {more ? 'Show less' : 'Show more'}
        </a>
      </div>
    </>
  );
}
