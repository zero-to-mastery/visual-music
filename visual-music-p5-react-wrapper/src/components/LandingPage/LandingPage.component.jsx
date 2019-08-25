import React, { Component } from 'react';
import './LandingPage.styles.css';
import logo from '../../assets/LogoSVG.svg'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page-wrap">
        <nav><img src={logo} alt="logo" height="100px" width="100px" /></nav>
        <div>
          <h2>Working</h2>
        </div>
      </div>      
    )
  }
}

export default LandingPage;