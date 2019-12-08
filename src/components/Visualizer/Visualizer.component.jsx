/************************************************************
    Main component for music visualization.
    Uses react-p5-wrapper to load state values to the p5 canvas.

    Current loaded sketch file is defined in line 18.
    It is then passed as props to P5Wrapper component
    along with other needed values such as volume, uploaded file, etc.

    Current features:
    1. Display ellipses based on sound's amplitude.

    TODO:

************************************************************/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Visualizer.module.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../vendor/sketches/sketch';
import Measure from 'react-measure';

const Visualizer = React.memo(props => {
    const [canvasWidth, setCanvasWidth] = useState(100);
    const [canvasHeight, setCanvasHeight] = useState(100);

    const onResize = content => {
        const { width, height, left, top } = content;
        const cWidth = width - left;
        const cHeight = height - top;
        setCanvasWidth(cWidth);
        setCanvasHeight(cHeight);
    };

    const {
        volume,
        takeScreenshot,
        cueTime,
        playPressed,
        uploadedSong,
        downloadVisual,
        blob
    } = props;

    return (
        <Measure
            offset
            onResize={content => {
                onResize(content.offset);
            }}
        >
            {({ measureRef }) => (
                <div ref={measureRef} className={classes.visualizer}>
                    <P5Wrapper
                        sketch={sketch}
                        playPressed={playPressed}
                        volume={volume}
                        takeScreenshot={takeScreenshot}
                        uploadedSong={uploadedSong}
                        canvasWidth={canvasWidth}
                        canvasHeight={canvasHeight}
                        downloadVisual={downloadVisual}
                        blob={blob}
                        cueTime={cueTime}
                        dispatch={useDispatch()}
                    />
                </div>
            )}
        </Measure>
    );
});

export default Visualizer;
