import React from 'react';
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container">
            <div className="white m-20 center">
                <h2>Page Not Found</h2>
                <p className="center">
                    <Link to="/">Go Back to Dashboard?</Link>
                </p>
            </div>
        </div>
    )
}
