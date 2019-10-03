/*********************** 
*
* Reusable button component.
* Pass text, btnClass (className), handleRouteChange (function), and to (path) as props.
* for styles pass either one of the existing classes or write a new one in Button.styles.css.
* handleRouteChange() is defined in App.js,
* and will set state.route to the value passed to the "to" prop.
*
************************/

import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text, btnClass, handleRouteChange, to }) => (
  <button className={classes[btnClass]} onClick={handleRouteChange ? () => handleRouteChange(to) : null}>
    {text}
  </button>
);

export default Button;