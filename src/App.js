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
import ProjectGrid from './Scenes/Project/Components/project-grid'
import Navigation from './Components/Navigation/navigation'
import Button from './Components/Button/button'

// Project Components
import ProjectGo from './Scenes/Project/Components/projects/project-go'
import ProjectBash from './Scenes/Project/Components/projects/project-bash'
import ProjectPlaced from './Scenes/Project/Components/projects/project-placed'
import ProjectJenkins from './Scenes/Project/Components/projects/project-jenkins'
import ProjectHiveHub from './Scenes/Project/Components/projects/project-hivehub'
import ProjectSugarLog from './Scenes/Project/Components/projects/project-sugarlog'

// Image imports
import Logo from './Components/Header/images/logo.png'

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
/**
 * Article Component
 */
const Article = () => (
  <div className="content-block">
    <h1>About Me</h1>
    <span className="divider"></span>
    <p>
    London based Software Developer with over 3 year experience in developement. Currently I'm working in <strong>Go</strong> building low latency, scalable REST API connecting to various third party
    integrations managing huge amounts of data - something I absolutely love doing. I'm well versed in multiple languages, frameworks and tools. Most notably Go, PHP, Laravel, Symfony, MySQL and Javascript. 
    </p>
    <p>
      Along with languages I've used, I've implemented custom Git strategies for businesses and integrated Jenkins into teams and at times, reducing deployment speeds by 97%! I've also written about 
      it <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@billypurvis/how-jenkins-reduced-our-deployment-time-by-97-3510040a69d0">here</a>!
      </p>      
    <Button href="#" onClick={sendEmail}>
    I've got a project!
    </Button>
  </div>
) 

const Home = () => (
  <div>
    <div className="page-heading">
    <h1>Hey, my name is Billy. I'm a Software Developer in London
writing Go, PHP, Laravel and Symfony.</h1>
  </div>
    <ProjectGrid />
    <Article />
  </div>
)


const ProjectRoutesComponent = () => {
  const ProjectRoutes = [
    {
      path: '/projects/placed-app/',
      component: ProjectPlaced
    },
    {
      path: '/projects/hivehub-app/',
      component: ProjectHiveHub
    },
    {
      path: '/projects/go-app/',
      component: ProjectGo
    },
    {
      path: '/projects/jenkins-pipelines/',
      component: ProjectJenkins
    },
    {
      path: '/projects/bash-project/',
      component: ProjectBash
    },
    {
      path: '/projects/sugarlog-app/',
      component: ProjectSugarLog
    }
  ]
  
  return ProjectRoutes.map( (item, index) => {                
    return <Route key={index} exact path={item.path} component={item.component}/>    
  })
}

const Projects = () => (
  <div className="content-block full">
    <h1>Projects</h1>        
    <ProjectGrid />
  </div>
)

const Contact = () => (
  <div className="content-block">
    <h1>Contact</h1>    
    <p>
      If you're looking for a new hire with Go experience, a good understanding of Linux environment, Jenkins experience and over 3 years software experience developing UIs, APIs, new processes and more. 
      Send me over an email, or checkout my <a href="https://www.linkedin.com/in/billypurvis/">LinkedIn</a> and see what I've been doing! 
    </p>
    <Button href="#" onClick={sendEmail}>
    Say Hello!
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
                {
                  ProjectRoutesComponent()                               
                }
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
