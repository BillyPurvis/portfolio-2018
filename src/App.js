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
    <h1>Hey, my name is Billy. I'm a Software Developer in London
writing Go, PHP, Laravel and Symfony.</h1>
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
        Placed was a London based start-up I worked for. Placed focused on matching employers and candidates together within the hospitality industry for jobs.     
      </p>
      <p>
        At Placed I worked with our CTO to implement new features, such as dashboards to both our UI and Symfony API whilst considering the requirements of not just the web app, but the iOS and Android apps that consumed our API.       
      </p>

      <p>
        I also worked with our marketing team to design new MailChimp workflows and integrate them into MailChimp and make our API support the data merge to MailChimp and calculating data to put contacts in their correct 
        segment for an effecient and effective marketing campaign workflow.        
      </p>
      <p>
      Another task was reducing the amount of unfinished app registrations we had, one way we did this was creating
        a new React app to work with our backend and Twilio to verify new users phone numbers so we could be more confident they were both UK based and existed! We have a great uptake on this and the task provided a great 
        challenge to learn React and to configure our servers to host it along side our current AngularJS app. 
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
      After being a hardcore fan of PHP, I decided to try out Go. It's like writing your first program all over, I adore Go! The first production project I did with Go was creating a REST API microservice to use internally to connect
      to third party APIs and support other protocols, currently LDAP. This project required me to architect how Go would integrate into the current PHP Stack
      and create a gateway from the PHP application to the Go, and then receive formatted JSON back from Go. 
      </p>
      <p>
        I decided to use Go as PHP lacked any packages suited to the exact LDAP goal of creating a completely reuseable API gateway from the application to other services to sync contact data. The service
        had to be able to support result sets of over 30,000 records, format them and return them quickly whilst not crashing under load as there could be multiple customers requesting third party data sets
        at once - our PHP app simply couldn't handle this without creating queue workers and scaling servers more than we had to when Go could do this all without scaling our servers!
        </p>
        <p>
          Go is a language I love and continue to build new programs with whenever possible
        </p>

        You can checkout the repo <a target="_blank" rel="noopener noreferrer" href="https://github.com/BillyPurvis/go-microservice-ldap">here</a>!
      <ProjectGrid />
  </div>
)

const ProjectJenkins = () => (
  <div>
      <ProjectHeader title="Jenkins App"/>
      <p>
      CI (Continuous Integration) is something I’ve not used up until recently and it’s something you’ll come across sooner or later. They’re really powerful tools helping you automate your deployments and other tasks.
      Recently I took on the task of adding both Jenkins and a heavily customised and tweaked version of Git Flow to a team's process. 
      </p>

      <p>
      You can read the full article over on Medium <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@billypurvis/how-jenkins-reduced-our-deployment-time-by-97-3510040a69d0">here</a>!
      </p>
      <ProjectGrid />
  </div>
)

const ProjectBash = () => (
  <div>
      <ProjectHeader title="Bash Scripting For GIT"/>
      <p>
      I really...really...really like writing Bash scripts. They're a huge part of my work for monitoring Laravel Queue Workers, Websocket servers or checking commits are written properly.       
      </p>
      <p>The snippet below was used as a Git Hook so we could be sure all commits were prefixed with a keyword so we knew what the commit was doing. Both pluaral and singular keywords were accepted. This meant
        we could use the commit history as our own changelog! 
      </p>
      <pre>
        <code>
          { `#!/bin/sh
shopt -s nocasematch  # Case insensitive matching
shopt -s extglob

RED='\\033[0;31m'
GREEN='\\033[0;32m'
NC='\\033[0m'
regex='^(fix(es)?|change(s)?|merge(s)?|update(s)?|add(s)?|remove(s)?)[[:space:]].+[a-zA-Z?!\${}()@].'

# Get commit Message
file=\`cat $1\`

# Test commit message conforms to regex requirements.
if ! [[ $file =~ $regex ]]; then
    echo "\${RED} Commit messages must be prefixed with singular or plural fix, change, merge, add. \n Example 'Adds new API connection input to dash'"
    exit 1;
    else
    echo "\${GREEN}Nice commit 👍 \${NC}"
fi`}
        </code>
      </pre>

      <ProjectGrid />
  </div>
)

const Blog = () => (
  <div>
      <h1>Blog</h1>
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
                <Route exact path="/projects/placed-app/" component={ProjectPlaced}/>
                <Route exact path="/projects/hivehub-app/" component={ProjectHiveHub}/>
                <Route exact path="/projects/sugarlog-app/" component={ProjectSugarLog}/>
                <Route exact path="/projects/jenkins-pipelines/" component={ProjectJenkins}/>
                <Route exact path="/projects/go-app/" component={ProjectGo}/>
                <Route exact path="/projects/bash-project/" component={ProjectBash}/>
                {/* <Route exact path="/blog" component={Blog}/> */}
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
