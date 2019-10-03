import React, { Component } from 'react';
import classes from './LandingPage.module.scss';
import TopNav from '../TopNav/TopNav';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import SectionOne from './sections/SectionOne/SectionOne';
import SectionTwo from './sections/SectionTwo/SectionTwo';
import SectionThree from './sections/SectionThree/SectionThree';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={classes.landingPageBg} />
        <TopNav />
        <Parallax
          pages={3}
          config={{ tension: 100, friction: 60 }}
          ref={ref => (this.parallax = ref)}
        >

          <ParallaxLayer offset={1} speed={0.9} style={{ backgroundColor: 'rgba(13, 78, 103, 0.56)' }} />
          <ParallaxLayer offset={2} speed={0.55} style={{ backgroundColor: 'rgba(41, 172, 109, 0.56)' }} />

          <SectionOne
            handleRouteChange={this.props.handleRouteChange}
            scrollClick={() => this.parallax.scrollTo(1)}
          />
          <SectionTwo scrollClick={() => this.parallax.scrollTo(2)} />
          <SectionThree scrollClick={() => this.parallax.scrollTo(0)} />

        </Parallax>
      </>
    )
  }
}

export default LandingPage;