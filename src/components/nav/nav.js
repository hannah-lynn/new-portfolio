import './nav.css';
import logo from '../../assets/images/logo.png';
import wavy from '../../assets/images/wavy.png';

function Nav() {
  return (
    <nav>
      <div className='flex justify-between mt-4'>
        <div className='nav-links flex ml-4'>
          <div className='ml-2 p-2'>
            <h1 className='name md:hidden'>Hannah Lynn</h1>
            <img
              className='wavy hidden md:inline'
              src={wavy}
              alt='wavy lines'
            />
          </div>
          <ul className='cursor-pointer flex items-center space-x-6'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className='logo md:hidden'>
          <a href='www.google.com'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='hidden md:inline mr-4'>
          <a
            className='contact-btn p-2 items-center rounded-lg cursor-pointer'
            href='www.google.com'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
