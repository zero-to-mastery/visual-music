import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

export default function sketch(p) {
  let song;
  let amplitude;
  let volume;
  let isPlaying = false;

  p.setup = function () {
    p.createCanvas(200, 200);
    amplitude = new p5.Amplitude();
  }

  //Custom redraw that will trigger upon state change
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if(song) {
      if(song.isLoaded()) {
        volume = props.volume;
        isPlaying = props.isPlaying;

        //monitor volume change and toggling of pause/play button
        song.setVolume(parseFloat(volume));
        p.togglePlaying(song);

        //Reinitializes song if a new file is uploaded
        if(song.file !== props.uploadedSong) {
          song.dispose();
          song = p.loadSound(props.uploadedSong);
        }
      }
    } else {
      //handles initial song load
      if(props.uploadedSong) {
        song = p.loadSound(props.uploadedSong);
      }
    }
  }

  p.togglePlaying = function(song) {
    if(isPlaying && !song.isPlaying()) {
      song.play();
    } else if (!isPlaying && song.isPlaying()) {
      song.pause();
    }
  }

  p.draw =function () {
    p.background(51);

    let songVolume = amplitude.getLevel();
    let ellipseDiameter = p.map(songVolume, 0, 1, 10, 200); // you need the map() in order to get a big enough ellipse

    p.fill(255,0,255);
    p.ellipse(p.width/2, p.height/2, ellipseDiameter, ellipseDiameter);
  }
};