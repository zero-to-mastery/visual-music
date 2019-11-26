/*************************

Contact form component.
Created as a class component to acommodate for form validation and API requests.

Current features:
1. Non functioning contact form with Name, Email and Message inputs, and a submit button.

TODO: - Implement API request.
TODO: - Responsive to screen size.

 ************************/

import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import classes from './ContactForm.module.scss';
import Button from '../../../../../components/units/Button/Button';
import Span from '../../../../../components/units/Span/Span';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            span: null,
            errors: null
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, message} = this.state;
        this.setState({
            span: (
                <img
                    alt="loading"
                    src={require('../../../../../assets/LoadingAssets/LoadingBars.svg')}
                />
            )
        });
        //add this simple check for begging -
        if (this.validateForm({name,email,message})) {
            let templateParams = {
                name: name,
                email: email,
                message: message,
                dynamicColor: ''
            };

            emailjs
                .send(
                    // 'default_service' and 'visual-music' are coresponse to visual-music user dash configs at emailjs.com
                    'default_service',
                    'visual_music',
                    templateParams,
                    process.env.REACT_APP_emailJS
                )
                .then(response => {
                    this.resetForm();
                    this.setState({
                        span: 'email has been sent, thank you :)',
                        dynamicColor: 'black'
                    });
                })
                .catch(err => {
                    console.log('FAILED', err);
                    this.setState({
                        span: err
                    });
                });
        } else {
            this.setState({
                span: null,
                dynamicColor: ''
            })
        }
    }

    resetForm() {
        this.refs.form.reset();
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: null
        });
    }

    validateForm(formValues) {
        const {name, email, message} = formValues;
        let validationErrors = null;
        let bValid = true;

        if(!name || name.length === 0){
            validationErrors = {name: "Name is required", ...validationErrors};
            bValid = false;
        }

        if(!email || email.length === 0){
            validationErrors = {email: "Email Address is required", ...validationErrors};
            bValid = false;
        } else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            validationErrors = {email: "Email Address is invalid", ...validationErrors};
            bValid = false; 
        }

        if(!message || message.length === 0){
            validationErrors = {message: "Message is required", ...validationErrors};
            bValid = false;
        }

        this.setState({
            errors: validationErrors
        })

        return bValid;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        const { span, dynamicColor } = this.state;
        return (
            <form
                ref="form"
                onSubmit={e => this.handleSubmit(e)}
                className={classes.contactForm}
            >
                <label>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        className={classes.formInput}
                        id="name"
                        onChange={e => this.handleChange(e)}
                    />
                    <Span content={this.state.errors && this.state.errors.name}
                          className={classes.validationError}/>
                </label>
                <label>
                    Email address
                    <br />
                    <input
                        type="email"
                        name="email"
                        className={classes.formInput}
                        id="email"
                        onChange={e => this.handleChange(e)}
                    />
                    <Span content={this.state.errors && this.state.errors.email}
                          className={classes.validationError}/>
                </label>
                <label>
                    Message
                    <br />
                    <textarea
                        rows="3"
                        name="message"
                        className={classes.formInput}
                        id="message"
                        onChange={e => this.handleChange(e)}
                    ></textarea>
                    <Span content={this.state.errors && this.state.errors.message}
                          className={classes.validationError}/>
                </label>
                <Button type="submit" text="Send" btnClass="signUp" />
                {span && (
                    <Span
                        content={span}
                        style={{ color: dynamicColor }}
                        className={classes.errorLabel}
                    />
                )}
            </form>
        );
    }
}

export default ContactForm;
