import React, {Component} from 'react';

class Investment extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Seeking the best investors on the planet.</h1>
        </div>
        <div className='investment'>
          <div className='milestones'>
            <h3>Upcoming Milestones</h3>
          </div>
          <div className='money'>
            <h3>Money Well Spent</h3>
          </div>
        </div>
      </div>
    )
  }
};

export default Investment;
