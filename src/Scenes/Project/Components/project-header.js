import React from 'react'

const ProjectHeader = (props) => (
    <div className="project-header">
        <h1>{props.title}</h1>
        <span className="divider"></span>
        <h2>API Development, Front End</h2>
        <span className="project-role-title">Software Developer</span>
        <span className="divider"></span>
    </div>
)
export default ProjectHeader