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
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Login.module.scss';

class Login extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    onEmailChange = (evt)=>{
        this.setState({email:evt.target.value});
    }

    onPasswordChange = (evt)=>{
        this.setState({password:evt.target.value});
    }

    onFormSubmit = (evt)=>{
        const {email, password} = this.state
        evt.preventDefault();
        /**
         * Note: This code is only filler and serves the purpose of testing react router and its ability to redirect to the application view and mimic that process prior to the actual functionality, DB, server/client side auth checks are added in the future.
         */
        (email && password) && this.props.history.push('/app')
    }

    render(){
        return (
            <div className={classes.overlay}>
                <div className={classes.loginOverlay}>
                    <form className={classes.loginForm} onSubmit={this.onFormSubmit}>
                        <div className={classes.titleGroup}>
                            <span>Welcome back!</span>
                        </div>
                        <div className={classes.emailGroup}>
                            <label className={classes.emailLabel}>Email address</label>
                            <input className={classes.emailField}
                            type='email'
                            onChange={this.onEmailChange}
                            required/>
                        </div>
                        <div className={classes.passwordGroup}>
                            <label className={classes.passwordLabel}>Password</label>
                            <input className={classes.passwordField}
                            type='password'
                            onChange={this.onPasswordChange}
                            required/>
                        </div>
                        <div className={classes.loginButtonGroup}>
                            <button className={classes.loginButton}
                            type='submit'>Login</button>
                        </div>
                        <div className={classes.forgotPasswordLinksGroup}>
                            <Link to={'/forgot-password'} className={classes.forgotPasswordLink}>
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);