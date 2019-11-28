import React from 'react';
import classes from './ScreenshotModal.module.scss';

const ScreenshotModal = ({ screenshotUrl }) => {
    return (
        <div className={screenshotUrl ? classes.showModal : classes.hideModal}>
            <img
                className={classes.image}
                src={screenshotUrl}
                alt="screenshot"
            />
        </div>
    );
};

export default ScreenshotModal;
