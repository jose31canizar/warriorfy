import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header-text'>
          <h2>Expert knowledge, motivation, and support in your pocket.</h2>
          </div>
            <div className='header-text'>
          <h4><strong>The key to our success is building things people need and love to use. Warriorfy takes all our popular resources and put's them into one powerful platform to repair one's relationship to food, body, and self.</strong></h4>
        </div>

        <div className='product'>
            <img src={require('../img/Product-1.png')} className={'product-image'}/>
                  </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/FzO-U60-85M" frameborder="0" allowfullscreen></iframe>
<p>These classes address the great challenges of life: work, relationships, friendship, anxiety and more. They offer insight, guidance and companionship.</p>
      </div>
    )
  }
};

export default Product;
