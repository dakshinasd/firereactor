import React from 'react'

export default function ProjectDetails(props) {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-contet">
                    <div className="card-title">Project Title</div>
                    <p>Test content yo!!!!!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by dakshina</div>
                    <div>Sep 2, 2019</div>
                </div>
            </div>  
        </div>
    )
}
