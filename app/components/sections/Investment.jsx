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
              <p>• Upcoming Milestones</p>
          </div>
          <div className={'overall'}>
            <div className={'solution'}>
              <div className={'solution-label'}>
                <h3>overall solution</h3>
              </div>
            </div>
            <div className={'solution'}>
              <div className={'solution-label'}>
                <h3>overall solution</h3>
              </div>
            </div>
          </div>
          <div className={'overall'}>
            <div className={'problem'}>
              <div className={'problem-label'}>
                <h3>overall problem</h3>
              </div>
            </div>
            <div className={'problem'}>
              <div className={'problem-label'}>
                <h3>overall problem</h3>
              </div>
            </div>
            <div className={'problem'}>
              <div className={'problem-label'}>
                <h3>overall problem</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Investment;
