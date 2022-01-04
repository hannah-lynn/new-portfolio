import './header.css';
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import DarkMode from '../darkmode/darkmode';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 641);
  useEffect(() => {
    const ac = new AbortController();
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 641;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
    return () => ac.abort();
  }, [isMobile]);

  return (
    <header>
      <div
        className={`${isMobile ? 'justify-end' : 'justify-between'} flex mt-2`}
      >
        <nav
          role='navigation'
          className={`${isMobile ? 'hidden' : ''} nav-links flex ml-4`}
        >
          <ul className='cursor-pointer sm:flex items-center space-x-6 md:space-x-8'>
            <li>
              <HashLink
                className='p-2 md:p-4 hover:text-green-500 flex-row'
                to='/#home'
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                className='p-4 hover:text-green-500 flex-row'
                to='/#about'
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                className='p-4 hover:text-green-500 flex-row'
                to='/#projects'
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                className='p-4 hover:text-green-500 flex-row'
                to='/#skills'
              >
                Skills
              </HashLink>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            isMobile ? '' : 'hidden'
          } flex mobile-nav fixed bottom-0 w-full justify-around`}
        >
          <HashLink
            className='p-4 hover:text-green-500 flex-row'
            to='/#home'
            aria-label='Home'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='h-10 w-10'
              fill='#01422A'
            >
              <path d='M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z' />
            </svg>
          </HashLink>
          <HashLink
            className='p-4 hover:text-green-500 flex-row'
            to='/#about'
            aria-label='About'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='h-10 w-10'
              fill='#01422A'
            >
              <path d='M13 16h-2v-6h2v6zm-1-10.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm0-2.75c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z' />
            </svg>
          </HashLink>
          <HashLink
            className='p-4 hover:text-green-500 flex-row'
            to='/#projects'
            aria-label='Projects'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='h-10 w-10'
              fill='#01422A'
            >
              <path d='M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8zm10.2-16.2c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z' />
            </svg>
          </HashLink>
          <HashLink
            className='p-4 hover:text-green-500 flex-row'
            to='/#skills'
            aria-label='Skills'
          >
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
              viewBox='0 0 24 24'
              className='h-10 w-10'
              fill='#01422A'
            >
              <path d='M15.996 23.999h-12.605s.734-3.931.633-5.686c-.041-.724-.161-1.474-.54-2.104-.645-1-2.636-3.72-2.475-7.43.224-5.209 4.693-8.779 10.126-8.779 5.098 0 8.507 3.001 9.858 7.483.328 1.079.311 1.541-.151 2.607l-.006.013 1.751 2.142c.26.381.413.791.413 1.239 0 .547-.233 1.045-.61 1.399-.368.345-.767.452-1.248.642 0 0-.576 2.592-.873 3.291-.7 1.643-1.97 1.659-2.97 1.849-.394.083-.49.133-.681.681-.208.591-.363 1.435-.622 2.653m-4.842-22c-4.285.048-7.74 2.548-8.121 6.488-.192 1.991.463 3.986 1.516 5.705.611 1 1.305 1.592 1.464 3.875.091 1.313-.05 2.636-.241 3.932h8.604c.141-.645.35-1.485.687-2.057.449-.766 1.097-1.099 1.926-1.254.838-.148 1.238-.059 1.489-.785.212-.579.612-2.221.831-3.902 1.203-.335.612-.161 1.671-.559-.206-.234-1.918-2.314-2.045-2.6-.336-.759-.046-1.19.225-1.913.086-.251.06-.357-.009-.613-1.049-3.949-3.891-6.317-7.997-6.317m.52 3c.242.684.312 1.122.841 1.341h.001c.53.221.893-.044 1.543-.353l.953.952c-.312.655-.573 1.016-.354 1.544v.001c.219.528.653.597 1.342.841v1.347c-.681.243-1.123.313-1.342.843-.22.529.043.891.354 1.544l-.953.952c-.657-.313-1.014-.574-1.541-.355h-.001c-.531.222-.601.661-.843 1.343h-1.348c-.242-.684-.312-1.122-.841-1.34l-.001-.001c-.529-.221-.892.043-1.544.353l-.952-.952c.305-.643.574-1.011.353-1.545-.22-.529-.661-.599-1.341-.842v-1.347c.681-.242 1.121-.312 1.341-.841.22-.531-.042-.891-.353-1.545l.952-.952c.657.312 1.015.573 1.544.353h.001c.529-.219.599-.661.841-1.341h1.348zm-.674 6.667c-.92 0-1.667-.746-1.667-1.667s.747-1.667 1.667-1.667 1.666.746 1.666 1.667-.746 1.667-1.666 1.667' />
            </svg>
          </HashLink>
          <HashLink
            className='p-4 hover:text-green-500 flex-row'
            to='/#contact'
            aria-label='Contact'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='h-10 w-10'
              fill='#01422A'
            >
              <path d='M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z' />
            </svg>
          </HashLink>
        </div>
        <div className='flex justify-center items-center mr-4'>
          <div className='socials flex items-center'>
            <a
              className='p-4 hover:text-green-500 flex-row'
              aria-label='Twitter'
              href='https://twitter.com/hanwhocodes'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='h-8 w-8'
                fill='#01422A'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
              </svg>
            </a>
            <a
              className='p-4 hover:text-green-500 flex-row'
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/hannah-l'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='h-8 w-8'
                fill='#01422A'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
            <a
              className='p-4 hover:text-green-500 flex-row'
              aria-label='GitHub'
              href='https://github.com/hannah-lynn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='h-8 w-8'
                fill='#01422A'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </div>

          <DarkMode />
        </div>
      </div>
    </header>
  );
}

export default Header;
