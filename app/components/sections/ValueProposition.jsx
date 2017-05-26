import React, {Component} from 'react';

class ValueProposition extends Component {
  render() {
    return (
    <div className={'container-wrapper'}>
      <div className={'container'}>
          <div className={'header'}>
            <div className='header-text'>
              <h2>We've reached 750K people who struggle with their relationship to food and body with zero ad spend</h2>
            </div>
            <div className='subtitle-text'>
              <h4>Our value proposition has been verified. In the process, we've found a blue ocean opportunity, uncharted waters at the intersection of four growing markets.</h4>
            </div>
          </div>
          <div>
            <img className={'market-image'} src={require('../img/05-Market-Competitive-Landscape.png')}/>
          </div>
          <div className='footer'>
            <div className='footer-text'>
              <h4>Warriorfy is the first to combine educational audio content, self-tracking tools, and 1:1 support into one beautifully designed and easy-to-use platform.</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ValueProposition;
