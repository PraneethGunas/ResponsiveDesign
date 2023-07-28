import plane from '../img/plane.png';
import heart from '../img/heart.png';
import cog from '../img/cog.png';

function Features() {
  return (
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
  );
}

export default Features;
