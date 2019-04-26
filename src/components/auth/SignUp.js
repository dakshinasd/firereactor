import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email:"",
        password: "",
        firstName: "",
        lastName: ""
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
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="first-name" onChange={this.handleOnChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleOnChange}/>
                </div>
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

export default SignUp;