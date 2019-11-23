import React from 'react';
import Button from '../units/Button/Button';
import {ReactComponent as CloseBtn} from '../../assets/PromptAssets/close.svg';

import classes from './Prompt.module.scss';

const Prompt = ({title, message, onClosed})=>{

    return (
        <div className={classes.overlay}>
            <div className={classes.promptOverlay}>
                <div className={classes.content}>
                    {
                        title?
                        <div className={classes.title}>
                        {title}
                        </div>
                        :
                        null
                    }
                    {
                        message?
                        <div className={classes.message}>
                        {message}
                        </div>
                        :
                        null
                    }
                </div>
                <div className={classes.closeButton}>
                    <CloseBtn onClick={onClosed} />
                </div>
            </div>
        </div>
    );
}

export default Prompt;