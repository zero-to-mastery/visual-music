import React from 'react';
import './formInput.styles.scss';

export default class FormInput extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {labelText, placeholder, onEmailInputChange, ...otherProps} = this.props;
        return (
            <div>
                <label htmlFor="" className='forgotPasswordEmailLabel'>{labelText}</label>
                <input className='forgotPasswordEmailInput' type="text" placeholder={placeholder} onChange={onEmailInputChange} {...otherProps}/>
            </div>
        )
    }
}