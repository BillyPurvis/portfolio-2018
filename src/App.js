import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

// CSS
import './App.css';

// Custom Components
import ProjectHeader from './Scenes/Project/Components/project-header'
import Navigation from './Components/Navigation/navigation'
import Button from './Components/Button/button'

import Logo from './Components/Header/images/logo.svg'
import Background from './Scenes/Home/images/bg.jpg'

import PlacedAppImage from './Scenes/Home/images/placed-app.png'


class ProjectGrid extends React.Component {  
  renderInSequence() {
    const gridItem = document.querySelectorAll('.grid-item')

    gridItem.forEach( (item, index) => {
      setTimeout( () => {
          item.classList.add('active')
      }, 320 * index)
    } )
    //classToAdd
  }
  componentDidMount() {
    this.renderInSequence()
  }    
  render() {
    return (
        <div className="grid-container">      
          
             {/* //TODO: Add Link */}
              <div className={`grid-item`} style={{
                backgroundImage: `url(${PlacedAppImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}>
              </div>              
            

          <div className={`grid-item`}>
          <Link to="/projects/hivehub-app">
              <img src={Background} alt=""/>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/sugarlog-app">
              <img src={Background} alt=""/>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/placed-app">
              <img src={Background} alt=""/>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/placed-app">
              <img src={Background} alt=""/>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/placed-app">
              <img src={Background} alt=""/>
            </Link>
          </div>      
      </div> 
    )
  }
}
/**
 * Opens email client or webpage to send email
 * to contact
 * @param {*} e 
 */
const sendEmail = (e) => {
  e.preventDefault()
  window.location = 'mailto:purvisbilly@outlook.com?subject=Website%20Enquiry'
  return false;  
}
// TODO: Move to component files
/**
 * Article Component
 */
const Article = () => (
  <div className="content-block">
    <h1>About Me</h1>
    <span className="divider"></span>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
    </p>
    <Button href="#" onClick={sendEmail}>
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
  <div className="content-block full">
    <h1>Projects</h1>    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
    </p>
    <ProjectGrid />
  </div>
)

const ProjectPlaced = () => (
  <div>
      <ProjectHeader title="Placed App"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
      </p>
      <ProjectGrid />
  </div>
)

const ProjectHiveHub = () => (
  <div>
      <ProjectHeader title="HiveHub App"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
      </p>
      <ProjectGrid />
  </div>
)

const ProjectSugarLog = () => (
  <div>
      <ProjectHeader title="SugarLog App"/>
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
  <div className="content-block full">
    <h1>Contact</h1>    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum ante. Cras viverra est fermentum felis vehicula porttitor. Praesent posuere eros ut dignissim consequat. Etiam in neque condimentum, commodo urna ut, scelerisque tortor. Maecenas id neque vel dui pellentesque gravida eu eget mauris. Donec consectetur magna eget dui facilisis, eu pharetra velit laoreet. Curabitur vehicula, velit sit amet consectetur porta, ante erat tristique ligula, vel posuere ex libero id diam.
    </p>
    <Button href="#" onClick={sendEmail}>
    I've got a project!
    </Button>
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="page-container">              
        <Router>
          <div className="page-body">
            <Link to="/">
              <img id="main-logo" src={Logo} alt="Billy Purvis Logo"/>
            </Link>
            <Navigation />
            <div className="page-content">         
            <Switch>                      
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/placed-app/" component={ProjectPlaced}/>
                <Route exact path="/projects/hivehub-app/" component={ProjectHiveHub}/>
                <Route exact path="/projects/sugarlog-app/" component={ProjectSugarLog}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </Switch>
            </div>  
          </div>
        </Router>   
      </div>      
    );
  }
}

export default App;
