import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'; 
import moment from 'moment';

function ProjectDetails({project}) {
    if(project){

        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-contet">
                        <div className="card-title">{ project.title }</div>
                        <p> {project.content} </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>  
            </div>
        )
    } else {
        return (
            <p>Loading project...</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);
