/*************************
 * 
 * Contact form component.
 * Created as a class component to acommodate for form validation,
 * that needs to be added.
 * 
 ************************/

import React, { Component } from 'react';

import classes from './ContactForm.module.scss';
import Button from '../../../../Button/Button';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div className={classes.contactForm}>
        <label>
          Name
          <br />
          <input type="text" name="name" className={classes.formInput} id="name" />
        </label>
        <label>
          Email address
          <br />
          <input type="email" name="email" className={classes.formInput} id="email" />
        </label>
        <label>
          Message
          <br />
          <textarea rows="3" name="message" className={classes.formInput} id="message" ></textarea>
        </label>
        <Button text="Send" btnClass="signUp" />
      </div>
    )
  }
}

export default ContactForm;