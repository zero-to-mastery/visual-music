/************************************************************
Unsupported File Format Screen

************************************************************/

import React from 'react';
import classes from './UnsupportedFileFormat.module.scss';

import '../../globalScss/index.scss';
import '../../globalScss/variables.scss';

const UnsupportedFileFormat = () => (
    <div className={`${classes.overlay} ${classes.container}`}>
        <div className={classes.containerBlue}>
            <div className={classes.containerWhite}>
                <div className={classes.text}>
                    <p className={classes.text1}>An error occured</p>
                    <p className={classes.text2}>Unsupported file format</p>
                </div>
            </div>
            <button className={classes.close}>Close</button>
        </div>
    </div>
);

export default UnsupportedFileFormat;
