/**
 * FormInput component
 * 
 * Features:
 * - Allow user input
 * - Customizable validation for input
 * - Show error message when validation fail
 * - Input field is highlighted when error is presented
 * 
 * Validation process:
 * Component take a property name "validators" and this property
 * accept null or an array of validator which define validation.
 * 
 * When input is unfocused the method "validate" is called asynchronously and then
 * method go throught each validators to see if validation is fail.
 * 
 * If one of validators is fail then coresponse error message is setted to "errorMsg"
 * state, Thus error is shown.
 * 
 * Defination of validator:
 * Each validator is an object which define two required keys and values
 * 
 * 1) validate: value is a function which take input value. The function must
 * return true indicate validation passed otherwise false indicate validation fail
 * 
 * 2) failMsg: string that will be displayed when validation fail.
 * 
 * Look into "minValueValidator" which is provided as default
 * validator for example.
 */
import React, {useState} from 'react';
import classes from './formInput.module.scss';

//A default validation to check if input value length is less than 1
const minValueValidator = {
    validate:(value)=>{
        return value.length > 1? true:false;
    },
    failMsg:'Input value is too short'
}

const FormInput = ({
    labelText,
    placeholder,
    onChange,
    inline = false,//Make lable and input at same line when true
    validators = [minValueValidator],//Custom validator array
    ...otherInputProps
}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [onFocus, setOnFocus] = useState(false);

    //onChange handler
    const onChangeHandler = (evt)=>{
        setInputValue(evt.target.value);
        if(onChange) onChange(evt);
    }

    //validate method, called when input unfocus
    const validate = async (value)=>{
        if(!value || !validators) setErrorMsg('');

        let validator = validators.find((val)=>{
            return !val.validate(value);
        });

        validator? setErrorMsg(validator.failMsg):setErrorMsg('');
    }

    return (
        <div className={classes.formInputOverlay}>
            <div className={`${classes.inputGroup} ${inline?classes.inlineStyle:null}`}>
                <div className={classes.labelOverlay}>
                    <label>{labelText}</label>
                </div>
                <input
                    className={`${classes.inputField} ${errorMsg && !onFocus?classes.errorStyle:null}`}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    onFocus={()=>setOnFocus(true)}
                    onBlur={(e)=>{
                        setOnFocus(false);
                        validate(e.target.value);
                    }}
                    value={inputValue}
                    {...otherInputProps}
                />
            </div>
            {
                //show error message if we have error message
                //and input is not Focused
                errorMsg && !onFocus?
                <div className={classes.errorMessage}>
                    {errorMsg}
                </div>
                :
                null
            }
        </div>    
    );
};

export default FormInput;
