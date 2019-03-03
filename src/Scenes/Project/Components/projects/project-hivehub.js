import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'

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
          HiveHub is built with Go and harnesses all the power of it, as well as using React Native to power both the iOS and Android App. Currently we're in the early stages, so development
          is moving forward, but there's no app release quite just yet! 
        </p>
        <ProjectGrid />
    </div>
  )

  export default ProjectHiveHub