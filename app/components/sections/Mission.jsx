import React, {Component} from 'react';

class Mission extends Component {
  render() {
    return (
      <div>
        <div className='mission'>
          <h1>Provide the ultimate journey to health and healing for food and body struggles.</h1>
        </div>
        <div>
          <img className='mission-background' src={require('../img/01-Mission.jpg')} alt='Warriorfy'/>
        </div>
      </div>
    )
  }
};

export default Mission;
