import React from 'react';
import classes from './PanelToggle.module.scss';

class PanelToggle extends React.Component{

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

export default PanelToggle;