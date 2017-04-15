import React from 'react';

var BusinessModel = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = BusinessModel;
