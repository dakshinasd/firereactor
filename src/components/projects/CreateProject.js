import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
        return (
        <div className="container">
            <form onSubmit={this.handleOnSubmit} className="white">
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
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
        )
    }
}

export default CreateProject;
