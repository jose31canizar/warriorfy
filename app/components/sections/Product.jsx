import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='header-text'>
            <h2>Expert knowledge, motivation, and support anywhere, anytime.</h2>
          </div>
        </div>
          <div className='product-series'>
              <div className='image-1'>
                <img src={require('../img/product-image-2.png')} className={'product-image'}/>
                <h6>Audio inspiration and education</h6>
                <img src={require('../img/icon-audio.png')} className={'product-image'}/>
              </div>
              <div className='image-2'>
                <img src={require('../img/product-image-3.png')} className={'product-image'}/>
                <h6>Easy tracking of meals and mood</h6>
                <img src={require('../img/icon-tracking.png')} className={'product-image'}/>
              </div>
              <div className='image-3'>
                <img src={require('../img/product-image-4.png')} className={'product-image'}/>
                <h6>Personal chat-based support</h6>
                <img src={require('../img/icon-chat.png')} className={'product-image'}/>
              </div>
          </div>
        <div className='product'>
            <img src={require('../img/Product-Tiles.png')} className={'product-image'}/>
        </div>
    </div>
    )
  }
};

export default Product;
