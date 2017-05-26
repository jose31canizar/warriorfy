import React, {Component} from 'react';
import Label from '../Label.jsx';
import Product from './Product.jsx';

class Opportunity extends Component {
  render() {
    return (
      <div>

      <div className='container'>
        <div className={'header'}>
          <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
        </div>
        <Label label='Problems'/>
        <h6><strong>People who struggle with food can be...</strong></h6>
        <div className='block-row'>
          <div className='block'>
            <p><strong>Misinformed</strong></p>
            <p>Research shows restrictive diets are ineffective at long-term weight management.</p>
          </div>
          <div className='block'>
            <p><strong>Anxious and Depressed</strong></p>
            <p>Many people turn towards food or away from food in an effort to cope with mood disorders.</p>
          </div>
          <div className='block'>
            <p><strong>Inadequately Supported</strong></p>
              <p>Failed attempts to control food and weight lead to guilt, shame, disappointment, and isolation.</p>
          </div>
        </div>

      <Label label='Solutions'/>
        <div className='block-row'>
          <div className='block'>
            <p><strong>Education</strong></p>
            <p>Our subject matter experts share valuable knowledge on how to make lifestyle changes that last.</p>
          </div>
          <div className='block'>
            <p><strong>Coping Strategies</strong></p>
            <p>We provide evidence-based strategies to help people manage and improve their anxiety and depression.</p>
          </div>
          <div className='block'>
            <p><strong>Support</strong></p>
            <p>We connect people to certified coaches who provide nutritional and emotional chat-based support.</p>
          </div>
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
