import './projects.css';
import essay from '../../assets/images/essay-ss.webp';
import plant from '../../assets/images/plant-shop.webp';
import calculator from '../../assets/images/calculator.webp';
import countries from '../../assets/images/countries.webp';
import rps from '../../assets/images/rps.webp';
import tictactoe from '../../assets/images/tictactoe.webp';
import chatbot from '../../assets/images/chat-bot.webp';
import aloe from '../../assets/images/aloe-you.webp';
import bill from '../../assets/images/bill.webp';
import ProjectCard from '../project card/project-card';

function Projects() {
  return (
    <div className='flex flex-col my-10 m-auto w-5/6' id='projects'>
      <h1 className='font-bold text-xl my-4'>Projects</h1>
      <div className='card-container justify-center md:flex flex-wrap mt-10 w-full'>
        <ProjectCard
          img={aloe}
          title={'Aloe You'}
          description={`A WIP plant shop. I'm building this to improve my React skills,
            learn Firebase, experiment with GraphQL, Hooks and Redux.`}
          href={`https://github.com/hannahl87/aloe-you`}
        />
        <ProjectCard
          img={chatbot}
          title={'Chat Bot'}
          description={`This chat bot was built using Typescript, Angular with Tailwind and
            CSS. Please click to see a video of the bot working.`}
          link={`/chat-bot`}
        />
        <ProjectCard
          img={essay}
          title={'Essay Site'}
          description={`A site to display essays and link back to criteria or reference
            points in the essay. Made using React and React Tabs and styled with
            Tailwind CSS.`}
          href={`https://github.com/hannahl87/essay-site`}
        />
        <ProjectCard
          img={calculator}
          title={'Calculator'}
          description={`A simple calculator built using HTML, CSS and Javascript.`}
          href={`https://github.com/hannahl87/calculator`}
        />
        <ProjectCard
          img={plant}
          title={'Plant Shop'}
          description={`A fully responsive single page website built using HTML, CSS and
            Javascript. Showcasing an animated nav on smaller screens.`}
          href={`https://github.com/hannahl87/theplantshop`}
        />
        <ProjectCard
          img={countries}
          title={'Countries'}
          description={`Using Rest Countries API you can search through to find your country
            of choice with Capital City and flag.`}
          href={`https://github.com/hannahl87/countries`}
        />
        <ProjectCard
          img={rps}
          title={'Rock, Paper, Scissors'}
          description={`A cute rock paper scissors game that can be played against the
            computer on smaller and larger screens.`}
          href={`https://github.com/hannahl87/rockpaperscissors`}
        />
        <ProjectCard
          img={tictactoe}
          title={'Tick Tac Toe'}
          description={`Tic Tac Toe can is a responsive 2 player game utilising simple
            javascript is along with HTML and CSS.`}
          href={`https://github.com/hannahl87/tictactoe`}
        />
        <ProjectCard
          img={bill}
          title={'Bill Splitter'}
          description={`Bill splitting application build using HTML, CSS and JS, allows users to type in bill total, add service, and split between diners`}
          href={`https://github.com/hannahl87/billsplitter`}
        />
      </div>
    </div>
  );
}

export default Projects;
