import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initChat, disconnect } from '../../store/actions/chatActions';
import App from './App';
import UploadSong from '../../components/UploadSong/UploadSong';
import { withRouter, Redirect } from 'react-router-dom';

// this is the {/app} route Browser

function AppBrowser() {
    // uid and song are gonna be the trigers for re-render the the content this route will have.
    // in case uid and song are exists, user gonna transfer to the visualizer
    // in case there is user but no song, upload song mockup will be the rendered component,
    // and in case that there is no user (or user log out ...) the route will reDirect to landing page.
    const uid = useSelector(state => state.firebase.auth.uid);
    const userName = useSelector(state => state.firebase.profile.name);
    const songURl = useSelector(state => state.song.url);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (userName) {
            dispatch(initChat({ uid, userName }));
            //  the window listener is to include also if user close tab while on '/app' route that not catch in a regualr return () || componentWillUnmount
            window.addEventListener('beforeunload', () =>
                dispatch(disconnect(uid))
            );
        }
        return () => {
            dispatch(disconnect(uid));
            window.removeEventListener('beforeunload', () =>
                dispatch(disconnect(uid))
            );
        };
    }, [userName, dispatch, uid]);

    return (
        <div>
            {uid ? (
                <> {songURl ? <App /> : <UploadSong />} </>
            ) : (
                <Redirect to="/" />
            )}
        </div>
    );
}

export default withRouter(AppBrowser);
