import './nav.css';
import wavy from '../../assets/images/wavy.png';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <nav>
      <div className='flex justify-between mt-4'>
        <div className='nav-links flex ml-4'>
          <div className='ml-2 p-2'>
            {/* <h1 className='name md:hidden'>Hannah Lynn</h1> */}
            <img className='wavy' src={wavy} alt='wavy lines' />
          </div>
          <ul className='cursor-pointer hidden md:flex items-center ml-2 space-x-12'>
            <HashLink
              className='p-4 hover:text-green-500 flex-row'
              to='/new-portfolio/#home'
            >
              <li>Home</li>
            </HashLink>
            <HashLink
              className='p-4 hover:text-green-500 flex-row'
              to='/new-portfolio/#about'
            >
              <li>About</li>
            </HashLink>
            <HashLink
              className='p-4 hover:text-green-500 flex-row'
              to='/new-portfolio/#projects'
            >
              <li>Projects</li>
            </HashLink>
          </ul>
        </div>
        <div className='items-center mr-4 mt-4'>
          <a
            className='contact-btn py-2 px-4 items-center rounded-lg cursor-pointer'
            href='/new-portfolio/#contact'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
