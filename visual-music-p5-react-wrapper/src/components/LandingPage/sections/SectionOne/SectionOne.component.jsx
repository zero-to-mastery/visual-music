import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../../../Button/Button.component.jsx';

const SectionOne = ({ handleRouteChange, scrollClick }) => (
  <section>
    <ParallaxLayer speed={0.15} offset={0.32}>
      <h2 className="content-wrapper heading">Discover and Share Music Visualization</h2>
    </ParallaxLayer>
    <ParallaxLayer speed={0.04} offset={0.54}>
      <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
    </ParallaxLayer>
    <ParallaxLayer speed={0.1} offset={0.57}>
      <p className="content-wrapper tagline">
        An app that converts your favoriet music pieces into visual expresions.
      </p>
    </ParallaxLayer>
    <ParallaxLayer
      speed={-0.1}
      offset={0.7}
      style={{ zIndex: '97' }}
    >
      <Button
        text="Get Started"
        btnClass="get-started"
        handleRouteChange={handleRouteChange}
        to="visualizer"
      />
      
    </ParallaxLayer>
    <ParallaxLayer speed={-0.1} offset={0.75} style={{ zIndex: '98', height: 0 }}>
      <Button text="Scroll" handleRouteChange={scrollClick} btnClass="scroll" />
    </ParallaxLayer>
  </section>
)

export default SectionOne;