import React, {useState} from 'react';
import classes from './formInput.module.scss';

const minValueValidator = {
    validator:(value)=>{
        return value.length > 1? true:false;
    },
    failMsg:'Input value is too short'
}

const maxValueValidator = {
    validator:(value)=>{
        return value.length > 15? false:true;
    },
    failMsg:'Input value is too long'
}

const FormInput = ({
    labelText,
    placeholder,
    onChange,
    inline = false,//Make lable and input at same line when true
    validators = [minValueValidator, maxValueValidator],//Custom validator array
    ...otherInputProps
}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (evt)=>{
        setInputValue(evt.target.value);
        onChange(evt);
    }

    return (
        <div className={classes.formInputOverlay}>
            <div className={`${classes.inputGroup} ${inline?classes.inlineStyle:null}`}>
                <div className={classes.labelOverlay}>
                    <label>{labelText}</label>
                </div>
                <input
                    className={`${classes.inputField} ${errorMsg?classes.errorStyle:null}`}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    {...otherInputProps}
                />
            </div>
            <div className={classes.errorMessage}>
                {
                    errorMsg?errorMsg:null
                }
            </div>
        </div>    
    );
};

export default FormInput;
