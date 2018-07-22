import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'


const ProjectSugarLog = () => (
    <div>
        <ProjectHeader title="SugarLog App"/>
        <p>
        SugarLog aims to improve how patients log, manage and track their diabetes records, without patient paywalls. SugarLog allows users to create logs wherever they are, analyse their history with graphs, setting up schedules to remind them when to take results or medication. SugarLog also allows users to export their data to their medical team with ease, avoiding scraps of paper, awkward device exports, and forgetting to bring results; it's all done for them! 
        </p>
        <ProjectGrid />
    </div>
  )

  export default ProjectSugarLog