import React, {Component} from 'react';
import Label from '../Label.jsx';
import Product from './Product.jsx';
import Data from '../../data/opportunity.json';

class Opportunity extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
        </div>
      <div className='container'>
        <Label label='Problems'/>
        <h3><strong>People who struggle with food can be...</strong></h3>
        <div className='block-row'>
          {Data.map((block, i) => (
            <div className='block'>
              <h3>{block.problem}</h3>
              <p>{block.problemDescription}</p>
            </div>
          ))}
        </div>
      <Label label='Solutions'/>
      <h3><strong>Warriorfy provides...</strong></h3>
        <div className='block-row'>
          {Data.map((block, i) => (
              <div className='block'>
                <h3>{block.solution}</h3>
                <p>{block.solutionDescription}</p>
              </div>
          ))}
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
      <div id="Product">
        <Product/>
      </div>
    </div>
    )
  }
};

export default Opportunity;
