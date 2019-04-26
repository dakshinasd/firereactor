import React from 'react';
import {NavLink} from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <ul className="right">
        <li><NavLink to="/project/create" exact>Create Project </NavLink></li>
        <li><NavLink to="/">Sign Out</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
    </ul>
  )
}
