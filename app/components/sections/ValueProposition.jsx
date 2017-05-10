import React, {Component} from 'react';

class ValueProposition extends Component {
  render() {
    return (
    <div className={'container-wrapper'}>
      <div className={'container'}>
          <div className={'header'}>
            <div className='header-text'>
              <h2>We've found blue ocean!</h2>
            </div>
            <div className='subtitle-text'>
              <h4>You know you're in unchartered waters when you reach 750K people who struggle with their relationship to food and body with zero ad spend. The key to our success is building things people need and love to use.</h4>
            </div>
          </div>
          <div>
            <img className={'market-image'} src={require('../img/05-Market-Competitive-Landscape.png')}/>
          </div>
          <div className='footer'>
            <div className='footer-text'>
              <h4>Warriorfy is the first to build a unified platform of supportive and evidence-based resources to repair one's relationship to food, body, and self.</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ValueProposition;
