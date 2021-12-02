import './hero.css';
import logo from '../../assets/images/logo.png';
import wavy from '../../assets/images/wavy.png';
import nz from '../../assets/images/nz.png';
import half from '../../assets/images/half-circles.png';
import halfLg from '../../assets/images/lg-half-circ.png';
import lines from '../../assets/images/lines.png';

function Hero() {
  return (
    <div className='hero'>
      <div className='half-container'>
        <img
          src={halfLg}
          alt='green half circle with red dot'
          className='red-dot'
        />
      </div>
      <div className='m-auto mt-20 main flex items-center justify-around rounded-lg'>
        <div className='main-text flex w-full justify-center space-x-6 md:space-x-24'>
          <h2 className='text-2xl md:text-3xl flex flex-col justify-center md:items-start'>
            Hello,
            <span>I'm a Developer</span>
          </h2>
          <img src={nz} alt='Picture' />
        </div>
      </div>
      <div className='half-container'>
        <img src={half} alt='green half circles' className='half' />
      </div>
    </div>
  );
}

export default Hero;
