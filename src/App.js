import logo from '../src/assets/images/logo.png';
import './App.css';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
