import React, {Component} from 'react';

class Investment extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
        <div className='header-text'>
          <h2>Seeking investors who believe healthcare needs more innovation.</h2>
        </div>
        </div>
        <div className='text-block-grid'>
        <div className='text-block-milestone'>
          <div className='header-text-milestone'>
        <h3>Milestones</h3>
        </div>
        <p className='milestone'>Hire key roles</p>
        <p className='milestone'>• A successful well received product launch </p>
        <p className='milestone'>• Establish a core user base 100K </p>
        <p className='milestone'>• Strong user acquistion metrics </p>
        <p className='milestone'>• Connect with industry thought leaders </p>
        <p className='milestone'>• Partner with researchers to study outcome effect </p>
        <p className='milestone'>• Strong operations and managment in place </p>
        <p className='milestone'>• Port platform to the web </p>
        </div>

        <div className='text-block-container'>
        <div className='header-text-money'>
        <h3>Money Well Spent:</h3>
        </div>
        <div className='text-blocks'>
          <div className='text-block-row'>
            <div className='text-block'>
              <h6>Salaries</h6>
                <p>Our top priority is to hire key roles for engineering and operations:</p>
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
            <div className='text-block'>
              <h6>Marketing</h6>
              <p>Creative ad campaigns to build a successful marketing funnel. </p>
            </div>
            <div className='text-block'>
              <h6>Legal and Accounting</h6>
              <p>Necessary legal work for licensing and distribution of audio content and protection of PHI</p>
            </div>
          </div>
          <div className='text-block-row'>
            <div className='text-block'>
              <h6>Business Development</h6>
              <p>Travel expenses to conferences to build partnerships and brand awareness</p>
            </div>
            <div className='text-block'>
              <h6>Overhead</h6>
              <p>Office space, software susbscriptions</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Investment;
