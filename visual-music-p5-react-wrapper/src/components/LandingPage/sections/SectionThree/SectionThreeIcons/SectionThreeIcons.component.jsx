import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './SectionThreeIcons.styles.css';

import importAll from '../../../../../utils/importAllFiles';

// Import all icons from assets folder
const icons = importAll(require.context('../../../../../assets/LandingPageAssets/section-3-icons', false, /\.(svg)$/));
const [ facebook, linkedIn, github, medium ] = icons;

const SectionThreeIcons = () => (
  <div className="social-icons">
    <ParallaxLayer
      offset={2.54}
      speed={0.5}
      id="github"
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={github} alt="github" className="social-icon" />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.6}
      id="linkedIn"
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={linkedIn} alt="linkedIn" className="social-icon" />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.7}
      id="facebook"
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={facebook} alt="facebook" className="social-icon" />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.8}
      id="medium"
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={medium} alt="medium" className="social-icon" />
    </ParallaxLayer>
  </div>
)

export default SectionThreeIcons;