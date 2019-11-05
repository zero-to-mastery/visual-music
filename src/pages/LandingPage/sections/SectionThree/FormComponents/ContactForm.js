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

import classes from './ContactForm.module.scss';
import Button from '../../../../../components/Button/Button';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className={classes.contactForm}>
                <label>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        className={classes.formInput}
                        id="name"
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
                    ></textarea>
                </label>
                <Button text="Send" btnClass="signUp" />
            </div>
        );
    }
}

export default ContactForm;
