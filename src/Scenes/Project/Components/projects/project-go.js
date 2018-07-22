import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'

const ProjectGo = () => (
    <div>
        <ProjectHeader title="Go Microservice"/>
        <p>
        After being a hardcore fan of PHP, I decided to try out Go. It's like writing your first program all over; I adore Go! The first production project I did with Go was creating a REST API microservice to use internally to connect
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

  export default ProjectGo