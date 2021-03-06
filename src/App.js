import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components


import Index from '../src/Components/Index';
import Resume from '../src/Components/Resume';
import Projects from '../src/Components/Projects';
import Contacts from '../src/Components/Contacts';

class App extends Component {
  render() {
    return (
 <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <Link className="navbar-brand" to="/"> <i className="fas fa-users-cog"></i> </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={Index} />
            <Route  path='/resume' component={Resume}/>
            <Route  path='/projects' component={Projects} />
            <Route  path='/contacts' component={Contacts} />
          </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
