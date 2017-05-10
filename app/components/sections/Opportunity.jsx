import React, {Component} from 'react';

class Opportunity extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'header'}>
          <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
        </div>
        <div className='content'>
          <div className='top-labels'>
            <div className='problems-label'>
              <h4>PROBLEM</h4>
              <h6><strong>Diets are...</strong></h6>
            </div>
            <div className='solutions-label'>
              <h4>SOLUTION</h4>
              <h6><strong>Warriorfy provides...</strong></h6>
            </div>
          </div>

          <div className='block-row-container'>
            <div className='block-row'>
              <div className='block'>
                <p><strong>Ineffective in the long-term</strong></p>
                <p>People often are confused.</p>
              </div>
              <div className='block'>
                <img src={require("../img/03-arrows-3.png")}/>
              </div>
              <div className='block'>
                <p><strong>Insight</strong></p>
                <p>People get clarity.</p>
              </div>
            </div>

            <div className='block-row'>
              <div className='block'>
                <p><strong>Increase anxiety</strong></p>
                <p>People are often distracted.</p>
              </div>
              <div className='block'>
                <img src={require("../img/03-arrows-3.png")}/>
              </div>
              <div className='block'>
              <p><strong>Guidance</strong></p>
                <p>People get focus.</p>
              </div>
            </div>
          </div>


          <div className='block-row'>
            <div className='block'>
              <p><strong>Lower body confidence</strong></p>
              <p>Increases shame, isolation, anxiety and depression</p>
            </div>
            <div className='block'>
              <img src={require("../img/03-arrows-3.png")}/>
            </div>
            <div className='block'>
              <p><strong>Support</strong></p>
              <p>Connects people to certified coaches who provide nutritional and emotional support</p>
            </div>
          </div>


          <div className='block-row'>
            <div className='block'>
              <p><strong>Lower body confidence</strong></p>
              <p>Increases shame, isolation, anxiety and depression</p>
            </div>
            <div className='block'>
              <img src={require("../img/03-arrows-3.png")}/>
            </div>
            <div className='block'>
              <p><strong>Support</strong></p>
              <p>Connects people to certified coaches who provide nutritional and emotional support</p>
            </div>
          </div>
        </div>

          <div className='overall'>
            <div className='problem'>
              <div className='problem-label'>
                <h4>Overall Problem</h4>
                  <p>Dieting is ineffective at long term weight management, yet continues to be prescribed by the media and medical doctors.</p>
              </div>
            </div>
            <div className='solution'>
              <div className='solution-label'>
                <h4>Solution</h4>
                <p>Build an immersive educational experience that connects people to expert knowledge, health data, and a coach.</p>
              </div>
            </div>
          </div>

      </div>
    )
  }
};

export default Opportunity;
