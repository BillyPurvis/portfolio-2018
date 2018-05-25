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

import Logo from './Components/Header/images/logo.svg'
import PlacedImage from './Components/Home/images/placed-app.jpg'
import SugarLogImage from './Components/Home/images/sugar-log-app.jpg'
import VueAppImage from './Components/Home/images/vue-app.jpg'




const ProjectGrid = () => (
  <div className="grid-container">
    <div className="grid-item">
      <img src={PlacedImage} alt="Placed App Webpage Image"/>
    </div>
    <div className="grid-item">
      <img src={SugarLogImage} alt="SugarLog App Logo"/>
    </div>
    <div className="grid-item">
      <img src={VueAppImage} alt="Vue App Image"/>
    </div>        
  </div>
  
)

const Home = () => (
  <div>
    <div className="page-heading">
    <h1>Hey, my name is Billy. I'm a Full Stack developer in London
specialising in PHP,  Laravel and Symfony.</h1>
  </div>
  <ProjectGrid />
  
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
            <img id="main-logo" src={Logo} alt="Billy Purvis Logo"/>
            <Navigation />
            <div className="page-content">                                    
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
