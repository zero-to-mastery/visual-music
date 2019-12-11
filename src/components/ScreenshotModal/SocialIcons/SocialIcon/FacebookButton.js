import React from 'react';
import { useDispatch } from 'react-redux';
import {
    shareScreenshotSuccess,
    shareScreenshotError
} from '../../../../store/actions/screenshotActions';

import { ReactComponent as Facebook } from '../../../../assets/SharingAssets/facebook.svg';
import classes from './SocialIcon.module.scss';

const FacebookButton = ({ url }) => {
    const dispatch = useDispatch();

    const facebookHandler = () => {
        // Todo: Share on Facebook and get response (success or error)

        let response = false;
        if (response) {
            dispatch(shareScreenshotSuccess());
        } else {
            dispatch(shareScreenshotError());
        }
    };

    return (
        <Facebook className={classes.socialIcon} onClick={facebookHandler} />
    );
};

export default FacebookButton;
