import React from 'react';
import classes from './formInput.module.scss';

const FormInput = ({
    labelText,
    placeholder,
    onChange,
    ...otherInputProps
}) => {
    return (
        <div>
            <div className={classes.forgotPasswordEmailLabel}>
                <label>{labelText}</label>
            </div>
            <div>
                <input
                    className={classes.forgotPasswordEmailInput}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...otherInputProps}
                />
            </div>
        </div>
    );
};

export default FormInput;
