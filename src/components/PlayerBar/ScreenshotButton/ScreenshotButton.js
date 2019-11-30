import React from 'react';
import { useDispatch } from 'react-redux';
import { takeScreenshot } from '../../../store/actions/screenshotActions';
import { ReactComponent as SnapshotIcon } from '../../../assets/PlayerBarAssets/snapshot-icon-white-dark.svg';

const ScreenshotButton = () => {
    const dispatch = useDispatch();

    const takeScreenshotHandler = () => {
        dispatch(takeScreenshot());
    };
    return <SnapshotIcon onClick={takeScreenshotHandler} />;
};

export default ScreenshotButton;
