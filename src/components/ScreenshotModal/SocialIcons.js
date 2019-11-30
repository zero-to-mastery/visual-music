import React from 'react';
import BackToPlayer from './BackToPlayer';
import { ReactComponent as Facebook } from '../../assets/SharingAssets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/SharingAssets/instagram.svg';
import { ReactComponent as Pinterest } from '../../assets/SharingAssets/pinterest.svg';
import { ReactComponent as Twitter } from '../../assets/SharingAssets/twitter.svg';
import classes from './SocialIcons.module.scss';

const SocialIcons = ({ hideSocialIcons }) => {
    return (
        <>
            <div className={classes.socialIconsContainer}>
                <Instagram className={classes.socialIcon} />
                <Twitter className={classes.socialIcon} />
                <Facebook className={classes.socialIcon} />
                <Pinterest className={classes.socialIcon} />
            </div>
            <div className={classes.backToPlayer}>
                <BackToPlayer hideSocialIcons={hideSocialIcons} />
            </div>
        </>
    );
};

export default SocialIcons;
