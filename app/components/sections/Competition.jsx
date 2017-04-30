import React, {Component} from 'react';

class Competition extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Competition</h1>
        </div>
        <img className='section-medium-image' src={require('../img/05-Market-Competitive-Landscape.png')} alt='Warriorfy'/>
      </div>
    )
  }
};

export default Competition;
