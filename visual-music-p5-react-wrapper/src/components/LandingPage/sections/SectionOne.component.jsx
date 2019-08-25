import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../../Button/Button.component.jsx';

const SectionOne = ({ handleRouteChange }) => (
  <section id="section-one">
    <ParallaxLayer speed={0.2} offset={0.35}>
      <h2 className="content-wrapper heading">Discover and Share Music Visualization</h2>
    </ParallaxLayer>
    <ParallaxLayer speed={0.09} offset={0.58}>
      <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
    </ParallaxLayer>
    <ParallaxLayer speed={0.03} offset={0.6}>
      <p className="content-wrapper tagline">
        An app that converts your favoriet music pieces into visual expresions.
      </p>
    </ParallaxLayer>
    <ParallaxLayer speed={-0.12} offset={0.75}>
      <Button
        text="Get Started"
        btnClass="getStarted"
        handleRouteChange={handleRouteChange}
        to="visualizer"
      />
    </ParallaxLayer>
  </section>
)

export default SectionOne;