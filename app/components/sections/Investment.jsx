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
        <h3>Upcoming Milestones</h3>
        </div>
        <p>Hire key roles:</p>
        <p>• Front-end developer</p>
        <p>• Back-end developer</p>
        <p>• iOS developer</p>
        <p>• Android developer</p>
        <br></br>
        <p> A successful well recieved product launch </p>
        <p> Establish core user base 100K </p>
        <p> Strong user acquistion metrics </p>
        <p> Connect with industry thought leaders </p>
        <p> Partner with researchers to study outcome effect </p>
        <p> Strong operations and managment in place </p>
        <p> Port platform to the web </p>
        </div>

        <div className='text-block-container'>
        <div className='header-text-money'>
        <h3>Money Well Spent:</h3>
        </div>
        <div className='text-blocks'>
          <div className='text-block-row'>
            <div className='text-block'>
              <h6>Salaries</h6>
              <p>The companies first priority is to hire someone with a strong background in operations and recruit new engineering talent</p>
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
