/*********************** 

Main component for Section Three of the Landing Page.
Contact and check out on social media.

Current features:
1. Contact Form.
2. Social links.

TODO: - Responsive to screen size.
TODO: - Refactor section's text to it's own component. 

************************/

import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../../../../components/units/Button/Button';
import SectionThreeIcons from './SectionThreeIcons/SectionThreeIcons';
import Contactform from './FormComponents/ContactForm';

import classes from '../../LandingPage.module.scss';

const SectionThree = ({ scrollClick }) => (
    <section>
        <ParallaxLayer speed={0.15} offset={2.33} style={{ height: '0' }}>
            <h2 className={`${classes.contentWrapper} ${classes.heading}`}>
                Contact
            </h2>
        </ParallaxLayer>

        <ParallaxLayer speed={0.04} offset={2.45} style={{ height: '0' }}>
            <hr
                style={{
                    marginLeft: '8%',
                    width: '30%',
                    border: '2px solid white'
                }}
            />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1} offset={2.47} style={{ height: '0' }}>
            <p className={`${classes.contentWrapper} ${classes.tagline}`}>
                Would you like to write us?
            </p>
        </ParallaxLayer>

        <SectionThreeIcons />

        <ParallaxLayer
            offset={2.3}
            speed={0.6}
            style={{ zIndex: '99', height: '0' }}
        >
            <Contactform />
        </ParallaxLayer>

        <ParallaxLayer speed={0} offset={2.75} onClick={scrollClick}>
            <Button text="Scroll" btnClass="scroll" />
        </ParallaxLayer>
    </section>
);

export default SectionThree;
