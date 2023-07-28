import SideNavigator from '../components/SideNavigator';

function Navigation({ toggleNav }) {
  return (
    <header className='row' id='main'>
      <div id='header-bar' className='large-4 columns'>
        <div className='brand'>
          <a>Design</a>
        </div>
        <a id='hamburger' onClick={toggleNav}>
          <div className='hamburgerBar' />
          <div className='hamburgerBar' />
          <div className='hamburgerBar' />
        </a>
      </div>
      <nav id='main' className='large-8 columns'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a className='button button-primary'>Sign up</a>
          </li>
        </ul>
      </nav>
      <SideNavigator toggleNav={toggleNav} />
    </header>
  );
}

export default Navigation;
