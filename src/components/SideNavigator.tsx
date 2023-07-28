function SideNavigator({ toggleNav }) {
  return (
    <div className='sidenav'>
      <a className='closebtn' onClick={toggleNav}>
        &times;
      </a>
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
          <a>Sign up</a>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigator;
