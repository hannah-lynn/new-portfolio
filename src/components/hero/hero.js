import React, { useEffect, useState } from 'react';
import './hero.css';
import quokka from '../../assets/images/quokka.png';
import half from '../../assets/images/half-circles.png';
import halfLg from '../../assets/images/lg-half-circ.png';

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
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
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <div className='hero' id='home'>
      <div className='half-container'>
        <img
          src={halfLg}
          alt='green half circle with red dot'
          className='red-dot'
        />
      </div>
      <div className='m-auto mt-20 main flex items-center justify-around rounded-lg'>
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
                href='/new-portfolio/#contact'
              >
                Contact
              </a>
            </div>
          </div>

          <img src={quokka} alt='A quokka and I' className='quokka' />
        </div>
      </div>
      <div className='half-container'>
        <img src={half} alt='green half circles' className='half' />
      </div>
    </div>
  );
}

export default Hero;
