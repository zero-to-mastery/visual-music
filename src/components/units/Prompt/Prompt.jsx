import React from 'react';
import { ReactComponent as CloseBtn } from '../../../assets/PromptAssets/close.svg';

import classes from './Prompt.module.scss';

const Prompt = ({ title, message, onClosed }) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.promptOverlay}>
                <div className={classes.content}>
                    {title && <div className={classes.title}>{title}</div>}
                    {message && (
                        <div className={classes.message}>{message}</div>
                    )}
                </div>
                <div className={classes.closeButtonArea}>
                    <CloseBtn
                        className={classes.closeButton}
                        onClick={onClosed}
                    />
                </div>
            </div>
        </div>
    );
};

export default Prompt;
