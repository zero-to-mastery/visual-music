import React from 'react';
import classes from './ProgressSpinner.module.scss';

const CircularIndicator = ({ value }) => {
    const radius = 95;
    const maxProgress = radius * Math.PI * 2;
    const currentProgress = maxProgress - (maxProgress * value) / 100;
    return (
        <>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <circle
                    fill={'none'}
                    stroke="#434C5F"
                    cx={100}
                    cy={100}
                    r={radius}
                    strokeWidth="10px"
                />
                <circle
                    fill={'none'}
                    stroke="#0FA797"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={maxProgress}
                    strokeDashoffset={currentProgress}
                    cx={100}
                    cy={100}
                    r={radius}
                    strokeWidth="10px"
                    transform={`rotate(-90 100 100)`}
                />
            </svg>
            <div className={classes.value}>{`${value}%`}</div>
        </>
    );
};

export default CircularIndicator;
