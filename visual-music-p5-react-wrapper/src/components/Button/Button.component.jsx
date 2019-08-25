/*

Reusable button component.
Pass text and btnClass (className) as props.
Pass either one of the existing classes or write a new one in Button.styles.css.

*/

import React from 'react';
import './Button.styles.css';

const Button = ({ text, btnClass }) => (
  <button className={btnClass}>
    {text}
  </button>
);

export default Button;