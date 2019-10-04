/*********************** 

Main component for Section One of the Landing Page.
Welcome users into the app.

Current features:
1. Get Strated button.

TODO: - Responsive to screen size.
TODO: - Refactor section's text to it's own component.

************************/

import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import classes from '../../LandingPage.module.scss';
import Button from '../../../Button/Button';

const SectionOne = ({ scrollClick }) => (
    <section>
        <ParallaxLayer speed={0.15} offset={0.32}>
            <h2 className={`${classes.contentWrapper} ${classes.heading}`}>
                Discover and Share Music Visualization
            </h2>
        </ParallaxLayer>

        <ParallaxLayer speed={0.04} offset={0.54}>
            <hr
                style={{
                    marginLeft: '8%',
                    width: '30%',
                    border: '2px solid white'
                }}
            />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1} offset={0.57}>
            <p className={`${classes.contentWrapper} ${classes.tagline}`}>
                An app that converts your favoriet music pieces into visual
                expresions.
            </p>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.1} offset={0.7} style={{ zIndex: '97' }}>
            <Button text="Get Started" btnClass="getStarted" to="visualizer" />
        </ParallaxLayer>

        <ParallaxLayer
            speed={-0.1}
            offset={0.75}
            style={{ zIndex: '98', height: 0 }}
            onClick={scrollClick}
        >
            <Button text="Scroll" btnClass="scroll" />
        </ParallaxLayer>
    </section>
);

export default SectionOne;
