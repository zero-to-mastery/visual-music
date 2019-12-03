/************************************************************
  Error screen component.

  TODO:
  1. Add functionality to go back icon.
************************************************************/

import React from 'react';
import { useDispatch } from 'react-redux';

// Icons.
import { ReactComponent as GuitarIcon } from '../../assets/ErrorScreenAssets/electric-guitar.svg';
import { ReactComponent as GoBackIcon } from '../../assets/ErrorScreenAssets/go-back.svg';

import classes from './Error.module.scss';
import { shareScreenshotEnd } from '../../store/actions/screenshotActions';

const Error = ({ screenshotError }) => {
    const dispatch = useDispatch();

    const handleGoBack = () => {
        dispatch(shareScreenshotEnd());
    };

    return (
        <div
            className={
                screenshotError
                    ? classes.errorScreenShow
                    : classes.errorScreenHide
            }
        >
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
