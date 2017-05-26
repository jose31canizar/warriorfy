import React, {Component} from 'react';
import Data from '../../data/traction.json';

class Traction extends Component {
  render() {
    return (
      <div className='container'>
        <div className='content'>

          <div className='product-image'>
            <div className='header'>
              <h2>The Journey Until Now...Boostrapped MoM Platform Growth</h2>
            </div>
            <img src={require('../img/05-Market-Validation-Growth.png')} />
          </div>
          <div className='text-block-container'>
            <div className='text-blocks'>
              <div className='text-block-row'>
                {Data.map((block,i) => (
                  <div className='text-block'>
                    <h6>{block.title}</h6>
                    <div className='text-block-description'>
                      <div className='roles'>
                        {block.list.map((item,i) => (
                          <div className='role'>
                            <p className='role-title'>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
        </div>

        <div className='header'>
          <h6>Featured In</h6>
        </div>

        <div className='featured-images'>
          <img className='featured-in' src={require('../img/08-Featured-Self.png')} alt='Warriorfy'/>
          <img className='featured-in' src={require('../img/08-Featured-Redbook.png')} alt='Warriorfy'/>
          <img className='featured-in' src={require('../img/08-Featured-Forbes.png')} alt='Warriorfy'/>
          <img className='featured-in' src={require('../img/08-Featured-PT.png')} alt='Warriorfy'/>
          <img className='featured-in' src={require('../img/08-Featured-Shape.png')} alt='Warriorfy'/>
        </div>
      </div>
    )
  }
};

export default Traction;
