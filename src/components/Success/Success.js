import React from 'react';
import classes from './Success.module.scss';

class Success extends React.Component{

    constructor(){
        super();
        this.state ={
            isPressed : false
        }
    }

    render(){
        return(
            <div className={classes.successComponent}>
                <div className={classes.avatarProfile}></div>
                <div className={classes.rectangle}>
                    <div className={classes.guitarist}></div>
                    <div className={classes.successText}></div>
                    <div className={classes.backButton}></div>
                </div>
            </div>
        );
    }

}

export default Success;