import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'

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

  export default ProjectPlaced