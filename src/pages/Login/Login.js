import React, {useState} from 'react';
import classes from './Login.module.scss';

const Login = ()=>{

    return (

        <div className={classes.overlay}>
            <div className={classes.loginOverlay}>
                <div className={classes.content}>

                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>

                    <div className={classes.emailGroup}>
                        <label className={classes.emailLabel}>Email address</label>
                        <input className={classes.emailField} 
                        type='email' required/>
                    </div>

                    <div className={classes.passwordGroup}>
                        <label className={classes.passwordLabel}>Password</label>
                        <input className={classes.passwordField} 
                        type='password' required/>
                    </div>
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton} 
                        type='submite'>Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;