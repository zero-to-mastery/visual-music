import React, { useState } from 'react';
import { ReactComponent as ShareIcon } from '../../assets/SharingAssets/share-icon.svg';
import DefaultImg from '../../assets/LandingPageAssets/bg-image2.gif';
import BackToPlayer from './BackToPlayer';
import SocialIcons from './SocialIcons/SocialIcons';
import classes from './ScreenshotModal.module.scss';

const ScreenshotModal = ({ screenshotUrl }) => {
    const [showSocialIcons, setShowSocialIcons] = useState(false);

    const showSocialIconsHandler = () => {
        setShowSocialIcons(true);
    };

    const hideSocialIconsHandler = () => {
        setShowSocialIcons(false);
    };

    return (
        <div className={screenshotUrl ? classes.showModal : classes.hideModal}>
            <img
                className={classes.image}
                src={screenshotUrl || DefaultImg}
                alt="screenshot"
            />
            <div className={classes.options}>
                {showSocialIcons ? (
                    <SocialIcons
                        hideSocialIcons={hideSocialIconsHandler}
                        url={screenshotUrl}
                    />
                ) : (
                    <div
                        className={classes.shareOption}
                        onClick={showSocialIconsHandler}
                    >
                        <p>Share Visual</p>
                        <ShareIcon className={classes.shareIcon} />
                    </div>
                )}

                {!showSocialIcons && (
                    <BackToPlayer hideSocialIcons={hideSocialIconsHandler} />
                )}
            </div>
        </div>
    );
};

export default ScreenshotModal;
