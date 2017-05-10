import React, {Component} from 'react';

class Traction extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
        </div>
        <img className='featured-in' src={require('../img/08-Featured-Self.png')} alt='Warriorfy'/>
        <img className='featured-in' src={require('../img/08-Featured-Redbook.png')} alt='Warriorfy'/>
        <img className='featured-in' src={require('../img/08-Featured-Forbes.png')} alt='Warriorfy'/>
        <img className='featured-in' src={require('../img/08-Featured-PT.png')} alt='Warriorfy'/>
        <img className='featured-in' src={require('../img/08-Featured-Shape.png')} alt='Warriorfy'/>
      </div>
    )
  }
};

export default Traction;
