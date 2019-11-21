import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSong, storeBlob } from '../../store/actions/songActions';
import FileUploader from 'react-firebase-file-uploader';
import firebase from '../../firebase/config';
import classes from './UploadSong.module.scss';
import ProgressSpinner from '../ProgressSpinner/ProgressSpinner';

function UploadSong() {
    const [uploadProgress, setUploadProgress] = useState(0);
    const dispatch = useDispatch();

    const uid = useSelector(state => state.firebase.auth.uid);

    // i've added FileUploader hidden button at the bottom of the return and it "clicked" when the svg button clicked.
    // useEffect needed here because we don't want just to attach the hidden button to the click (and only in the second clicking fire the fileuploader),
    // we want it to simulate a click at the first click, so at the click first useEffect attach the click and then the click fired

    const handleClick = React.useEffect(() => {
        const fileSelect = document.getElementById('fileSelect');
        const fileElem = document.getElementById('fileElem');
        fileSelect.addEventListener(
            'click',
            function(e) {
                if (fileElem) {
                    fileElem.click();
                }
            },
            false
        );
    }, []);

    const handleUploadSuccess = filename => {
        firebase
            .storage()
            .ref(uid)
            .child(filename)
            .getDownloadURL()
            .then(url => dispatch(setSong({ url, filename })));
    };

    const handleUploadStart = blob => {
        dispatch(storeBlob(blob));
    };

    const handleProgress = progress => {
        setUploadProgress(progress);
    };

    const handleUploadError = error => {
        // ToDo - implement error span
        console.log(error);
    };

    return (
        <div className={classes.boxStyle}>
            {uploadProgress !== 0 ? (
                <ProgressSpinner percentage={uploadProgress} />
            ) : (
                <div className={classes.uploadFunctionalityStyle}>
                    <button
                        className={classes.iconStyle}
                        id="fileSelect"
                        onClick={handleClick}
                    >
                        <svg
                            width="52"
                            height="38"
                            viewBox="0 0 52 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.5"
                                d="M34.2857 20C34.2857 20.4554 33.9107 20.8571 33.4286 20.8571H27.4286V30.2857C27.4286 30.7411 27.0268 31.1429 26.5714 31.1429H21.4286C20.9732 31.1429 20.5714 30.7411 20.5714 30.2857V20.8571H14.5714C14.0893 20.8571 13.7143 20.4821 13.7143 20C13.7143 19.7589 13.8214 19.5446 13.9821 19.3571L23.3839 9.95535C23.5446 9.79464 23.7857 9.71428 24 9.71428C24.2411 9.71428 24.4554 9.79464 24.6161 9.95535L34.0446 19.3839C34.2054 19.5446 34.2857 19.7857 34.2857 20ZM51.4286 27.7143C51.4286 22.9464 48.1339 18.7946 43.4732 17.6964C44.1964 16.5982 44.5714 15.3125 44.5714 14C44.5714 10.2232 41.4911 7.14285 37.7143 7.14285C36.0804 7.14285 34.5 7.73214 33.2679 8.80357C31.1518 3.66071 26.1429 0.285712 20.5714 0.285712C12.9911 0.285712 6.85714 6.41964 6.85714 14C6.85714 14.375 6.88393 14.75 6.91071 15.1518C2.70536 17.1071 0 21.3393 0 26C0 32.6161 5.38393 38 12 38H41.1429C46.8214 38 51.4286 33.3929 51.4286 27.7143Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <div className={classes.uploadText}>Upload New Song</div>
                    <div className={classes.fileFormatStyle}>
                        file format supported: mp3
                    </div>
                </div>
            )}

            <FileUploader
                id="fileElem"
                style={{ display: 'none' }}
                onUploadStart={handleUploadStart}
                onProgress={handleProgress}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
                accept="audio/*"
                name="file"
                storageRef={firebase.storage().ref(uid)}
            />
        </div>
    );
}

export default UploadSong;
