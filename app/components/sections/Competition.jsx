import React from 'react';

var Competition = React.createClass({
  render() {
    return (
        <div className={this.props.title.replace(/ /g,'')}>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
});

module.exports = Competition;
