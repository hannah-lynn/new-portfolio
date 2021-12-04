import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';
import Projects from './components/projects/projects';

let msgs = ["I'm Hannah", "I'm a Developer"];

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero messages={msgs} />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
