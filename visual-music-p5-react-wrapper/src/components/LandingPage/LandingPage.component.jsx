import React, { Component } from 'react';
import './LandingPage.styles.css';
import logo from '../../assets/LogoSVG.svg';

import { config } from 'react-spring/renderprops'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import Button from '../Button/Button.component.jsx';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="landing-page-bg" />
        <nav>
          <img src={logo} alt="logo" height="100px" width="100px" />
        </nav>
        <Parallax pages={3} config={{ tension: 70, friction: 40 }}>
          <ParallaxLayer offset={1} speed={0.9} style={{ backgroundColor: 'rgba(13, 78, 103, 0.56)' }}/>
          <ParallaxLayer offset={2} speed={0.55} style={{ backgroundColor: 'rgba(41, 172, 109, 0.56)' }}/>

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
              <Button text="Get Started" btnClass="getStarted" />
            </ParallaxLayer>
          </section>

          <section id="section-two">
          <ParallaxLayer speed={0.12} offset={1.32}>
              <h2 className="content-wrapper heading">Best Experience</h2>
            </ParallaxLayer>
            <ParallaxLayer speed={0.08} offset={1.45}>
              <hr style={{ marginLeft: '8%', width: '30%', border: '2px solid white' }} />
            </ParallaxLayer>
            <ParallaxLayer speed={0.01} offset={1.5}>
              <p className="content-wrapper tagline">
                Collection of visual themes to transcribe the emotional and rythmic effects of an uoloaded mp3 song.
              </p>
            </ParallaxLayer>\
          </section>
        </Parallax>
      </>
    )
  }
}

export default LandingPage;