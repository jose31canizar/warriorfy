import React, {Component} from 'react';
import Label from '../Label.jsx';

class Opportunity extends Component {
  render() {
    return (
      <div className='container'>
        <Label label='Problems'/>
        <Label label='Solutions'/>
        <div className={'header'}>
          <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
        </div>
          <div className='overall'>
            <div className='problem'>
              <div className='problem-label'>
                <h4>OVERALL PROBLEM</h4>
                  <p>Dieting is ineffective in the long-term, yet continues to be prescribed by the media and medical doctors. The collateral damage of repeated dieting cycles extends past weight gain to one’s self-esteem, impacting both mental and emotional health.</p>
              </div>
            </div>
            <div className='solution'>
              <div className='solution-label'>
                <h4>OUR SOLUTION</h4>
                <p>We believe real change happens from the inside out. Warriorfy combines all the tools, motivation, and support one needs to improve their relationship to food, body, and life into one convenient and empowering platform. </p>
                </div>
            </div>
          </div>

      </div>
    )
  }
};

export default Opportunity;
