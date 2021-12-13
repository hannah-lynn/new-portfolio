import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';
import Projects from './components/projects/projects';
import { keepTheme } from './utils/themes';

let msgs = ["I'm Hannah", "I'm a Developer"];

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Hero messages={msgs} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
