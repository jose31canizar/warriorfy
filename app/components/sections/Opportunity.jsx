import React from 'react';

var Opportunity = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = Opportunity;
