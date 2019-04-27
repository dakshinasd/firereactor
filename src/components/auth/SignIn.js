import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

import { signIn } from '../../store/actions/auth.actions'; 
import  LoaderInt  from '../helpers/LoaderInt';

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
        this.props.signIn(this.state)
    }

    render() {
        
        if(this.props.uid) return <Redirect to="/" />
        const btnLoaderClass = this.props.isLoading ? "disabled" : null;
        return (
        <div className="container">
            <form onSubmit={this.handleOnSubmit} className="white" >
                { this.props.isLoading ? <LoaderInt /> : null}
                <h5 className="grey-text text-darken-3">Sign In</h5>
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
                    <button className={`btn pink lighten-1 z-depth-0 ${btnLoaderClass}`}>Sign In</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        authError: state.auth.authError,
        isLoading: state.auth.isLoading,
        uid: state.firebase.auth.uid
    }
}

const mapDispathcToProps = (dispatch) => {

    return {
        signIn: (credentials) => {

            dispatch(signIn(credentials))
        }
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(SignIn);
