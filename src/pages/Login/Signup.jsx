import React from 'react';
import classes from './Signup.module.scss';

/*
 Main component for Signup.

 Allows users to input name, email address and password and click
 signup button to submit the form

 Current features:
 1. Input user name
 2. Input user email address
 3. Input user password
 4. Do not allow email address and password filed to be blank

 TODO: - Action when form submit

*/

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            isHidden: true,
        };
    }

    showHide = () => {
        this.setState({ isHidden: !this.state.isHidden });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={classes.signupcomponent}>
                <div className={classes.container}>
                    <div className={classes.signup}>
                        <div className={classes.headlines}>
                            <h2 className={classes.headline}>Welcome to Visual Music!</h2>
                            <span className={classes.subheadline}>Get Started Absolutely free</span>
                        </div>
                        <div className={classes.searchfields}>
                            <div className={classes.name}>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' id='name' required onChange={this.handleChange} />
                            </div>
                            <div className={classes.email}>
                                <label htmlFor='Email'>Email Address</label>
                                <input type='email' name='email' id='email' required onChange={this.handleChange} />
                            </div>
                            <div className={classes.password}>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type={this.state.isHidden ? 'password' : 'text'}
                                    name='password'
                                    id='password'
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className={classes.showpassword}>
                            <input type='checkbox' name='showpassword' id='showpassword' onClick={this.showHide} />
                            <label htmlFor='showpassword'>Show Password</label>
                        </div>
                        <div className={classes.custombutton}>
                            <button type='submit' onClick={this.handleSubmit}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
