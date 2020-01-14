import React from 'react';
import { useDispatch } from 'react-redux';
import {
    shareScreenshotSuccess,
    shareScreenshotError
} from '../../../../store/actions/screenshotActions';

import { ReactComponent as Twitter } from '../../../../assets/SharingAssets/twitter.svg';
import classes from './SocialIcon.module.scss';

const TwitterButton = ({ url }) => {
    const dispatch = useDispatch();

    const twitterHandler = () => {
        // Todo: Share on Twitter and get response (success or error)

        let response = false;
        if (response) {
            dispatch(shareScreenshotSuccess());
        } else {
            dispatch(shareScreenshotError());
        }
    };

    return <Twitter className={classes.socialIcon} onClick={twitterHandler} />;
};

export default TwitterButton;
