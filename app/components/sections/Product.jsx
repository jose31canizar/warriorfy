import React, {Component} from 'react';
import Data from '../../data/product.json';

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
            {Data.map((block, i) => (
              <div className='product-block'>
                <div className='title-text'>
                  <h6>{block.feature}</h6>
                </div>
                <div className='subtitle-text'>
                  <p>{block.description}</p>
                </div>
                <div className='image-block'>
                  <img src={require('../img/product-image-' + (i + 2) + '.png')} className='product-image'/>
                </div>
              </div>
            ))}
          </div>
        <div className='product'>
            <h2>Curated content designed to motivate change</h2>
            <img src={require('../img/Product-Tiles.png')} className='product-image'/>
        </div>
    </div>
    )
  }
};

export default Product;
