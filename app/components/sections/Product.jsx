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
                <div className='title-text'>
                  <h6>Audio Content</h6>
                </div>
                <div className='subtitle-text'>
                  <p>Find inspiration through education and personal stories of success</p>
                </div>
                <img src={require('../img/product-image-2.png')} className={'product-image'}/>
              </div>
              <div className='image-2'>
                <div className='title-text'>
                  <h6>Easy Tracking</h6>
                </div>
                <div className='subtitle-text'>
                <p>Conveniently log meals and bring self-awareness to emotions, behaviors, and thoughts.</p>
                </div>
                <img src={require('../img/product-image-3.png')} className={'product-image'}/>
              </div>
              <div className='image-3'>
               <div className='title-text'>
                 <h6>Personal Coach</h6>
               </div>
              <div className='subtitle-text'>
                <p>Increase accountability and reduce shame with 1:1 chat-based support</p>
              </div>
                <img src={require('../img/product-image-4.png')} className={'product-image'}/>
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
