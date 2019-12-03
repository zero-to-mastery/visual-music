import React from 'react';
import { useDispatch } from 'react-redux';
import {
    shareScreenshotSuccess,
    shareScreenshotError
} from '../../../../store/actions/screenshotActions';

import { ReactComponent as Instagram } from '../../../../assets/SharingAssets/instagram.svg';
import classes from './SocialIcon.module.scss';

const InstagramButton = ({ url }) => {
    const dispatch = useDispatch();

    const instagramHandler = () => {
        // Todo: Share on Instagram and get response (success or error)

        let response = true;
        if (response) {
            dispatch(shareScreenshotSuccess());
        } else {
            dispatch(shareScreenshotError());
        }
    };

    return (
        <Instagram className={classes.socialIcon} onClick={instagramHandler} />
    );
};

export default InstagramButton;
