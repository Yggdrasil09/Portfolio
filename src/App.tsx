import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavMenu from './Components/NavMenu/NavMenu';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home/Home';
import About from './Components/Body/About/About';
import Work from './Components/Body/Work/Work';
import Experience from './Components/Body/Experience/Experience';
import Blog from './Components/Body/Blog/Blog';
import Resume from './Components/Body/Resume/Resume';
import Contact from './Components/Body/Contact/Contact';

import './App.scss';

function Main(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <NavMenu />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
