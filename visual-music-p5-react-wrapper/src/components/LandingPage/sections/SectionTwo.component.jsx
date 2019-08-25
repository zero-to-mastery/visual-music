import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Icons from '../Icons/Icons.component.jsx'

const SectionTwo = () => (
  <section id="section-two">
    <ParallaxLayer speed={0.09} offset={1.22}>
      <h2 className="content-wrapper heading">Best Experience</h2>
    </ParallaxLayer>
    <ParallaxLayer speed={0.04} offset={1.35}>
      <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
    </ParallaxLayer>
    <ParallaxLayer speed={0.005} offset={1.4}>
      <p className="content-wrapper tagline">
        Collection of visual themes to transcribe the emotional and rythmic effects of an uoloaded mp3 song.
      </p>
    </ParallaxLayer>
    <Icons />
  </section>
)

export default SectionTwo;
