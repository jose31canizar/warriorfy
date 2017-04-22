import React, {Component} from 'react';
var SmoothScroll = require('./SmoothScroll.js');

class Label extends Component {
  render() {
    return (
      <div>
        <div className={'border-container'}>
          <div className={'border'}>
          </div>
        </div>
        <div className={'label'}>
          <div className={'label-text'}>
          {this.props.label}
          </div>
        </div>
      </div>
    )
  }
};

export default Label;
