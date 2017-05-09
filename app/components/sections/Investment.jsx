import React, {Component} from 'react';

class Investment extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Seeking the best investors on the planet.</h1>
        </div>
        <div className='text-block-grid'>
          <div className='text-block-row'>
            <div className='text-block'>
              <h3>Salaries</h3>
            </div>
            <div className='text-block'>
              <h3>Salaries</h3>
            </div>
            <div className='text-block'>
              <h3>Salaries</h3>
            </div>
          </div>
          <div className='text-block-row'>
            <div className='text-block'>
              <h3>Salaries</h3>
            </div>
            <div className='text-block'>
              <h3>Salaries</h3>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Investment;
