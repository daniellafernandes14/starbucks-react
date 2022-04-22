const Header = () => {
  return (
    <nav role='navigation' className='navbar'>
      <div className='left-links'>
        <a href="/" className='logo'><img src='../images/logo.png' alt='logo' /></a>
        <a href='https://google.com'>MENU</a>
        <a href='https://google.com'>REWARDS</a>
        <a href='https://google.com'>GIFT CARDS</a>
      </div>
      <div className='right-links'>
        <a href='https://google.com'>📍 Find a store</a>
        <a href='https://google.com' className='nav-btn-white'>Sign in</a>
        <a href='https://google.com' className='nav-btn-black' style={{color: 'white'}}>Join now</a>
      </div>
    </nav>
  )
}

export default Header;
