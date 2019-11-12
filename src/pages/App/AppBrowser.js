import React from 'react';
import { useSelector } from 'react-redux';
import App from './App';
import UploadSong from '../../components/UploadSong/UploadSong';
import { withRouter, Redirect } from 'react-router-dom';

// this is the {/app} route Browser.
// ToDo-
// create a "choose file source" mockup that will replace the UploadSong component here

function AppBrowser() {
    // uid and song are gonna be the trigers for re-render the the content this route will have.
    // in case uid and song are exists, user gonna transfer to the visualizer
    // in case there is user but no song, upload song mockup will be the rendered component,
    // and in case that there is no user (or user log out ...) the route will reDirect to landing page.
    const uid = useSelector(state => state.firebase.auth.uid);
    const song = useSelector(state => state.song);
<<<<<<< HEAD
    return (
        <div>
            {uid ? (
                <div> {song ? <App song={song} /> : <UploadSong />} </div>
=======

    return (
        <div>
            {uid ? (
                <div>{song.url ? <App song={song} /> : <UploadSong />}</div>
>>>>>>> upstream/development
            ) : (
                <Redirect to="/" />
            )}
        </div>
    );
}

export default withRouter(AppBrowser);
