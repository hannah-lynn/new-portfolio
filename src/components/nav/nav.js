import './nav.css';
import React from 'react';
import wavy from '../../assets/images/wavy.png';
import { HashLink } from 'react-router-hash-link';
import DarkMode from '../darkmode/darkmode';

function Nav() {
  return (
    <nav>
      <div className='flex justify-between mt-4'>
        <div className='nav-links flex ml-4'>
          <div className='ml-2 p-2'>
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
            <HashLink
              className='p-4 hover:text-green-500 flex-row'
              to='/new-portfolio/#skills'
            >
              <li>Skills</li>
            </HashLink>
          </ul>
        </div>
        <div className='items-center mr-4 mt-4'>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
