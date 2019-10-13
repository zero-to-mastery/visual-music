/************************************************************
    Component represent a hambergur sytle of toggle

    State:
    - toggle: Indicate whether hambergur is on/off

    Props:
    - initToggle: true to set initial toggle
     state to on otherwse set to false

    - onClick: callback which is called when hamburger
     chicked by user and toggle state changed

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

    componentDidMount(){
        const {initToggle} = this.props;
        this.setState({toggle:initToggle});
    }

    toggle = ()=>{
        const {onClick} = this.props;

        const newToggleState = !this.state.toggle;

        this.setState({toggle:newToggleState});
        if(onClick){
            onClick(newToggleState);
        }
    }

    render(){

        const {toggle} = this.state;

        return (
            <div 
            className={classes.hamOverlay}
            onClick={()=>{ this.toggle() }}
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