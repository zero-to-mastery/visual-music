/************************************************************
    Component represent item in visualization list.

    Params:
    - title: Type of string. Title for item which displayed at bottom of item
    - imagePath: Type of string. the image srouce path that will be used t o display item's image
    - onClick: Type of function. Take no arguments. A callback when item is being clicked

    Current features:
    - Display an item in visualization list.
    - A callback when item is being clicked

************************************************************/
import React from 'react';
import classes from './VisualItem.module.scss';

const VisualItem = ({ title, imagePath, onClick }) => {
    const imgSrc = imagePath ? imagePath : '';

    return (
        <div className={classes.overlay}>
            <div className={classes.itemWrapper} onClick={onClick}>
                <div className={classes.imageWrapper}>
                    <img
                        className={classes.image}
                        src={imgSrc}
                        alt="visual-item"
                    />
                </div>
                <div className={classes.title}>{title}</div>
            </div>
        </div>
    );
};

export default VisualItem;
