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
      <ParallaxLayer offset={1.5} speed={0.45}>
        <img id="frame" src={iconsGroupOne} alt={`icons frame`}/>
      </ParallaxLayer>

      <div>

        <ParallaxLayer offset={1.59} speed={0.52}>
          <img src={download} alt="download" className="icon" id="download" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.78} speed={0.55}>
          <img src={print} alt="print" className="icon" id="print" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.52} speed={0.5}>
          <img src={share} alt="share" className="icon" id="share" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.68} speed={0.52}>
          <img src={snapshot} alt="snapshot" className="icon" id="snapshot" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.59} speed={0.52}>
          <img src={song} alt="song" className="icon" id="song" />
        </ParallaxLayer>

      </div>
    </div>
  );
}

export default Icons;