import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { keepTheme } from './utils/themes';
import { useEffect } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import ChatBot from './components/pages/chat-bot/chat-bot';
import './App.css';
import Skills from './components/skills/skills';

let msgs = ['a Frontend', 'a Backend', 'a Full Stack', 'a Developer'];

function App() {
  useEffect(() => {
    keepTheme();
    window.scrollTo(0, 0);
  });

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <Hero messages={msgs} />
                <Skills />
                <About />
                <Projects />
                <Contact />
              </Fragment>
            )}
          />
          <Route exact path='/chat-bot' component={ChatBot} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
