import './App.css';
import About from './components/about/about';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
