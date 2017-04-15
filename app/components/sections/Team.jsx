import React from 'react';

var Team = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = Team;
