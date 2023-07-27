function Nav({ closeNav }) {
  return (
    <div id='mySidenav' className='sidenav'>
      <a href='javascript:void(0)' className='closebtn' onClick={closeNav}>
        &times;
      </a>
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
          <a href='#'>Sign up</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
