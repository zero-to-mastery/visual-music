import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import iconsGroupOne from '../../../../assets/LandingPageAssets/section-2-icons/Group1.svg';
import './SectionTwoIcons.styles.css';

// Import all icon SVGs from folder
function importAll(imgs) {
  return imgs.keys().map(imgs);
}
const icons = importAll(require.context('../../../../assets/LandingPageAssets/section-2-icons/icons', false, /\.(svg)$/));
const [ download, print, share, snapshot, song ] = icons;
const Icons = () => {
  return (
    <div className="icons">
      <ParallaxLayer offset={1.45} speed={0.45}>
        <img id="frame" src={iconsGroupOne} alt={`icons frame`}/>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.63}
        speed={0.50}
        id="download"
        style={{ width: 'min-content', height: '0' }}
      >
        <img src={download} alt="download" className="icon" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.724}
        speed={0.56}
        id="print"
        style={{ width: 'min-content', height: '0' }}
      >
        <img src={print} alt="print" className="icon" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.545}
        speed={0.50}
        id="share"
        style={{ width: 'min-content', height: '0' }}
      >
        <img src={share} alt="share" className="icon" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.467}
        speed={0.52}
        id="snapshot"
        style={{ width: 'min-content', height: '0' }}
      >
        <img src={snapshot} alt="snapshot" className="icon" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.54}
        speed={0.52}
        id="song"
        style={{ width: 'min-content',height: '0' }}
      >
        <img src={song} alt="song" className="icon" />
      </ParallaxLayer>

    </div>
  );
}

export default Icons;