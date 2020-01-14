import React, { useState } from 'react';
import BackToPlayer from '../BackToPlayer';
import FacebookButton from './SocialIcon/FacebookButton';
import PinterestButton from './SocialIcon/PinterestButton';
import InstagramButton from './SocialIcon/InstagramButton';
import TwitterButton from './SocialIcon/TwitterButton';
import Error from '../../Error/Error';
import Success from '../../Success/Success';
import classes from './SocialIcons.module.scss';

const SocialIcons = ({ hideSocialIcons, url }) => {
    const [modal, setModal] = useState(null);

    const error = () => {
        console.log('clicked');
        setModal(<Error />);
    };

    const success = () => {
        console.log('clicked');
        setModal(<Success />);
    };

    return (
        <>
            <div className={classes.socialIconsContainer}>
                <InstagramButton url={url} success={success} error={error} />
                <TwitterButton url={url} success={success} error={error} />
                <FacebookButton url={url} success={success} error={error} />
                <PinterestButton url={url} success={success} error={error} />
            </div>
            <div className={classes.backToPlayer}>
                <BackToPlayer hideSocialIcons={hideSocialIcons} />
            </div>
            {modal}
        </>
    );
};

export default SocialIcons;
