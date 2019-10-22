import React from 'react';
import { useSelector } from 'react-redux';
import App from './App';
import UploadSong from '../../components/UploadSong/UploadSong';

// this is the {/app} route Browser.
// ToDo-
// 1. create a "choose fole source" mockup that will replace the UploadSong component here
// 2. create AuthError mockup for user try to reach this route without connecting

const AuthError = () => {
	return <div> {'you need to login for visit the full app'} </div>;
};

function AppBrowser() {
	// uid and song are gonna be the trigers for re-render the the content this route will have.
	// in case uid and song are exists, user gonna transfer to the visualizer
	const uid = useSelector(state => state.firebase.auth.uid);
	const song = useSelector(state => state.song);
	return (
		<div>
			{uid ? (
				<div> {song ? <App song={song} /> : <UploadSong />} </div>
			) : (
				<AuthError />
			)}
		</div>
	);
}

export default AppBrowser;
