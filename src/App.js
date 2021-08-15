import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Papers from './pages/Papers';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
	<Router>
		<Navbar />
		<Switch>
		<Route path= '/guy_react' exact component={Home}/>
		<Route path= '/about' component={About}/>
		<Route path= '/papers' component={Papers}/>
		<Route path= '/resume' component={Resume}/>
		</Switch>
	</Router>
    </div>
  );
}

export default App;
