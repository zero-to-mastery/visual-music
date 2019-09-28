import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

// import Icons from './SectionTwoIcons/SectionTwoIcons.component.jsx'
import Button from '../../../Button/Button.component.jsx';
import './SectionTwo.styles.css';
import blackHairGirl from '../../../../assets/LandingPageAssets/section-2-icons/blackHairAndBubbles.png';

const SectionTwo = ({ scrollClick }) => (
  <section>
    <ParallaxLayer speed={0.15} offset={1.29}>
      <h2 className="content-wrapper heading">Best Experience</h2>
    </ParallaxLayer>

    <ParallaxLayer speed={0.04} offset={1.4}>
      <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
    </ParallaxLayer>

    <ParallaxLayer speed={0.1} offset={1.42}>
      <p className="content-wrapper tagline">
        Collection of visual themes to transcribe the emotional and rythmic effects of an uoloaded mp3 song.
      </p>
    </ParallaxLayer>

    <ParallaxLayer speed={0.2} offset={1.3}>
      <div className="black-hair-girl-wrapper">
        <img src={blackHairGirl} alt="black haired girl" className="black-hair-girl"/>
      </div>
    </ParallaxLayer>

    {/* <Icons /> */}
    
    <ParallaxLayer speed={0} offset={1.75} style={{zIndex: '80'}}>
      <Button text="Scroll" handleRouteChange={scrollClick} btnClass="scroll" />
    </ParallaxLayer>
  </section>
)

export default SectionTwo;
