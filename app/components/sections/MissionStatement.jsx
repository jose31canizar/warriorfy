import React from 'react';

var MissionStatement = React.createClass({
  render() {
    return (
        <div className={this.props.title.replace(/ /g,'')}>
          <h1>{this.props.title}</h1>
          <h3>Our mission is to create a community of warriors.</h3>
        </div>
    )
  }
});

module.exports = MissionStatement;
