/************************************************************
    Component represent a hambergur sytle of toggle

    State:
    - toggle: Indicate whether hambergur is on/off

    Current features:
    - A hambergur style.
    - Transition to X when toggle is on.

************************************************************/
import React from 'react';
import classes from './HambergurToggle.module.scss';

class HambergurToggle extends React.Component{

    constructor(){
        super();

        this.state={
            toggle:false
        }
    }

    toggle = ()=>{
        this.setState({toggle:!this.state.toggle});
    }

    render(){

        const {toggle} = this.state;

        return (
            <div 
            className={classes.hamOverlay}
            onClick={this.toggle}
            >
                <div className={`${classes.hamWrapper} ${toggle?classes.toggle:''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default HambergurToggle;