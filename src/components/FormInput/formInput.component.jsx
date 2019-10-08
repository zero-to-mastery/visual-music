import React from 'react';
import classes from './formInput.module.scss';

const FormInput = ({labelText, placeholder, onEmailInputChange, ...otherInputProps}) => {
    return (
        <div>
            <label className={classes.forgotPasswordEmailLabel}>{labelText}</label>
            <input className={classes.forgotPasswordEmailInput} type="text" placeholder={placeholder} onChange={onEmailInputChange} {...otherInputProps}/>
        </div>
    )
};

export default FormInput;
