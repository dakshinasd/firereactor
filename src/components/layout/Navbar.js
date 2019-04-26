import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link className="brand-logo left" to="/">FireReactor</Link>
            <SignedInLinks />
            <SignedOutLinks />
        </div>
    </nav>
  )
}