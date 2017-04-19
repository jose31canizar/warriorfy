import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll.js');

class Intro extends Component {
  render() {
    return (
      <div className={'Section'} id={'Intro'}>
                <img className={'intro-image'} src={require('./img/01-header-1200.jpg')}/>
                <div className={'text-block'}>
                  <h1>Warriorfy</h1>
                  <p>Learn for life.</p>
                </div>
              <SmoothScroll className={'StartContainer'} section={'Mission'}>
                <div className={'start'}>
                  <p>Start</p>
                </div>
              </SmoothScroll>
      </div>
    )
  }
};

export default Intro;
