import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll.js');

class Intro extends Component {
  render() {
    return (
      <div className={'Section'} id={'Intro'}>
                <img className={'intro-image'} src={require('./img/01-header-1200.jpg')}/>
                <div className={'block'}>
                  <h1>Warriorfy</h1>
                  <p>Paths to Health</p>
                    <SmoothScroll className={'StartContainer'} section={'Mission'}>
                      <div className={'start'}>
                        <p>Start</p>
                      </div>
                    </SmoothScroll>
                </div>

      </div>
    )
  }
};

export default Intro;
