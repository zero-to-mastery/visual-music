/************************************************************
  Error screen component.

  TODO:
  1. Add functionality to go back icon.
************************************************************/

import React from 'react';

// Icons.
import { ReactComponent as GuitarIcon } from '../../assets/ErrorScreenAssets/electric-guitar.svg';
import { ReactComponent as GoBackIcon } from '../../assets/ErrorScreenAssets/go-back.svg';

import classes from './Error.module.scss';

const Error = () => {
    const handleGoBack = () => {};

    return (
        <div className={classes.errorScreen}>
            <div className={classes.errorModal}>
                <GuitarIcon className={classes.guitarIcon} />
                <div className={classes.errorMessage}>
                    <h1>Oops!</h1>
                    <h2>Image couldn’t be shared</h2>
                </div>
                <GoBackIcon
                    className={classes.goBackIcon}
                    onClick={handleGoBack}
                />
            </div>
        </div>
    );
};

export default Error;
