import './about.css';

function About() {
  return (
    <div className='flex flex-col my-10 m-auto w-4/5' id='about'>
      <h1 className='font-bold text-xl my-4'>About Me</h1>
      <div className='grid grid-cols-2 mt-10 md:gap-4'>
        <div className='text-left col-span-2 md:col-span-1'>
          <p>
            I'm a self taught, full stack developer, from Manchester, UK. I
            started teaching myself HTML, CSS, and Javascript in 2019, when I
            was in New Zealand, and was really happy to start a full time
            developer role in October 2020.
          </p>
          <p className='mt-2'>
            I enjoy building web apps in my spare time, where I build things,
            like this website. I'm constantly looking for new things to learn
            and better ways to write my code, that's part of why I love coding.
          </p>
          <p className='mt-2'>
            Previously, I worked as a Deputy Store Manager of a 60,000sq ft
            Tesco Extra, with a turnover of £450k per week, and also at Urban
            Outfitters in Berlin. Working in retail management has given me a
            great perspective.
          </p>
        </div>
        <div className='text-left col-span-2 md:col-span-1'>
          <p>
            I'm always thinking of the customer journey - how to drive sales,
            footfall, reduce loss and also working together, leading a team to
            exceed targets.
          </p>
          <p className='mt-2'>
            In my spare time I like to grow houseplants and travel. I've lived
            and worked in 5 countries and travelled many more. One of my
            favorite memories is climbing 'Volcan Acatenango', in Guatemala. We
            camped 4000m up and watched the neighbouring Volcano, Fuego, erupt
            every 10 minutes!
          </p>
          <p className='mt-2'>
            I'm currently volunteering as a mentor for School of Code and
            Care4Calais, a volunteer run refugee charity where I help give
            direct aid and support to asylum seekers and refugees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
