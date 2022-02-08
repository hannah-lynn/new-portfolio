import { HashLink as Link } from 'react-router-hash-link';
import './project-card.css';

const ProjectCard = ({ img, title, description, view, github }) => {
  return (
    <div className='card sm:w-1/3 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
      <img
        src={img}
        alt='screenshot of chat bot'
        className='card-img rounded-lg m-4'
        width='440'
        height='326'
      />

      <h2 className='title font-bold my-3'>{title}</h2>
      <p className='mx-2 flex-1'>{description}</p>
      {view && github ? (
        <div className='buttons flex'>
          <a
            className='projects-btn rounded-lg mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href={view}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            View
          </a>
          <a
            className='projects-btn rounded-lg mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href={github}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Details
          </a>
        </div>
      ) : (
        <Link to={view}>
          <button className='projects-btn rounded-lg mx-auto my-3 cursor-pointer bg-gray-50 p-2'>
            Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
