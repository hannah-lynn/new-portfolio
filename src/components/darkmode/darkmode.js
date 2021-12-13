import React, { useEffect, useState } from 'react';
import { setTheme } from '../../utils/themes';
import './darkmode.css';

const DarkMode = () => {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setTogClass('light');
    } else {
      setTheme('theme-dark');
      setTogClass('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogClass('dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTogClass('light');
    }
  }, [theme]);

  return (
    <div className='mode-toggle flex items-center mr-4'>
      <div className='flex items-center justify-center w-full mb-12'>
        <label
          htmlFor='toggle'
          for='toggle'
          className='flex items-center cursor-pointer'
        >
          <div className='relative'>
            {togClass === 'light' ? (
              <input
                type='checkbox'
                id='toggle'
                className='sr-only'
                onClick={handleOnClick}
                checked
              />
            ) : (
              <input
                type='checkbox'
                id='toggle'
                className='sr-only'
                onClick={handleOnClick}
              />
            )}
            <div className='toggle-area block w-14 h-8 rounded-full'></div>
            <div className='dot absolute left-1 top-1 w-6 h-6 rounded-full transition'></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
