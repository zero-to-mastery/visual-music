/************************************************************
  Unsupported File popup component.

  TO-DO:
  1. Add functionality for Close button
************************************************************/

import React from 'react';

import { ReactComponent as CloseBtn } from '../../assets/UnsupportedFileAssets/close.svg';

import classes from './unsupportedFile.module.scss';

const unsupportedFile = () => {
    return (
        <div className={classes.screen}>
            <div className={classes.outerbox}>
                <div className={classes.innerbox}>
                    <h1 className={classes.errortext}>An Error Occured</h1>
                    <h1 className={classes.unsupportedtext}>
                        Unsupported File Format
                    </h1>
                </div>
                <CloseBtn className={classes.close}/>
            </div>
        </div>
    );
};

export default unsupportedFile;
