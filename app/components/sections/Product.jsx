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
            <div className='product-block'>
              <div className='title-text'>
                <h6>Audio Content</h6>
              </div>
              <div className='subtitle-text'>
                <p>Get inspired by educational expert conversations and personal stories of success.</p>
              </div>
              <div className='image-block'>
                <img src={require('../img/product-image-2.png')} className={'product-image'}/>
              </div>
            </div>
            <div className='product-block'>
              <div className='title-text'>
                <h6>Simple Tracking</h6>
              </div>
              <div className='subtitle-text'>
              <p>Easily log meals and bring self-awareness to emotions, behaviors, and thoughts.</p>
              </div>
              <div className='image-block'>
                <img src={require('../img/product-image-3.png')} className={'product-image'}/>
              </div>
            </div>
            <div className='product-block'>
              <div className='title-text'>
               <h6>Personal Coach</h6>
              </div>
              <div className='subtitle-text'>
                <p>Increase accountability and reduce shame with 1:1 chat-based support.</p>
              </div>
              <div className='image-block'>
                <img src={require('../img/product-image-4.png')} className={'product-image'}/>
              </div>
            </div>
          </div>

        <div className='product'>
            <h2>Curated content designed to inspire and motivate change</h2>
            <img src={require('../img/Product-Tiles.png')} className={'product-image'}/>
        </div>
    </div>
    )
  }
};

export default Product;
