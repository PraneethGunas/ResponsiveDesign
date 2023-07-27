import plane from '../img/plane.png';
import heart from '../img/heart.png';
import cog from '../img/cog.png';
import Cards from './Cards';

export function RecentWorks({ showMore, more }) {
  return (
    <>
      <div className='container-spacy features'>
        <div className='flex-row'>
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
        <Cards />
        <div id='showMoreButton' onClick={showMore}>
          {more ? 'Show less' : 'Show more'}
        </div>
      </div>
    </>
  );
}
