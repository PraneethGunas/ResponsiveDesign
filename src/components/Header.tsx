import Nav from '../Nav';

export function Header({ toggleNav }) {
  return (
    <header className='row' id='mainHeader'>
      <div className='large-4 columns'>
        <div className='brand'>
          <a href='#'>Design</a>
        </div>
      </div>
      <Nav closeNav={toggleNav} />
      <nav id='main' className='large-8 columns'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Portfolio</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#' className='button button-primary'>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
      <div onClick={toggleNav} id='hamburgerMenu'>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
      </div>
    </header>
  );
}
