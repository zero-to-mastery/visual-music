import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import classes from './SectionThreeIcons.module.scss';

import importAll from '../../../../../utils/importAllFiles';

// Import all icons from assets folder
const icons = importAll(require.context('../../../../../assets/LandingPageAssets/section-3-icons', false, /\.(svg)$/));
const [ facebook, linkedIn, github, medium ] = icons;

const SectionThreeIcons = () => (
  <div className={classes.socialIcons}>
    <ParallaxLayer
      offset={2.54}
      speed={0.5}
      id={classes.github}
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={github} alt="github" className={classes.socialIcon} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.6}
      id={classes.linkedIn}
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={linkedIn} alt="linkedIn" className={classes.socialIcon} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.7}
      id={classes.facebook}
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={facebook} alt="facebook" className={classes.socialIcon} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={2.54}
      speed={0.8}
      id={classes.medium}
      style={{ width: 'min-content', height: '0', zIndex: '99' }}
    >
      <img src={medium} alt="medium" className={classes.socialIcon} />
    </ParallaxLayer>
  </div>
)

export default SectionThreeIcons;