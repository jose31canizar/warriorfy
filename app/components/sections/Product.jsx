import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h2>Expert knowledge, motivation, and support in your pocket.</h2>
        </div>

        <div className='product'>
            <img src={require('../img/Product-1.png')} className={'product-image'}/>
                  </div>

              <div className='product'>
            <img src={require('../img/Product-02.png')} className={'product-image'}/>

        </div>
      </div>
    )
  }
};

export default Product;
