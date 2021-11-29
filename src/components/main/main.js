import './main.css';
import logo from '../../assets/images/logo.png';
import wavy from '../../assets/images/wavy.png';
import nz from '../../assets/images/nz.png';

function Main() {
  return (
    <div className='m-auto mt-11 main flex items-center justify-around rounded-lg'>
      <div className='main-text flex'>
        <h2 className='mr-6 flex flex-col '>
          Hello,
          <span>I'm a Developer</span>
        </h2>
        <img src={nz} alt='Picture' />
      </div>
    </div>
  );
}

export default Main;
