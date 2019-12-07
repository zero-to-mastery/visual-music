import React from 'react';
import { useDispatch } from 'react-redux';
import { clearScreenshot } from '../../store/actions/screenshotActions';
import { ReactComponent as LeftArrow } from '../../assets/NavigationAssets/left-curve-arrow.svg';
import classes from './BackToPlayer.module.scss';

const BackToPlayer = ({ hideSocialIcons }) => {
    const dispatch = useDispatch();

    const backToPlayerHandler = () => {
        hideSocialIcons();
        dispatch(clearScreenshot());
    };
    return (
        <div className={classes.backToPlayer} onClick={backToPlayerHandler}>
            <p>Back to Player</p>
            <LeftArrow className={classes.backArrowIcon} />
        </div>
    );
};

export default BackToPlayer;
