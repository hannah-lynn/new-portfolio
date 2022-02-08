import './projects.css';
import essay from '../../assets/images/essay-ss.webp';
import chatbot from '../../assets/images/chat-bot.webp';
import aloe from '../../assets/images/aloe-you.webp';
import sport from '../../assets/images/sport-culture.webp';
import ProjectCard from '../project card/project-card';

function Projects() {
  return (
    <div className='flex flex-col my-10 m-auto w-4/5' id='projects'>
      <h1 className='font-bold text-xl my-4'>Featured Projects</h1>
      <div className='card-container justify-center sm:flex flex-wrap mt-10'>
        <ProjectCard
          img={sport}
          title={'Sport Culture'}
          description={`A sport shop built using Typescript/Angular. Items are fetched from an api and can be added and removed from the basket`}
          view={`https://github.com/hannah-lynn/sport-culture`}
        />
        <ProjectCard
          img={aloe}
          title={'Aloe You'}
          description={`A WIP plant shop. I'm building this to improve my React skills,
            learn Firebase, experiment with GraphQL, Hooks and Redux.`}
          view={`https://hannah-lynn.github.io/aloe-you/`}
          github={`https://github.com/hannah-lynn/aloe-you`}
        />
        <ProjectCard
          img={chatbot}
          title={'Chat Bot'}
          description={`This chat bot was built using Typescript, Angular with Tailwind and
            CSS. Please click to see a video of the bot working.`}
          view={`/chat-bot`}
        />
        <ProjectCard
          img={essay}
          title={'Essay Site'}
          description={`A site to display essays and link back to criteria or reference
            points in the essay. Made using React and React Tabs and styled with
            Tailwind CSS.`}
          view={`https://hannah-lynn.github.io/essay-site`}
          github={`https://github.com/hannah-lynn/essay-site`}
        />
        {/* <ProjectCard
          img={calculator}
          title={'Calculator'}
          description={`A simple calculator built using HTML, CSS and Javascript.`}
          view={`https://hannah-lynn.github.io/calculator`}
          github={`https://github.com/hannah-lynn/calculator`}
        />
        <ProjectCard
          img={plant}
          title={'Plant Shop'}
          description={`A fully responsive single page website built using HTML, CSS and
            Javascript. Showcasing an animated nav on smaller screens.`}
          view={`https://hannah-lynn.github.io/theplantshop`}
          github={`https://github.com/hannah-lynn/theplantshop`}
        />
        <ProjectCard
          img={countries}
          title={'Countries'}
          description={`Using Rest Countries API you can search through to find your country
            of choice with Capital City and flag.`}
          view={`https://hannah-lynn.github.io/countries`}
          github={`https://github.com/hannah-lynn/countries`}
        />
        <ProjectCard
          img={rps}
          title={'Rock, Paper, Scissors'}
          description={`A cute rock paper scissors game that can be played against the
            computer on smaller and larger screens.`}
          view={`https://hannah-lynn.github.io/rockpaperscissors`}
          github={`https://github.com/hannah-lynn/rockpaperscissors`}
        />
        <ProjectCard
          img={tictactoe}
          title={'Tick Tac Toe'}
          description={`Tic Tac Toe can is a responsive 2 player game utilising simple
            javascript is along with HTML and CSS.`}
          view={`https://hannah-lynn.github.io/tictactoe`}
          github={`https://github.com/hannah-lynn/tictactoe`}
        />
        <ProjectCard
          img={bill}
          title={'Bill Splitter'}
          description={`Bill splitting application build using HTML, CSS and JS, allows users to type in bill total, add service, and split between diners`}
          view={`https://hannah-lynn.github.io/billsplitter`}
          github={`https://github.com/hannah-lynn/billsplitter`}
        /> */}
      </div>
    </div>
  );
}

export default Projects;
