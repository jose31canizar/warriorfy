import React from 'react';

var Warriorfy = React.createClass({
  render() {
    return (
        <div className={'Warriorfy'}>
          <div className={'images'}>
          <div className={'logo'}></div>
          <div className={'background_image'}>
            <div className={'foreground_image'}>
              <h1>{this.props.title}</h1>
              <p>Live your dreams.</p>
            </div>
          </div>
          <div className={'StartContainer'}>
            <div className={'Start'}>
              <p>Start</p>
            </div>
          </div>
          </div>
        </div>
    )
  }
});

module.exports = Warriorfy;
