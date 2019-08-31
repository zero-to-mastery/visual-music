import React, { Component } from 'react';

import './ContactForm.styles.css';
import Button from '../../../../Button/Button.component.jsx';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div className="contact-form">
        <label>
          Name
          <br />
          <input type="text" name="name" className="form-input" id="name" />
        </label>
        <label>
          Email address
          <br />
          <input type="email" name="email" className="form-input" id="email" />
        </label>
        <label>
          Message
          <br />
          <textarea rows="3" name="message" className="form-input" id="message" ></textarea>
        </label>
        <Button text="Send" btnClass="sign-up" />
      </div>
    )
  }
}

export default ContactForm;