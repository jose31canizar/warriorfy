import React from 'react';

var Opportunity = React.createClass({
  render() {
    return (
        <div className={this.props.title.replace(/ /g,'')}>
          <h1>{this.props.title}</h1>
          <div className={'OpportunityStatement'}>
          </div>
        </div>
    )
  }
});

module.exports = Opportunity;
