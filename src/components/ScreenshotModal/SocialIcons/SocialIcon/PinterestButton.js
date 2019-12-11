import React from 'react';
import { useDispatch } from 'react-redux';
import {
    shareScreenshotSuccess,
    shareScreenshotError
} from '../../../../store/actions/screenshotActions';

import { ReactComponent as Pinterest } from '../../../../assets/SharingAssets/pinterest.svg';
import classes from './SocialIcon.module.scss';

const PinterestButton = ({ url }) => {
    const dispatch = useDispatch();

    const pinterestHandler = () => {
        // Todo: Share on Pinterest and get response (success or error)

        let response = false;
        if (response) {
            dispatch(shareScreenshotSuccess());
        } else {
            dispatch(shareScreenshotError());
        }
    };

    return (
        <Pinterest className={classes.socialIcon} onClick={pinterestHandler} />
    );
};

export default PinterestButton;
