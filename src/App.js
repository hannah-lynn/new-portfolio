import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { keepTheme } from './utils/themes';
import { useEffect } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Nav from './components/nav/nav';
import Projects from './components/projects/projects';
import ChatBot from './components/pages/chat-bot/chat-bot';
import './App.css';

let msgs = ["I'm Hannah", "I'm a Developer"];

function App() {
  useEffect(() => {
    keepTheme();
    window.scrollTo(0, 0);
  });

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route
            exact
            path='/new-portfolio'
            render={() => (
              <Fragment>
                <Hero messages={msgs} />
                <About />
                <Projects />
                <Contact />
              </Fragment>
            )}
          />
          <Route exact path='/new-portfolio/chat-bot' component={ChatBot} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
