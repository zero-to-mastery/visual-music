import React from 'react';
import CircularIndicator from './CircularIndicator';
import { ReactComponent as LoadingCircle } from '../../LoadingCircle.svg';
import classes from './ProgressSpinner.module.scss';

const ProgressSpinner = ({ percentage }) => {
    return (
        <div>
            <div
                className={
                    percentage === 100 ? classes.animated : classes.notAnimated
                }
            >
                <CircularIndicator value={percentage} />
                <LoadingCircle className={classes.circle} />
            </div>
        </div>
    );
};

export default ProgressSpinner;
