import React, {Component} from 'react';

class BusinessModel extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
        </div>
        <div className='subtitle-text'>
          <h3>1.) Freemium model with 10% conversion from free to paid plan</h3>
          <h3>2.) At 1M users our projected MRR is $1.3M </h3>
        </div>
      <div className='product-image'>
         <div className='growth-title'>
          <h6>User Growth</h6>
         </div>
      <img src={require('../img/user-growth-projected.png')} />
      </div>
      </div>
    )
  }
};

export default BusinessModel;
