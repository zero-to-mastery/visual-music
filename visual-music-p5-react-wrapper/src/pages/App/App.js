import React from 'react';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer.component';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import LandingPage from '../../components/LandingPage/LandingPage.component';
import Button from '../../components/Button/Button.component.jsx'
import './App.css';

let soundReset = {
    isPlaying: false,
    buttonText: 'Play'
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            uploadedSong: null,
            volume: 0.5,
            ...soundReset,
            route: 'landingPage'
        }
    }

    /********************************************
        Handles changing of volume state upon
        slider interaction. State changes are sent to
        sketch file adjusting the sound's actual
        volume to change ellipse diameter on redraw.
    ********************************************/
    onVolumeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

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
            this.setState({isPlaying: !(this.state.isPlaying)}, () => {
                this.setState({buttonText: this.state.isPlaying ? 'Pause' : 'Play'});
            });
        } else {
            alert('No file loaded');
        }
    }

    /********************************************
        Handle file uploads. Uploaded file is saved
        as state and is passed down to the sketch file as props.
        Sketch then loads the file using p5.Sound library.
    *********************************************/
    onFileUpload = event => {
        const song = event.target.files[0];
        this.setState({uploadedSong: song, ...soundReset});
    }

    /********************************************
        Handle file uploads. Uploaded file is saved
        as state and is passed down to the sketch file as props.
        Sketch then loads the file using p5.Sound library.
    *********************************************/
    handleRouteChange = route => {
      this.setState({ route })
    }

    render() {
        const { uploadedSong, volume, isPlaying, buttonText, onSongEnd } = this.state;
        return (
          <>
            {this.state.route === 'landingPage'
              ? <LandingPage handleRouteChange={(route) => this.handleRouteChange(route)} />
              : <div className='visualmusic'>
                  <Visualizer
                      volume = {volume}
                      isPlaying = {isPlaying}
                      uploadedSong = {uploadedSong}
                      onSongEnd = {onSongEnd}
                  />
                  <SoundPlayer
                      volume = {volume}
                      buttonText = {buttonText}
                      onPlayPress = {this.onPlayPress}
                      onVolumeChange = {this.onVolumeChange}
                      onFileUpload = {this.onFileUpload}
                  />
                  <Button text="GoBack" handleRouteChange={(route) => this.handleRouteChange(route)} to="landingPage" />
                </div>
            }
          </>
        );
    }
}

export default App;