import React, { Component } from 'react';
import {connect} from 'react-redux';

import { createProject } from '../../store/actions/project.actions';
import LoaderInt from '../helpers/LoaderInt';

class CreateProject extends Component {

    state = {
        title: "",
        content: ""
    }

    handleOnChange = (e) => {

        this.setState({[e.target.id]: e.target.value});
    }

    handleOnSubmit = (e) => {

        e.preventDefault();
        this.props.createProject(this.state);
    }

    
    render() {

        const btnClass = this.props.isLoading ? "disabled" : null;

        return (
        <div className="container">
            <form onSubmit={this.handleOnSubmit} className="white">

                { this.props.isLoading ? <LoaderInt /> : ""}
                
                <h5 className="grey-text text-darken-3">Create a new Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleOnChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="cotent">Content</label>
                    <textarea id="content" onChange={this.handleOnChange} className="materialize-textarea"/>
                </div>
                <div className="input-field">
                    <button className={`btn pink lighten-1 z-depth-0 ${btnClass}`}>Create</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        isLoading : state.project.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {

        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
