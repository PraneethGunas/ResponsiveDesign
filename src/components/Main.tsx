import laptop from '../img/laptop.png';

export function Main() {
  return (
    <div className='container background-orange'>
      <div className='row feature'>
        <div className='large-5 columns'>
          <h1>Make things happen.</h1>
        </div>
        <div className='large-7 columns'>
          <img src={laptop} alt='Laptop' className='responsiveImage' />
        </div>
      </div>
    </div>
  );
}
