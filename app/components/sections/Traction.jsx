import React, {Component} from 'react';

class Traction extends Component {
  render() {
    return (
      <div className='container'>
        <div className='content'>

          <div className='product-image'>
            <div className='header'>
              <h4>MoM Platform Growth.</h4>
            </div>
            <img src={require('../img/05-Market-Validation-Growth.png')} />
          </div>
          <div className='text-block-container'>
            <div className='text-blocks'>
              <div className='text-block-row'>
                <div className='text-block'>
                  <h6>Tracking App</h6>
                    <div className='text-block-description'>
                      <div className='roles'>
                        <div className='role'>
                          <p className='role-title'>Downloads: 190 K</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>Sessions: 4 M</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>Countries: 184</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='text-block'>
                  <h6>Online Magazine</h6>
                  <div className='text-block-description'>
                    <div className='roles'>
                      <div className='role'>
                        <p className='role-title'>Unique Users: 550 K</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>Pageviews: 3 M</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>Articles: 684</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text-block'>
                  <h6>Podcast</h6>
                    <div className='text-block-description'>
                        <div className='roles'>
                          <div className='role'>
                            <p className='role-title'>Listens: 530 K</p>
                          </div>
                          <div className='role'>
                            <p className='role-title'>Shows: 111</p>
                          </div>
                          <div className='role'>
                            <p className='role-title'>Experts Interviewed: 69</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className='text-block'>
                    <h6>Treatment Directory</h6>
                    <div className='text-block-description'>
                      <div className='roles'>
                        <div className='role'>
                          <p className='role-title'>Listings: 192</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>Revenue: $110 K</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
