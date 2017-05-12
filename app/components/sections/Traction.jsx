import React, {Component} from 'react';

class Traction extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h2>We're gaining it.</h2>
        </div>
        <img src={require('../img/05-Market-Validation-Growth.png')} className='product-image'/>
        <div className='content'>
          <div className='text-block-container'>
            <h2>Platform session growth</h2>
          </div>
          <div className='text-block-container'>
            <div className='header-text-money'>
              <h3>Traction growth:</h3>
            </div>
            <div className='text-blocks'>
              <div className='text-block-row'>
                <div className='text-block'>
                  <h6>Salaries</h6>

                    <p>Our top priority is to hire key roles for engineering and operations:</p>

                    <div className='text-block-description'>
                      <div className='roles'>
                        <div className='role'>
                          <p className='role-title'>• Full stack developer</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>• Junior developer</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>• Cross-platform mobile developer</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='text-block'>
                  <h6>Marketing</h6>
                  <p>Creative ad campaigns to build a successful marketing funnel. </p>
                  <div className='text-block-description'>
                    <div className='roles'>
                      <div className='role'>
                        <p className='role-title'>• Full stack developer</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>• Junior developer</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>• Cross-platform mobile developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-block'>
                  <h6>Legal and Accounting</h6>
                  <p>Necessary legal work for licensing and distribution of audio content and protection of PHI</p>
                  <div className='text-block-description'>
                    <div className='roles'>
                      <div className='role'>
                        <p className='role-title'>• Full stack developer</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>• Junior developer</p>
                      </div>
                      <div className='role'>
                        <p className='role-title'>• Cross-platform mobile developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-block-row'>
                <div className='text-block'>
                  <h6>Business Development</h6>
                  <p>Travel expenses to conferences to build partnerships and brand awareness</p>
                    <div className='text-block-description'>
                        <div className='roles'>
                          <div className='role'>
                            <p className='role-title'>• Full stack developer</p>
                          </div>
                          <div className='role'>
                            <p className='role-title'>• Junior developer</p>
                          </div>
                          <div className='role'>
                            <p className='role-title'>• Cross-platform mobile developer</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className='text-block'>
                    <h6>Overhead</h6>
                    <p>Office space, software susbscriptions</p>
                    <div className='text-block-description'>
                      <div className='roles'>
                        <div className='role'>
                          <p className='role-title'>• Full stack developer</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>• Junior developer</p>
                        </div>
                        <div className='role'>
                          <p className='role-title'>• Cross-platform mobile developer</p>
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
