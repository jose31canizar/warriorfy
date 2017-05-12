import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header-text'>
          <h2>Expert knowledge, motivation, and support in your pocket.</h2>
          </div>
          <div className='header-text'>
            <h4><strong>The key to our success has been building things people need and love to use. Warriorfy combines all our popular offerings into one powerful platform designed to repair one's relationship to food, body, and self.</strong></h4>
          </div>

        <div className='product'>
            <img src={require('../img/Product-1.png')} className={'product-image'}/>
                  </div>

          <div className='footer-text'>
            <p>Our content address the great challenges of life: work, relationships, friendship, anxiety and more.</p>
          </div>
      </div>
    )
  }
};

export default Product;
