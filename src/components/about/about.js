import './about.css';

function About() {
  return (
    <div className='flex flex-col mt-24 m-auto w-4/5' id='about'>
      <h1 className='font-bold text-xl mb-4'>About Me</h1>
      <p className='text-left'>
        I'm a self taught developer from Manchester, UK. I started teaching
        myself HTML, CSS, and Javascript in 2019, when I was in New Zealand, and
        was really happy to start a full time developer role in October 2020.
        <br />
        Currently, I work frontend with Angular and Typescript and backend with
        PecoTS and MySQL. I enjoying coding in my spare time, where I build
        things, like this website, using React. I'm constantly looking for new
        things to learn and better ways to write my code, that's part of why I
        love coding.
        <br />
        Previously, I worked in retail management, for Tesco in the UK and Urban
        Outfitters in Berlin, Germany. I learnt a lot here about customers,
        growing business, working to targets and leading teams.
        <br />
        I'm also a volunteer for Care4Calais, a volunteer run refugee charity
        where I help give direct aid to asylum seekers in the UK. In my spare
        time I like to grow plants and write long lists of ideas for things to
        code.
      </p>
    </div>
  );
}

export default About;
