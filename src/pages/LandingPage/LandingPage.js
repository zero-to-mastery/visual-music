import React, {PureComponent} from 'react';
import classes from './LandingPage.module.scss';

import blackHairGirl from '../../assets/LandingPageAssets/section-2/blackHairAndBubbles.png';
import SectionThreeIcons from './ContactComponents/SectionThreeIcons/SectionThreeIcons';
import ContactForm from './ContactComponents/FormComponents/ContactForm';
import  {Rotate, Roll, Fade} from'react-reveal';


export default class LandingPage extends PureComponent{
    render(){
        return(
            <div className={classes.container}>
                <Rotate bottom right>
                    <div className={`${classes.item} ${classes.item1}`}>
                        <div className={classes.int1item1}>
                            <div className={classes.myText}>
                                <h2 className={classes.heading}>
                                    <p>Discover and Share </p>   
                                    <p>Music Visualization</p>
                                </h2>

                                <p className={classes.tagline}>
                                    An app that converts your favoriet music pieces into visual
                                    expresions.
                                </p>
                            </div>
                        </div>
                    </div>
                </Rotate>
      
                <div className={`${classes.item} ${classes.item2}`}>
                    <Roll right>
                        <div className={classes.int1Item2}>
                            <div className={classes.myText}>
                                <h2 className={classes.heading} >
                                    Best Experience
                                </h2>
                                <div className={classes.tagline}>
                                    <p>Collection of visual themes to transcribe the emotional and</p>
                                    <p>rythmic effects of an uploaded mp3 song. </p>
                                </div>
                            </div>    
                        </div>
                    </Roll>

                    <Roll left>
                        <img 
                            src={blackHairGirl}
                            alt="blackHairGirl"
                            className={`${classes.blackHairGirl} ${classes.int2Item2} `}
                        />
                    </Roll>
                </div>

                <div className={`${classes.item} ${classes.item3}`}>
                    <Fade top>
                        <div className={classes.int1Item3}>
                            <h1 >Contact </h1>
                            <SectionThreeIcons /> 
                        </div>
                    </Fade>
                    <Fade Buttom>
                        <div className={classes.int2Item3}>
                        <h1 >Would you like to write us? </h1>
                            <ContactForm/>
                        </div>
                    </Fade>      
                </div> 
            </div>
        )
    }
}