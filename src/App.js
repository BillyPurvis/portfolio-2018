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
import Button from './Components/Button/button'

import Logo from './Components/Header/images/logo.svg'
import PlacedImage from './Components/Home/images/placed-app.jpg'
import SugarLogImage from './Components/Home/images/sugar-log-app.jpg'
import VueAppImage from './Components/Home/images/vue-app.jpg'




const ProjectGrid = () => (
  <div className="grid-container">
    <div className="grid-item">
      <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div>
    <div className="grid-item">
    <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div>
    <div className="grid-item">
    <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div> 
    <div className="grid-item">
      <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div>
    <div className="grid-item">
    <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div>
    <div className="grid-item">
    <img src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=1950&q=80" alt="Placed App Webpage Image"/>
    </div>        
  </div> 
)

const Article = () => (
  <div className="content-block">
    <h1>About Me</h1>
    <span className="divider"></span>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
    </p>
  <Button>
    I've got a project!
    </Button>
  </div>
) 

const Home = () => (
  <div>
    <div className="page-heading">
    <h1>Hey, my name is Billy. I'm a Full Stack developer in London
specialising in PHP,  Laravel and Symfony.</h1>
  </div>
  <ProjectGrid />
  <Article />
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
