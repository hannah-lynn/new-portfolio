import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';
import Projects from './components/projects/projects';

let msgs = ["I'm Hannah", "I'm a Developer"];

function App() {
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
