import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h2>Every dream has its own journey.</h2>
        </div>
        <div className='product'>
            <div className='phone'></div>
        </div>
        <img className={'market-image'} src={require('../img/Arrow.png')}/>
      </div>
    )
  }
};

export default Product;
