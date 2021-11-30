import './main.css';
import logo from '../../assets/images/logo.png';
import wavy from '../../assets/images/wavy.png';
import nz from '../../assets/images/nz.png';
import half from '../../assets/images/half-circles.png';

function Main() {
  return (
    <div className='container'>
      <div className='m-auto mt-11 main flex items-center justify-around rounded-lg'>
        <div className='main-text flex'>
          <h2 className='mr-12 text-3xl flex flex-col justify-center items-start'>
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

export default Main;
