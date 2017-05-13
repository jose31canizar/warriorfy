import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header-text'>
          <h2>Expert knowledge, motivation, and support anywhere, anytime.</h2>
          </div>
        <div className='product'>
            <img src={require('../img/Product-1.png')} className={'product-image'}/>
                  </div>
        <div className='product'>
            <img src={require('../img/Product-Tiles.png')} className={'product-image'}/>
                  </div>


          <div className='footer-text'>
            <p></p>
          </div>
      </div>
    )
  }
};

export default Product;
