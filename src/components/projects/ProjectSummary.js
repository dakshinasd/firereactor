import React from 'react'

export default function ProjectSummary({project}) {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text  text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by dakshina</p>
            <p className="grey-text">26th Apr 2019</p>
        </div> 
    </div>
  )
}
