import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavMenu from './Components/NavMenu/NavMenu';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home';
import About from './Components/Body/About';
import Work from './Components/Body/Work';
import Experience from './Components/Body/Experience';
import Blog from './Components/Body/Blog';
import Resume from './Components/Body/Resume';
import Contact from './Components/Body/Contact';

import './App.scss';

function Main() {
	return (
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route exact path='/work' component={Work}></Route>
			<Route exact path='/experience' component={Experience}></Route>
			<Route exact path='/blog' component={Blog}></Route>
			<Route exact path='/resume' component={Resume}></Route>
			<Route exact path='/contact' component={Contact}></Route>
		</Switch>
	);
}

function App() {
  return (
	<Router>
		<div>
			<NavMenu/>
			<Main/>
			<Footer/>
		</div>
	</Router>
  );
}

export default App;
