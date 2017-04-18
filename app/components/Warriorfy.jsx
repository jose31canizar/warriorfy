import React from 'react';
var SmoothScroll = require('./SmoothScroll.js');

var Warriorfy = React.createClass({
  render() {
    return (
      <div className={'Section'} id={'Warriorfy'}>
        <div className={'border'}></div>
          <div className={'Warriorfy'}>
            <div className={'container'}>
              <div className={'logo'}></div>
              <div className={'background_image'}>
              <div className={'foreground_image'}>
                  <h1>Warriorfy</h1>
                  <p>A platform connecting podcasters to wellness-seekers.</p>
                </div>
              </div>
              <SmoothScroll className={'StartContainer'} section={this.props.section}>
                <div className={'Start'}>
                  <p>Start</p>
                </div>
              </SmoothScroll>
              </div>
          </div>
      </div>
    )
  }
});

module.exports = Warriorfy;
