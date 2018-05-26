import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// CSS
import './App.css';

// Custom Components
import ProjectHeader from './Scenes/Project/Components/project-header'
import Navigation from './Components/Navigation/navigation'
import Button from './Components/Button/button'

import Logo from './Components/Header/images/logo.svg'
import Background from './Scenes/Home/images/bg.jpg'


class ProjectGrid extends React.Component {  
  renderInSequence() {
    const gridItem = document.querySelectorAll('.grid-item')

    gridItem.forEach( (item, index) => {
      setTimeout( () => {
          item.classList.add('active')
      }, 340 * index)
    } )
    //classToAdd
  }
  componentDidMount() {
    this.renderInSequence()
  }    
  render() {
    return (
        <div className="grid-container">
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>
          <div className={`grid-item`}>
            <img src={Background} alt=""/>
          </div>      
      </div> 
    )
  }
}

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
      <ProjectHeader />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
      </p>
      <ProjectGrid />
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
