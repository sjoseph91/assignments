import React from 'react';

function EmailSignup(){
    return (
        <div>
            <input
                type="email"
                name="email"
                placeholder="Enter your email">
            </input>
            <button className="signupButton">Sign Up</button>
        </div>
    )
}

export default EmailSignup;