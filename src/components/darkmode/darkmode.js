import React from 'react';
import { setTheme } from '../../utils/themes';
import './darkmode.css';

const DarkMode = () => {
  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  };

  return (
    <div className='mode-toggle flex items-center mr-4'>
      <div className='flex items-center justify-center w-full mb-12'>
        <label
          className='flex items-center cursor-pointer'
          htmlFor='darkMode-toggle'
          aria-label='darkMode-toggle'
        >
          <div className='relative'>
            <input
              type='checkbox'
              name='darkMode-toggle'
              id='darkMode-toggle'
              className='sr-only'
              onClick={handleOnClick}
              aria-checked='true'
            />
            <div className='toggle-area block w-14 h-8 rounded-full' />
            <div className='dot absolute left-1 top-1 w-6 h-6 rounded-full transition' />
          </div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
