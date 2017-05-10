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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/FzO-U60-85M" frameborder="0" allowfullscreen></iframe>

      </div>
    )
  }
};

export default Product;
