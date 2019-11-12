/*********************** 

Reusable button component, accepts text (string), and btnClass (className) as props.
for styles pass either one of the existing classes or write a new one in Button.module.scss.

TODO: - Add onClick functionality
TODO: - Implement hover animation using react-spring (as we're already using it for parallax)

************************/

import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text, btnClass, ...otherProps }) => (
    <button className={classes[btnClass]} {...otherProps}>
        {text}
    </button>
);

export default Button;
