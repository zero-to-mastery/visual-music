/*********************** 

Main component for the Landing Page.
Welcome users into the app and sign up new users.

Current features:
1. Scroll button to scroll to next section. 
2. Sign Up form.










************************/



// da usare  
// *******************sezione 1****************************************************
// classes.landingPageBg}



// <h2 className={`${classes.contentWrapper} ${classes.heading}`}>
// Discover and Share Music Visualization
// </h2>

// <hr
// style={{
//     marginLeft: '8%',
//     width: '30%',
//     border: '2px solid white'
// }}
// />
// <p className={`${classes.contentWrapper} ${classes.tagline}`}>
// An app that converts your favoriet music pieces into visual
// expresions.
// </p>

// <Button text="Get Started" btnClass="getStarted" to="visualizer" />

// <Button text="Scroll" btnClass="scroll" />


/**
 * *********************  sezione 2**********************************************
            <hr
                style={{
                    marginLeft: '8%',
                    width: '30%',
                    border: '2px solid white'
                }}
            />
 
            <p className={`${classes.contentWrapper} ${classes.tagline}`}>
                Collection of visual themes to transcribe the emotional and
                rythmic effects of an uploaded mp3 song.
            </p>
 
            <div className={classes.blackHairGirlWrapper}>
                <img
                    src={blackHairGirl}
                    alt="black haired girl"
                    className={classes.blackHairGirl}
                />
            </div>
 
            <Button text="Scroll" btnClass="scroll" />
 


            ******************************* sezione 3 *************************




            <h2 className={`${classes.contentWrapper} ${classes.heading}`}>
                Contact
            </h2>

            <hr
                style={{
                    marginLeft: '8%',
                    width: '30%',
                    border: '2px solid white'
                }}
            />

            <p className={`${classes.contentWrapper} ${classes.tagline}`}>
                Would you like to write us?
            </p>
            <Button text="Scroll" btnClass="scroll" />


 */







import React, { Component } from 'react';
import classes from './LandingPage.module.scss';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionTwo from './sections/SectionTwo/SectionTwo';
import SectionThree from './sections/SectionThree/SectionThree';

import blackHairGirl from '../../assets/LandingPageAssets/section-2/blackHairAndBubbles.png';
import SectionThreeIcons from './sections/SectionThree/SectionThreeIcons/SectionThreeIcons';
import Contactform from './sections/SectionThree/FormComponents/ContactForm'


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={classes.landingPageBg} >
                <div className={classes.item1}>
                    <h2 className={classes.heading}>
                         <p>Discover and Share </p>   
                        <p>Music Visualization</p>
                    </h2>

                    <p className={classes.tagline}>
                         An app that converts your favoriet music pieces into visual
                         expresions.
                    </p>
                </div>
                <div className={classes.item2}>
                    <div  className={classes.divInt}>
                        <h2 >
                            Best Experience
                        </h2>
                        <div className={`${classes.contentWrapper} ${classes.tagline}`}>
                            <p>Collection of visual themes to transcribe the emotional and</p>
                            <p>rythmic effects of an uploaded mp3 song. </p>

                        </div>
                    </div>
                        <img
                            src={blackHairGirl}
                            alt="black haired girl"
                            className={classes.blackHairGirl}
                        />
                </div>
                <div className={classes.item3}>
                    <div className={classes.divInt1}>
                        <h2 >
                            Contact
                        </h2>
                         <SectionThreeIcons /> 
                    </div>

                    <div className={classes.divInt2}>
                        <p className={classes.tagline}>
                            Would you like to write us?
                        </p>                    
                         <Contactform /> 

                    </div>




                </div>

            </div>
        );
    }
}

export default LandingPage;
