import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// CSS
import './App.css';

// Custom Components
import ProjectHeader from './Scenes/Project/Components/project-header'
import Navigation from './Components/Navigation/navigation'


const Home = () => (
  <div>
    <h1>Home</h1>
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

class App extends Component {
  render() {
    return (
      <div className="page-container">              
        <Router>
          <div className="page-body">
            <Navigation />
            <div className="page-container">                                    
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/contact" component={Contact}/>
            </div>  
          </div>
        </Router>   
      </div>      
    );
  }
}

export default App;
