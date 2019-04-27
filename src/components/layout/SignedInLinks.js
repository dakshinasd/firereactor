import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {signOut} from '../../store/actions/auth.actions';

function SignedInLinks({signOut, profile}) {
  return (
    <ul className="right">
        <li><NavLink to="/project/create" exact>Create Project </NavLink></li>
        <li><a onClick={signOut}>Sign Out</a></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {

    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
