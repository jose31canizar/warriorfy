import React, {Component} from 'react';

class BusinessModel extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Business Model</h1>
        </div>
        <img className='section-wide-image' src={require('../img/07-Business-Model.png')} alt='Warriorfy'/>
      </div>
    )
  }
};

export default BusinessModel;
