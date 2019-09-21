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
import './Visualizer.styles.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../vendor/sketches/sketch';

class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sketch
        };
    }

    render() {
        const { volume, isPlaying, uploadedSong } = this.props;
        const { sketch } = this.state;

        return (
            <div className="visualizer">
                <P5Wrapper
                    sketch={sketch}
                    volume={volume}
                    isPlaying={isPlaying}
                    uploadedSong={uploadedSong}
                />
            </div>
        );
    }
}

export default Visualizer;
