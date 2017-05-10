import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll.js');

class Intro extends Component {
  render() {
    return (
      <div className={'Section'} id={'Intro'}>
                <img className={'intro-image'} src={require('./img/00-header.jpg')}/>
                <div className={'block'}>
                  <h1>Warriorfy</h1>
                  <p>Paths to Health</p>
                </div>

      </div>
    )
  }
};

export default Intro;
