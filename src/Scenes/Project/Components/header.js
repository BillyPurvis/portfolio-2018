import React from 'react'

const ProjectHeader = (props) => (
    <div className="project-header">
        <h1>{props.title}</h1>
        <span className="divider"></span>
        <h2>{props.roleAreas ? props.roleAreas : 'API Development, Full Stack'}</h2>
        <span className="project-role-title">{props.roleTitle ? props.roleTitle : 'Software Developer' }</span>
        <span className="divider"></span>
    </div>
)
export default ProjectHeader