import React, {Component} from 'react';

class Investment extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h2>Seeking investors who want more innovation in healthcare.</h2>
        </div>
        <div className='text-block-grid'>
        <div className='text-block-milestone'>
        <h3>Milestones</h3>
        </div>
          <div className='text-block-row'>
            <div className='text-block'>
              <h4>Engineers</h4>
              <p>More Engineers</p>
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
