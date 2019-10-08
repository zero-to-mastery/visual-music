import React from 'react';
import './formInput.styles.scss';

const FormInput = ({labelText, placeholder, onEmailInputChange, ...otherInputProps}) => {
    return (
        <div>
            <label htmlFor="" className='forgotPasswordEmailLabel'>{labelText}</label>
            <input className='forgotPasswordEmailInput' type="text" placeholder={placeholder} onChange={onEmailInputChange} {...otherInputProps}/>
        </div>
    )
};

export default FormInput;
