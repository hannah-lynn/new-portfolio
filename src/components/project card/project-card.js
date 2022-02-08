import { HashLink as Link } from 'react-router-hash-link';
import './project-card.css';

const ProjectCard = ({ img, title, description, href, link }) => {
  return (
    <div className='card md:w-1/3 lg:w-1/4 transform flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
      <img
        src={img}
        alt='screenshot of chat bot'
        className='card-img rounded-lg m-4'
        width='440'
        height='326'
      />

      <h2 className='title font-bold my-3'>{title}</h2>
      <p className='mx-2 flex-1'>{description}</p>
      {href ? (
        <a
          className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
          href={href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          GitHub
        </a>
      ) : (
        <Link to={link}>
          <button className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'>
            Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
