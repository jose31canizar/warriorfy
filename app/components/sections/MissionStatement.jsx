import React from 'react';

var MissionStatement = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = MissionStatement;
