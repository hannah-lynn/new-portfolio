import React, { useEffect, useState } from 'react';
import './hero.css';
import quokka from '../../assets/images/quokka.webp';

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 170,
};

function Hero({ messages }) {
  const [state, setState] = useState({
    text: '',
    message: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = '';
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === '') {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.DELETING_SPEED
      : CONSTANTS.TYPING_SPEED;
  }

  return (
    <div className='hero' id='home'>
      <div className='half-container'>
        <svg
          width='53.698433mm'
          height='49.136238mm'
          viewBox='0 0 53.698433 49.136238'
          version='1.1'
          id='svg880'
          xmlns='http://www.w3.org/2000/svg'
          className='red-dot'
        >
          <g id='layer1' transform='translate(-105.83421,-78.239571)'>
            <g
              id='g27920'
              clipPath='url(#clipPath27922)'
              transform='matrix(3.1525841,0,0,3.3343999,-225.71312,-336.40695)'
            >
              <g id='g27918'>
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263'
                  d='m 122.2,129.63483 a 8.5167236,9.4554968 0 0 1 -8.48105,9.45541 8.5167236,9.4554968 0 0 1 -8.5521,-9.3762'
                />
                <path
                  style={{ opacity: 1, fill: '#f62922', fillOpacity: 1 }}
                  id='path22236'
                  d='m 109.2195,128.32292 a 4.5513439,3.968755 0 0 1 4.54993,-3.96875 4.5513439,3.968755 0 0 1 4.55276,3.96628 4.5513439,3.968755 0 0 1 -4.54709,3.97123 4.5513439,3.968755 0 0 1 -4.5556,-3.96381 l 4.55134,-0.005 z'
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div
        className='main m-auto sm:mt-20 flex items-center justify-around rounded-lg'
        id='main'
      >
        <div className='main-text flex w-full justify-center space-x-2 sm:space-x-6 md:space-x-24'>
          <div className='cta-info flex flex-col justify-center '>
            <h2 className='text-2xl md:text-3xl flex flex-col md:items-start'>
              Hello,
              <div className='message'>
                <span>{state.text}</span>
                <span id='cursor' />
              </div>
            </h2>
            <div className='items-center mr-4 mt-6'>
              <a
                className='contact-btn py-2 px-4 items-center rounded-lg cursor-pointer'
                href='/#contact'
              >
                Contact
              </a>
            </div>
          </div>

          <img
            src={quokka}
            alt='A quokka and I'
            className='quokka'
            width='230'
            height='224'
          />
        </div>
      </div>
      <div className='half-container'>
        {/* <img src={half} alt='green half circles' className='half' /> */}
        <svg
          width='59.366478mm'
          height='22.684662mm'
          viewBox='0 0 59.366478 22.684662'
          version='1.1'
          id='svg997'
          xmlns='http://www.w3.org/2000/svg'
          className='half'
        >
          <g id='layer1' transform='translate(-109.01727,-106.75412)'>
            <g
              id='g27772'
              clipPath='url(#clipPath27774)'
              transform='translate(69.329768,16.875004)'
            >
              <g id='g27770'>
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5'
                  d='m 56.72065,103.10828 a 8.5167236,9.4554968 0 0 1 -8.481049,9.45541 8.5167236,9.4554968 0 0 1 -8.5521,-9.3762'
                />
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5-8'
                  d='m 56.72065,89.879112 a 8.5167236,9.4554968 0 0 1 -8.481049,9.455414 8.5167236,9.4554968 0 0 1 -8.5521,-9.376201'
                />
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5-4'
                  d='m 99.053978,103.10828 a 8.5167236,9.4554968 0 0 1 -8.481049,9.45541 8.5167236,9.4554968 0 0 1 -8.552099,-9.3762'
                />
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5-6'
                  d='m 77.887314,103.10828 a 8.5167236,9.4554968 0 0 1 -8.481049,9.45541 8.5167236,9.4554968 0 0 1 -8.5521,-9.3762'
                />
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5-1'
                  d='m 77.887314,89.87912 a 8.5167236,9.4554968 0 0 1 -8.481049,9.455414 8.5167236,9.4554968 0 0 1 -8.5521,-9.376201'
                />
                <path
                  style={{ fill: '#009c79', fillOpacity: 1 }}
                  id='path21263-5-2'
                  d='M 99.053978,89.879112 A 8.5167236,9.4554968 0 0 1 90.572929,99.334526 8.5167236,9.4554968 0 0 1 82.02083,89.958325'
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
