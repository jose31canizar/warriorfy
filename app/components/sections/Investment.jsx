import React, {Component} from 'react';

class Investment extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h2>Seeking investors who believe healthcare needs more innovation.</h2>
        </div>
        <div className='text-block-grid'>
        <div className='text-block-milestone'>
        <h3>Upcoming Milestones</h3>
        <p>Hire key roles:</p>
        <ul>
        <li>Front-end developer</li>
        <li>Back-end developer</li>
        <li>iOS developer</li>
        <li>Android developer</li>
        </ul>
        <p> A successful well recieved product launch </p>
        <p> Establish core user base 100K </p>
        <p> Strong user acquistion metrics </p>
        <p> Connect with industry thought leaders </p>
        <p> Partner with researchers to study outcome effect </p>
        <p> Strong operations and managment in place </p>
        <p> Port platform to the web </p>
        </div>
          <div className='text-block-row'>
            <div className='text-block'>
              <h4>Salaries</h4>
              <p>The companies first priority is to hire someone with a strong background in operations and recruit new engineering talent</p>
            </div>
            <div className='text-block'>
              <h4>Marketing</h4>
              <p>Creative ad campaigns to build a successful marketing funnel. </p>
            </div>
            <div className='text-block'>
              <h4>Legal and Accounting</h4>
              <p>Necessary legal work for licensing and distribution of audio content and protection of PHI</p>
            </div>
          </div>
          <div className='text-block-row'>
            <div className='text-block'>
              <h4>Business Development</h4>
              <p>Travel expenses to conferences to build partnerships and brand awareness</p>
            </div>
            <div className='text-block'>
              <h4>Overhead</h4>
              <p>Office space, software susbscriptions</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Investment;
