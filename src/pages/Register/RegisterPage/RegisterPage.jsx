import React from 'react';
import classes from './Register.module.scss';
import Span from '../../../components/units/Span/Span';
/*
 Main component for Signup.

 Allows users to input name, email address and password and click
 signup button to submit the form

 Current features:
 1. Input user name
 2. Input user email address
 3. Input user password
 4. Do not allow email address and password filed to be blank

*/

function RegisterPage({ setName, setEmail, setPassword, onFormSubmit, span }) {

    return (
        <div className={classes.signupcomponent}>
            <div className={classes.container}>
                <div className={classes.signup}>
                    <div className={classes.headlines}>
                        <h2 className={classes.headline}>
                            Welcome to <strong>Visual Music!</strong>
                        </h2>
                    </div>
                    <div className={classes.searchfields}>
                        <div className={classes.name}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                onChange={e => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="Email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className={classes.password}>
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                required
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.custombutton}>
                        <button type="submit" onClick={onFormSubmit}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <h3>Already a member? <a href="../../Login/LoginPage/LoginPage.js">Sign In</a></h3>
                    </div>
                    {span && (
                        <Span className={classes.errorLabel} content={span} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
