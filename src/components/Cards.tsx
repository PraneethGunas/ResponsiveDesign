import robot from '../img/robot.png';
import pizza from '../img/pizza.png';
import eyeball from '../img/eyeball.png';
import umbrella from '../img/umbrella.png';
import rocket from '../img/rocket.png';
import jacket from '../img/jacket.png';
import ghost from '../img/ghost.png';
import ff from '../img/ff.png';
import utility from '../img/utility.png';
import '../foundation.min.css';

function Cards() {
  return (
    <>
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
      </div>
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
    </>
  );
}

export default Cards;
