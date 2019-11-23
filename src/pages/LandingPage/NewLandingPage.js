import React, {PureComponent} from 'react';
import classes from './NewLandingPage.module.scss';

import blackHairGirl from '../../assets/LandingPageAssets/section-2/blackHairAndBubbles.png';
import SectionThreeIcons from './sections/SectionThree/SectionThreeIcons/SectionThreeIcons'
import ContactForm from './sections/SectionThree/FormComponents/ContactForm'



export class NewLandingPage extends PureComponent{

    render(){
        return(
            <div className={classes.container}>
      
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
      
                <div className={`${classes.item} ${classes.item2}`}>
      
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
                    {/* <div className={classes.int2Item2}> */}
                            <img 
                                src={blackHairGirl}
                                className={`${classes.blackHairGirl} ${classes.int2Item2} `}
                            />
                    {/* </div> */}
                </div>

                <div className={`${classes.item} ${classes.item3}`}>
                    <div className={classes.int1Item3}>
                        <h1 >Contact </h1>
                        <SectionThreeIcons /> 
                    </div>
                    <div className={classes.int2Item3}>
                    <h1 >Would you like to write us? </h1>
                        <ContactForm/>
                    </div>
      
      
                  </div> 
      
            </div>
        )
    }




}