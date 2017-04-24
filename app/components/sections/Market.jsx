import React, {Component} from 'react';

class MarketValidation extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'header'}>
          <div className='header-text'>
            <h1>What we're building doesn't exist yet.</h1>
          </div>
          <div className='subtitle-text'>
            <h3>There have been fragmented attempts at creating tools, networks and platforms for people to achieve their personal goals.</h3>
          </div>
        </div>
        <div>
          <img className={'market-image'} src={require('../img/05-Market-Validation-Map.png')}/>
        </div>
        <div className='footer'>
          <div className='footer-text'>
            <h2>Everest is the first to provide a cohesive user experience, an emotionally inspiring design, and a mobile app that is there with you whenever inspiration strikes.</h2>
          </div>
        </div>
        <div className='baseline-footer'>
          <img className='baseline-footer-logo' src={require('../img/00-Logo.png')} alt='Warriorfy'/>
          <h2>Warriorfy</h2>
        </div>

      </div>
    )
  }
};

export default MarketValidation;
