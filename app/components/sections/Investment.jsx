import React from 'react';

var Investment = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = Investment;
