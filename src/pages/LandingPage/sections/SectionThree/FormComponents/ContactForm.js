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
import Button from '../../../../../components/Button/Button';
import Span from '../../../../../components/Span/Span';

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
            span: <img src={require('../../../../../assets/loading.svg')} />
        });
        let templateParams = {
            name: name,
            email: email,
            message: message
        };
        emailjs
            .send(
                // 'default_service' and 'visual-music' are coresponse to visual-music user at emailjs.com
                'default_service',
                'visual_music',
                templateParams,
                process.env.REACT_APP_emailJS
            )
            .then(response => {
                this.setState({
                    span: null
                });
                alert('email sent succsefully');
            })
            .catch(err => {
                console.log('FAILED', err);
                this.setState({
                    span: err
                });
            });
        this.resetForm();
    }
    resetForm() {
        let frm = document.getElementsByName('contact-form')[0];
        frm.reset();
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    handleChange = (param, e) => {
        this.setState({
            [param]: e.target.value
        });
    };
    render() {
        const { span } = this.state;
        return (
            <form
                name="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
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
                        onChange={this.handleChange.bind(this, 'name')}
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
                        onChange={this.handleChange.bind(this, 'email')}
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
                        onChange={this.handleChange.bind(this, 'message')}
                    ></textarea>
                </label>
                <Button type="submit" text="Send" btnClass="signUp" />
                {span && <Span content={span} />}
            </form>
        );
    }
}

export default ContactForm;
