import React from 'react';

// import Error from '../../components/Error/Error';
 import UnsupportedFile from '../../components/UnsupportedFile/unsupportedFile';

// import SoundPlayer from '../../components/SoundPlayer/SoundPlayer.component';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import PlayerBar from '../../components/PlayerBar/PlayerBar';
import classes from './App.module.scss';

// import UploadSong from '../../components/UploadSong/UploadSong';
import HamburgerToggle from '../../components/HamburgerToggle/HamburgerToggle';
import VisualPanel from '../../components/VisualPanel/VisualPanel';

let soundReset = {
    isPlaying: false
};

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            uploadedSong: null,
            isSongLoaded: false,
            volume: 0.5,
            ...soundReset,
            togglePanel: false
        };
    }

    componentDidMount() {
        this.setState({
            uploadedSong: this.props.song,
            isSongLoaded: true,
            ...soundReset
        });
    }

    /********************************************
        Handles changing of volume state upon
        slider interaction. State changes are sent to
        sketch file adjusting the sound's actual
        volume to change ellipse diameter on redraw.
    ********************************************/
    onVolumeChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    /*********************************************
        Handles toggling of pause/play button.
        Used to monitor if the user wants to pause/play
        the loaded sound. State changes are sent to
        sketch file which executes a .pause() or .play()
        command.
    *********************************************/
    onPlayPress = event => {
        const { uploadedSong } = this.state;
        if (uploadedSong) {
            this.setState({ isPlaying: !this.state.isPlaying }, () => {
                this.setState({
                    buttonText: this.state.isPlaying ? 'Pause' : 'Play'
                });
            });
        } else {
            alert('No file loaded');
        }
    };

    /********************************************
        Uploaded audio file duration converted in
        to proper format e.g. 3:14
    ********************************************/
    getTime = dur => {
        return (
            Math.floor(dur / 60) + ':' + ('0' + Math.floor(dur % 60)).slice(-2)
        );
    };

    /********************************************
        Handle hamburger toggle callback. When 
        hamburger toggle's state changed, we need
        to set togglePanel state
    *********************************************/
    onTogglePanel = toggleState => {
        this.setState({ togglePanel: toggleState });
    };

    render() {
        const {
            uploadedSong,
            isSongLoaded,
            duration,
            volume,
            isPlaying,
            onSongEnd,
            togglePanel
        } = this.state;

        return (
            <div className={classes.pageContainer}>
                <div className={classes.visualmusic}>
                    <div className={classes.visualContainer}>
                        <div
                            className={`${classes.visualmusic} ${
                                togglePanel ? classes.shrink : ''
                            }`}
                        >
                            <div className={classes.hamburger}>
                                <HamburgerToggle
                                    initToggle={this.state.togglePanel}
                                    onClick={this.onTogglePanel}
                                />
                            </div>
                            <Visualizer
                                volume={volume}
                                isPlaying={isPlaying}
                                uploadedSong={
                                    uploadedSong ? uploadedSong.url : null
                                }
                                onSongEnd={onSongEnd}
                            />

                            <UnsupportedFile/>
                            
                        </div>
                        <div
                            className={`${classes.visualPanel} ${
                                togglePanel ? classes.slideIn : ''
                            }`}
                        >
                            <VisualPanel />
                        </div>
                    </div>
                    <div>
                        <audio
                            id="audio"
                            ref={ref => (this.player = ref)}
                        ></audio>
                    </div>
                    <div className={classes.bar}>
                        <PlayerBar
                            volume={volume}
                            onVolumeChange={this.onVolumeChange}
                            onPlayPress={this.onPlayPress}
                            isPlaying={isPlaying}
                            uploadedSong={uploadedSong}
                            isSongLoaded={isSongLoaded}
                            duration={duration}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
