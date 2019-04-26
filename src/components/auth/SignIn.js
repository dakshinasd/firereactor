import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email:"",
        password: ""
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
            <form onSubmit={this.handleOnSubmit} className="white" >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={this.handleOnChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" onChange={this.handleOnChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;