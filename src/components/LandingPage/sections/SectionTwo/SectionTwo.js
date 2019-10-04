/*********************** 

Main component for Section Two of the Landing Page.

TODO: - Responsive to screen size.
TODO: - Refactor section's text to it's own component.

************************/

import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../../../Button/Button';
import classes from '../../LandingPage.module.scss';
import blackHairGirl from '../../../../assets/LandingPageAssets/section-2/blackHairAndBubbles.png';

const SectionTwo = ({ scrollClick }) => (
    <section>
        <ParallaxLayer speed={0.15} offset={1.29}>
            <h2 className={`${classes.contentWrapper} ${classes.heading}`}>
                Best Experience
            </h2>
        </ParallaxLayer>

        <ParallaxLayer speed={0.04} offset={1.4}>
            <hr
                style={{
                    marginLeft: '8%',
                    width: '30%',
                    border: '2px solid white'
                }}
            />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1} offset={1.42}>
            <p className={`${classes.contentWrapper} ${classes.tagline}`}>
                Collection of visual themes to transcribe the emotional and
                rythmic effects of an uploaded mp3 song.
            </p>
        </ParallaxLayer>

        <ParallaxLayer speed={0.2} offset={1.3}>
            <div className={classes.blackHairGirlWrapper}>
                <img
                    src={blackHairGirl}
                    alt="black haired girl"
                    className={classes.blackHairGirl}
                />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={0}
            offset={1.75}
            style={{ zIndex: '80' }}
            onClick={scrollClick}
        >
            <Button text="Scroll" btnClass="scroll" />
        </ParallaxLayer>
    </section>
);

export default SectionTwo;
