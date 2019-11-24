/*************************

Component for social icons in Section Three.

Current features:
1. Social media icons for Github and LinkedIn. 

********************** 
Implement icons hover animations using react-spring (already installed for parallax). /** paralax deleted
Responsive to screen size. //*** screen is responsive
*****************

TODO: - Implement click functionality for the icons.

************************/

import React from 'react';
import classes from './SectionThreeIcons.module.scss';

import importAll from './../../../../utils/importAllFiles'



// Import all icons from assets folder
const icons = importAll(
    require.context(
        './../../../../assets/LandingPageAssets/section-3-icons/',
        false,
        /\.(svg)$/
    )
);
const [linkedIn, github] = icons;

const SectionThreeIcons = () => (
    <div className={classes.socialIcons}>
        <span id={classes.github}>
        {/* <ParallaxLayer
            offset={2.54}
            speed={0.5}
            id={classes.github}
            style={{ width: 'min-content', height: '0', zIndex: '99' }}
        > */}
            <a href = "https://github.com/zero-to-mastery/visual-music" target="_blank" 
            rel="noopener noreferrer">
            <img src={github} alt="github" className={classes.socialIcon} />
            </a>
        {/* </ParallaxLayer> */}
        </span>

        {/* <ParallaxLayer
            offset={2.54}
            speed={0.6}
            id={classes.linkedIn}
            style={{ width: 'min-content', height: '0', zIndex: '99' }}
        > */}
        <span id={classes.linkedIn}>

            <a href = "https://www.linkedin.com/company/zerotomastery/" target="_blank"
                rel="noopener noreferrer">
                <img src={linkedIn} alt="linkedIn" className={classes.socialIcon} />
                </a>
        </span>
        {/* </ParallaxLayer> */}

    </div>
);

export default SectionThreeIcons;
