import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import iconsGroupOne from '../../../../assets/LandingPageAssets/section-2-icons/Group1.svg';
import './SectionTwoIcons.styles.css';

// Import all icon SVGs from folder
function importAll(imgs) {
  return imgs.keys().map(imgs);
}
const icons = importAll(require.context('../../../../assets/LandingPageAssets/section-2-icons/icons', false, /\.(svg)$/));

const Icons = () => {
  return (
    <div>
      <ParallaxLayer offset={1.5} speed={0.45}>
        <img id="group-one" src={iconsGroupOne} alt={`icons frame`}/>
      </ParallaxLayer>
      <div id="group-two">
          {
            icons.map((icon, i) => {
              return (
                <div>
                  <ParallaxLayer
                    offset={0 < i && i < 4 ? 1.4 + i / 11 : 1.53}
                    speed={0.5 + i / 30}
                  >
                    <img
                      key={i}
                      src={icon}
                      alt={`icon${i}`}
                      width="35px"
                    />
                  </ParallaxLayer>
                </div>
              )
            })
          }
      </div>
      {/* <ParallaxLayer offset={1.63} speed={0.5}>
        <img id="group-two" src={iconsGroupTwo} alt={`icon 2`} width="200px" height="147px" />
      </ParallaxLayer> */}
    </div>
  );
}

export default Icons;