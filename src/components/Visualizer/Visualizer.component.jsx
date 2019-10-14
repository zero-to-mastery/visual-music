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

import React from 'react';
import classes from './Visualizer.module.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../vendor/sketches/sketch';
import Measure from 'react-measure' 

class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sketch,
            canvasWidth:0,
            canvasHeight:0
        };
    }

    onResize = (content)=>{
        const {width, height, left, top} = content;
        const cWidth = width - left;
        const cHeight = height - top;
        this.setState({canvasWidth:cWidth, canvasHeight:cHeight});
    }

    render() {
        const { volume, isPlaying, uploadedSong } = this.props;
        const { sketch, canvasWidth, canvasHeight } = this.state;

        return (
            <Measure
            offset
            onResize={content=>{
                this.onResize(content.offset);
            }}
            >
                {({measureRef}) => (
                    <div ref={measureRef} className={classes.visualizer}>
                        <P5Wrapper
                            sketch={sketch}
                            volume={volume}
                            isPlaying={isPlaying}
                            uploadedSong={uploadedSong}
                            canvasWidth={canvasWidth}
                            canvasHeight={canvasHeight}
                        />
                    </div>
                )}
            </Measure>

        );
    }
}

export default Visualizer;
