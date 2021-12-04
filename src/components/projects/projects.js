import './projects.css';
import essay from '../../assets/images/essay-ss.png';
import plant from '../../assets/images/plant-shop.png';
import calculator from '../../assets/images/calculator.png';

function Projects() {
  return (
    <div className='flex flex-col my-10 m-auto w-4/5'>
      <h1 className='font-bold text-xl my-4'>Projects</h1>
      <div className='card-container justify-center md:flex mt-10 w-full md:space-x-8'>
        <div className='card md:w-1/2 lg:w-1/3 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6'>
          <img
            src={essay}
            alt='screenshot of essay site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Essay Site</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <button className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'>
            More
          </button>
        </div>
        <div className='card md:w-1/2 lg:w-1/3 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6'>
          <img
            src={calculator}
            alt='screenshot of essay site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Calculator</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <button className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'>
            More
          </button>
        </div>
        <div className='card md:w-1/2 lg:w-1/3 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6'>
          <img
            src={plant}
            alt='screenshot of essay site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Plant Shop</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <button className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'>
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
