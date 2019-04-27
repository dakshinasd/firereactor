import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar({auth, profile}) {
  
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks /> 

  return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link className="brand-logo left" to="/">FireReactor</Link>
            {links}
        </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
