import React from 'react';

var Team = React.createClass({
  render() {
    return (
        <div className={this.props.title.replace(/ /g,'')}>
          <div className={'images'}>
            <div className={'label'}>Our Team</div>
            <div className={'logo'}></div>
            <div className={'background_image'}>
            <div className={'foreground_image'}>
                <h1>{this.props.title}</h1>
                <p>Live your dreams.</p>
              </div>
            </div>
              <div className={'Start'}>
                <p>Start</p>
              </div>
            </div>
        </div>
    )
  }
});

module.exports = Team;
