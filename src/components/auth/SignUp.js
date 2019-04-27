import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions/auth.actions';
import LoaderInt from '../helpers/LoaderInt';

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
        this.props.signUp(this.state);
    }

    render() {
        
        if(this.props.uid) return <Redirect to="/" />
        
        const signupBtnClass = this.props.isLoading ? "disabled" : null;
        return (

            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white" >
                    { this.props.isLoading ? <LoaderInt /> : null}
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleOnChange}/>
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
                        <input type="password" id="password" onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <div className="red-text center">
                            {this.props.authError ? <p>{this.props.authError.message}</p> : null}
                        </div>
                        <button className={`btn pink lighten-1 z-depth-0 ${signupBtnClass}`}>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        uid: state.firebase.auth.uid,
        isLoading: state.auth.isLoading,
        authError: state.auth.authError
    }
}

const mapActionsToProps = (dispatch) => {

    return{
        signUp: (user) => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SignUp);
