/************************************************************
 Main component for Login.

 Allows users to input email address and password and click
 login button to submit the form

 Current features:
 1. Input user email address
 2. Input user password
 3. Do not allow email address and password filed to be blank

 TODO: - Action when form submit
 ************************************************************/

import React, {useState} from 'react';
import classes from './Login.module.scss';

/***********************************************************
 state:
 1. email
 2. password

 functions:
 1. onEmailChange
 2. onPasswordChange
 3. onFormSubmit
 *************************************************************/
const Login = ()=>{

    //react hook state for email
    const [email, setEmail] = useState('');

    //react hook state for password
    const [password, setPassword] = useState('');

    //Function which handle email input filed changed
    const onEmailChange = (evt)=>{

        //set email state
        setEmail(evt.target.value);
    }

    //Function which handle password input filed changed
    const onPasswordChange = (evt)=>{

        //set password state
        setPassword(evt.target.value);
    }

    //Function which handle form submit
    const onFormSubmit = (evt)=>{

        //prevent default form submit
        //we do our own action for form submit
        evt.preventDefault();

        //TODO: action that take care form submit
    }

    return (

        <div className={classes.overlay}>
            <div className={classes.loginOverlay}>
                <form className={classes.loginForm} onSubmit={onFormSubmit}>
                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>
                    <div className={classes.emailGroup}>
                        <label className={classes.emailLabel}>Email address</label>
                        <input className={classes.emailField} 
                        type='email'
                        onChange={onEmailChange}
                        required/>
                    </div>
                    <div className={classes.passwordGroup}>
                        <label className={classes.passwordLabel}>Password</label>
                        <input className={classes.passwordField} 
                        type='password'
                        onChange={onPasswordChange}
                        required/>
                    </div>
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton} 
                        type='submite'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;