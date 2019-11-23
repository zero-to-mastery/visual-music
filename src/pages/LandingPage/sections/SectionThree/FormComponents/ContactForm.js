/*************************

Contact form component.
Created as a class component to acommodate for form validation and API requests.

Current features:
1. Non functioning contact form with Name, Email and Message inputs, and a submit button.

TODO: - Implement form validation.
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
            span: null
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.state;
        this.setState({
            span: (
                <img
                    alt="loading"
                    src={require('../../../../../assets/loading.svg')}
                />
            )
        });
        //add this simple check for begging -
        if (name.length > 0 && email.length > 0 && message.length > 0) {
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
                span: 'unsuccessful attempt',
                dynamicColor: 'red'
            });
        }
    }

    resetForm() {
        this.refs.form.reset();
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
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
                </label>
                <Button type="submit" text="Send" btnClass="signUp" style={{width:'100px'}} />
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
