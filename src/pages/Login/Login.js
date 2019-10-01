import React, {useState} from 'react';
import classes from './Login.module.scss';

const Login = ()=>{

    return (

        <div className={classes.overlay}>
            <div className={classes.login}>
                <div className={classes.content}>

                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>

                    <div className={classes.emailGroup}>
                        <label className={classes.emailLabel}>Email address</label>
                        <input className={classes.emailField} type='email'/>
                    </div>

                    <div className={classes.passwordGroup}>
                        <label className={classes.passwordLabel}>Password</label>
                        <input className={classes.passwordField} type='password'/>
                    </div>
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;