import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Home = () => (
  <div className="page-container">
    <header>
        <div>
            <h1>Home</h1>         
        </div>
    </header>
  </div>
)

const Projects = () => (
  <div>
      <h1>Projects</h1>
  </div>
)

const Blog = () => (
  <div>
      <h1>Blog</h1>
  </div>
)

const Contact = () => (
  <div>
      <h1>Contact</h1>
  </div>
)

const Nav = () => (
  <Router>
      <div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
      </div>

      
  </Router>
)

class App extends Component {
  render() {
    return (
     <Nav />
    );
  }
}

export default App;
