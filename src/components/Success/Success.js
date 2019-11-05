/************************************************************
  Success screen component.

  TODO:
  1. Add functionality to go back icon.
************************************************************/
import React from 'react';

import { ReactComponent as GuitarIcon } from '../../assets/SuccessScreenAssets/electric-guitar-success.svg';
import { ReactComponent as BackIcon } from '../../assets/SuccessScreenAssets/back-btn-Icon-success.svg';

import classes from './Success.module.scss';

const Success = () => {
    return (
        <div className={classes.overlay}>
            <div className={classes.successOverlay}>
                <div className={classes.gradient}></div>
                <div className={classes.content}>
                    <GuitarIcon className={classes.guitarIcon} />
                    <h1 className={classes.title}>Success!</h1>
                    <BackIcon className={classes.backIcon} />
                </div>
            </div>
        </div>
    );
};

export default Success;
