import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as DownloadIcon } from '../../../assets/PlayerBarAssets/download-icon.svg';
import { ReactComponent as DownloadIconReady } from '../../../assets/PlayerBarAssets/download-ready-icon.svg';
import { downloadVisualStart } from '../../../store/actions/downloadActions';

export default function DownloadButton({ songEnded, isPlaying }) {
    const dispatch = useDispatch();

    const onDownloadVisual = () => {
        dispatch(downloadVisualStart());
    };
    return (
        <>
            {songEnded && !isPlaying ? (
                <DownloadIconReady onClick={onDownloadVisual} />
            ) : (
                <DownloadIcon />
            )}
        </>
    );
}
