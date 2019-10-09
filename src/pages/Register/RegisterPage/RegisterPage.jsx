import React from 'react';
import classes from './Register.module.scss';

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

function RegisterPage({ setName, setEmail, setPassword, onFormSubmit }) {
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    return (
        <div className={classes.signupcomponent}>
            <div className={classes.container}>
                <div className={classes.signup}>
                    <div className={classes.headlines}>
                        <h2 className={classes.headline}>
                            Welcome to Visual Music!
                        </h2>
                        <span className={classes.subheadline}>
                            Get Started Absolutely free
                        </span>
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
                                type={isPasswordHidden ? 'password' : 'text'}
                                name="password"
                                id="password"
                                required
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.showpassword}>
                        <input
                            type="checkbox"
                            name="showpassword"
                            id="showpassword"
                            onClick={() => {
                                setIsPasswordHidden(!isPasswordHidden);
                            }}
                        />
                        <label htmlFor="showpassword">Show Password</label>
                    </div>
                    <div className={classes.custombutton}>
                        <button type="submit" onClick={onFormSubmit}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
