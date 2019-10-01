/************************************************************
    Main component for music visualization.
    Uses react-p5-wrapper to load state values to the p5 canvas.

    Current loaded sketch file is defined in line 18.
    It is then passed as props to P5Wrapper component
    along with other needed values such as volume, uploaded file, etc.

    Current features:
    1. Display ellipses based on sound's amplitude.

    TODO:

************************************************************/

import React from 'react';
import classes from './UnsupportedFileFormat.module.scss';

const UnsupportedFileFormat = () => (
    <div className={classes.overlay}>
        <div className={classes.container}>
            <div className={classes.containerBlue}>
                <div className={classes.containerWhite}>
                    <div className={classes.text}></div>
                    <button className={classes.close}></button>
                </div>
            </div>
        </div>
    </div>
);

export default UnsupportedFileFormat;
