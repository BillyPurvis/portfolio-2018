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

import PlacedAppImage from './Scenes/Home/images/placed-app.jpg'
import SugarlogImage from './Scenes/Home/images/sugar-log-app.jpg'
import JenkinsImage from './Scenes/Home/images/jenkins-icon.jpg'
import GoAppImage from './Scenes/Home/images/go-icon.jpg'
import HiveHuvAppImage from './Scenes/Home/images/hive-hub.jpg'
import BashImage from './Scenes/Home/images/bash-icon.jpg'


class ProjectGrid extends React.Component {  
  renderInSequence() {
    const gridItem = document.querySelectorAll('.grid-item')

    gridItem.forEach( (item, index) => {
      setTimeout( () => {
          item.classList.add('active')
      }, 125 * index)
    } )
  }
  componentDidMount() {
    this.renderInSequence()
  }    
  render() {
    return (
        <div className="grid-container">      
                    
             <div className={`grid-item`}>
             <Link to="/projects/placed-app">
                <div style={{
                backgroundImage: `url(${PlacedAppImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
              </Link>
              </div>    
              
              <div className={`grid-item`}>
                <Link to="/projects/go-app">
                  <div style={{
                    backgroundImage: `url(${GoAppImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}></div>
                </Link>
            </div>

          <div className={`grid-item`}>
          <Link to="/projects/sugarlog-app">
          <div style={{
                backgroundImage: `url(${SugarlogImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
            </Link>
          </div>          
          <div className={`grid-item`}>
            <Link to="/projects/jenkins-pipelines">
               <div style={{
                backgroundImage: `url(${JenkinsImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/hivehub-app">
               <div style={{
                backgroundImage: `url(${HiveHuvAppImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
            </Link>
          </div>
          <div className={`grid-item`}>
            <Link to="/projects/bash-project">
               <div style={{
                backgroundImage: `url(${BashImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
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
/**
 * Article Component
 */
const Article = () => (
  <div className="content-block">
    <h1>About Me</h1>
    <span className="divider"></span>
    <p>
    London based Software Developer with over 3 year experience in developement. Currently I'm working in <strong>Go</strong> building low latency, scalable REST API connecting to various third party
    integrations managing huge amounts of data - something I absolutly love doing. I'm well versed in multiple languages, frameworks and tools. Most notably Go, PHP, Laravel, Symfony, MySQL and Javascript. 
    
    </p>
    <p>
      Along with languages I've used, I've implemented custom GIT strategies for businesses and integrated Jenkins into teams and at times, reducing deployment speeds by 97%! I've also written about 
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
      <ProjectHeader title="HiveHub App" roleTitle="Go Developer, Founder"/>
      <p>
        HiveHub is a side project of mine that aims to make monitoring and tracking Bee Hives easier than ever. With the ability to record a hive's temprement, location, size, colony status and record super by super, frame by frame. It gives
        Bee Keepers even more control of their hives on the fly. No more paper notes, Excel sheets or remembering. Just open HiveHub, record the status and you're on your way. 
      </p>
      <p>
        HiveHub also automatically records the last time you saw a hive and reminds you when to check them again so you'll never forget to feed again. We're also aiming to get more people into Bee Keeping, so 
        we're creating user profiles and community chats to connect local and international Bee Keepers! We're also planning to work with approved Bee Clubs to generate courses you can read on your phone getting
        new people into Bee Keeping!
      </p>

      <p>
        HiveHub is built with Go and harnesses all the power of it, as well as using React Native to power both the iOS and Android App. Currently we're in the early stages, so developement
        is moving forward, but there's no app release quite just yet! 
      </p>
      <ProjectGrid />
  </div>
)

const ProjectSugarLog = () => (
  <div>
      <ProjectHeader title="SugarLog App"/>
      <p>
      SugarLog aims to improve how patients log, manage and track their diabetes records, without patient paywalls. SugarLog allows users to create logs wherever they are, analyse their history with graphs, setting up schedules to remind them when to take results or medication. SugarLog also allows users to export their data to their medical team with ease, avoiding scraps of paper, awkward device exports, and forgetting to bring results; it's all done for them! 
      </p>
      <ProjectGrid />
  </div>
)

const ProjectGo = () => (
  <div>
      <ProjectHeader title="Go Microservice"/>
      <p>
      SugarLog aims to improve how patients log, manage and track their diabetes records, without patient paywalls. SugarLog allows users to create logs wherever they are, analyse their history with graphs, setting up schedules to remind them when to take results or medication. SugarLog also allows users to export their data to their medical team with ease, avoiding scraps of paper, awkward device exports, and forgetting to bring results; it's all done for them! 
      </p>
      <ProjectGrid />
  </div>
)

const ProjectJenkins = () => (
  <div>
      <ProjectHeader title="Jenkins App"/>
      <p>
      SugarLog aims to improve how patients log, manage and track their diabetes records, without patient paywalls. SugarLog allows users to create logs wherever they are, analyse their history with graphs, setting up schedules to remind them when to take results or medication. SugarLog also allows users to export their data to their medical team with ease, avoiding scraps of paper, awkward device exports, and forgetting to bring results; it's all done for them! 
      </p>
      <ProjectGrid />
  </div>
)

const ProjectBash = () => (
  <div>
      <ProjectHeader title="Bash Scripting For GIT"/>
      <p>
      SugarLog aims to improve how patients log, manage and track their diabetes records, without patient paywalls. SugarLog allows users to create logs wherever they are, analyse their history with graphs, setting up schedules to remind them when to take results or medication. SugarLog also allows users to export their data to their medical team with ease, avoiding scraps of paper, awkward device exports, and forgetting to bring results; it's all done for them! 
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
                <Route exact path="/projects/jenkins-pipelines/" component={ProjectJenkins}/>
                <Route exact path="/projects/go-app/" component={ProjectGo}/>
                <Route exact path="/projects/bash-project/" component={ProjectBash}/>
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
