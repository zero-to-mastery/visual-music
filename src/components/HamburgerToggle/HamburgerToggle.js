/************************************************************
    Component represent a hambergur sytle of toggle

    State:
    - toggle: Indicate whether hambergur is on/off

    Current features:
    - A hambergur style.
    - Transition to X when toggle is on.

************************************************************/
import React from 'react';
import classes from './HamburgerToggle.module.scss';

class HamburgerToggle extends React.Component{

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
        const {onClick} = this.props;

        return (
            <div 
            className={classes.hamOverlay}
            onClick={()=>{onClick(); this.toggle();}}
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

export default HamburgerToggle;