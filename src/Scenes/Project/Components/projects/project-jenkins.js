import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'

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

  export default ProjectJenkins