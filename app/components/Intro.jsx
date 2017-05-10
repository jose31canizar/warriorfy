import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll.js');

class Intro extends Component {
  render() {
    return (
      <div className={'Section'} id={'Intro'}>
                <img className={'intro-image'} src={require('./img/01-header-v3.jpg')}/>

      </div>
    )
  }
};

export default Intro;
