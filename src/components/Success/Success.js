/************************************************************
  Success screen component.
************************************************************/
import React from 'react';
import { useDispatch } from 'react-redux';
import { shareScreenshotEnd } from '../../store/actions/screenshotActions';

import { ReactComponent as GuitarIcon } from '../../assets/SuccessScreenAssets/electric-guitar-success.svg';
import { ReactComponent as BackIcon } from '../../assets/SuccessScreenAssets/back-btn-Icon-success.svg';

import classes from './Success.module.scss';

const Success = ({ screenshotSuccess }) => {
    const dispatch = useDispatch();

    const handleGoBack = () => {
        dispatch(shareScreenshotEnd());
    };
    return (
        <div
            className={
                screenshotSuccess ? classes.overlayShow : classes.overlayHide
            }
        >
            <div className={classes.successOverlay}>
                <div className={classes.gradient}></div>
                <div className={classes.content}>
                    <GuitarIcon className={classes.guitarIcon} />
                    <h1 className={classes.title}>Success!</h1>
                    <BackIcon
                        className={classes.backIcon}
                        onClick={handleGoBack}
                    />
                </div>
            </div>
        </div>
    );
};

export default Success;
