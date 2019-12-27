import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.scss';
import Span from '../../../components/units/Span/Span';
import FormInput from '../../../components/units/FormInput/formInput.component';
/*
 Main component for Signup.

 Allows users to input name, email address and password and click
 signup button to submit the form

 Current features:
 1. Input user name
 2. Input user email address
 3. Input user password
 4. Do not allow email address and password filed to be blank
 5. Validate name, email address and password field.
*/

const nameValidators=[
    {
        validate:(value)=>{
            return value.length >= 2?true:false;
        },
        failMsg:'Name is too short'
    },
    {
        validate:(value)=>{
            return value.length <= 15?true:false;
        },
        failMsg:'Name is too long'
    }
];

const emailValidators=[
    {
        validate:(value)=>{
            return value.includes('@')&&((value.match(/@/g) || []).length===1);
        },
        failMsg:'Email is not valid'
    }
];

const passwordValidators=[
    {
        validate:(value)=>{
            return value.length >= 6?true:false;
        },
        failMsg:'Password is too short'
    }
];

function RegisterPage({ setName, setEmail, setPassword, onFormSubmit, span }) {
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    return (
        <div className={classes.signup}>
            <div className={classes.colone}>
                <div className={classes.container}>
                    <h1>Visualize music in a new way!</h1>
                    <h3>The app that converts your favourite music pieces into visual expressions</h3>
                </div>
            </div>
            <div className={classes.coltwo}>
                <form className={classes.signupform} onSubmit={onFormSubmit}>
                    <h1>Sign Up</h1>
                    <div className={classes.name}>
                        <FormInput 
                            labelText='Name'
                            type="text"
                            fontSize='medium'
                            validators={nameValidators}
                            required
                            onChange={e=>setName(e.target.value)}
                            />
                    </div>
                    <div className={classes.email}>
                        <FormInput 
                            labelText='Email' 
                            type="email"
                            fontSize='medium'
                            validators={emailValidators}
                            required
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.password}>
                        <FormInput 
                            labelText='Password' 
                            type={isPasswordHidden ? 'password' : 'text'}
                            fontSize='medium'
                            validators={passwordValidators}
                            required
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                    {/* <div className={classes.showpassword}>
                        <input
                            type="checkbox"
                            name="showpassword"
                            id="showpassword"
                            onClick={() => {
                                setIsPasswordHidden(!isPasswordHidden);
                            }}
                        />
                        <label htmlFor="showpassword">Show Password</label>
                    </div> */}
                    <div className={classes.custombutton}>
                        <button type="submit" >
                            Continue
                        </button>
                    </div>
                    <h2>Already a member?&nbsp;&nbsp;<Link to="/login">Sign In</Link></h2>
                    {span && (
                        <Span className={classes.errorLabel} content={span} />
                    )}
                </form>
            </div>
        </div>
        // <div className={classes.signupcomponent}>
        //     <div className={classes.container}>
        //         <form className={classes.signup} onSubmit={onFormSubmit}>
        //             <div className={classes.headlines}>
        //                 <h2 className={classes.headline}>
        //                     Welcome to Visual Music!
        //                 </h2>
        //                 <span className={classes.subheadline}>
        //                     Get Started Absolutely free
        //                 </span>
        //             </div>
        //             <div className={classes.searchfields}>
        //                 <div className={classes.name}>
        //                     <FormInput 
        //                         labelText='Name'
        //                         type="text"
        //                         fontSize='medium'
        //                         validators={nameValidators}
        //                         required
        //                         onChange={e=>setName(e.target.value)}
        //                         />
        //                     </div>
        //                 <div className={classes.email}>
        //                     <FormInput 
        //                         labelText='Email' 
        //                         type="email"
        //                         fontSize='medium'
        //                         validators={emailValidators}
        //                         required
        //                         onChange={e=>setEmail(e.target.value)}
        //                     />
        //                 </div>
        //                 <div className={classes.password}>
        //                     <FormInput 
        //                         labelText='Password' 
        //                         type={isPasswordHidden ? 'password' : 'text'}
        //                         fontSize='medium'
        //                         validators={passwordValidators}
        //                         required
        //                         onChange={e=>setPassword(e.target.value)}
        //                     />
        //                 </div>
        //             </div>
                    // <div className={classes.showpassword}>
                    //     <input
                    //         type="checkbox"
                    //         name="showpassword"
                    //         id="showpassword"
                    //         onClick={() => {
                    //             setIsPasswordHidden(!isPasswordHidden);
                    //         }}
                    //     />
                    //     <label htmlFor="showpassword">Show Password</label>
                    // </div>
                    // <div className={classes.custombutton}>
                    //     <button type="submit" >
                    //         Sign Up
                    //     </button>
                    // </div>
                    // {span && (
                    //     <Span className={classes.errorLabel} content={span} />
                    // )}
        //         </form>
        //     </div>
        // </div>
    );
}

export default RegisterPage;
