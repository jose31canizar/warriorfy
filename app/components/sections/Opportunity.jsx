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
              <h6><strong>People who struggle with food can...</strong></h6>
            </div>
            <div className='solutions-label'>
              <h4>SOLUTION</h4>
              <h6><strong>Warriorfy provides...</strong></h6>
            </div>
          </div>

          <div className='block-row-container'>
            <div className='block-row'>
              <div className='block'>
                <p><strong>Be Misinformed</strong></p>
                <p>Restrictive diets are ineffective at long-term weight management, yet continue to be prescribed by the media and medical doctors.</p>
              </div>
              <div className='block'>
                <img src={require("../img/03-arrows-3.png")}/>
              </div>
              <div className='block'>
                <p><strong>Education</strong></p>
                <p>Our subject matter experts share valuable knowledge on how to optimize one's overall health for the long-term.</p>
              </div>
            </div>

            <div className='block-row'>
              <div className='block'>
                <p><strong>Feel increased anxiety and depression</strong></p>
                <p>Many people turn towards food or away from food in an effort to cope with mood disorders.</p>
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
              <p><strong>Get caught in a negative emotional spiral</strong></p>
              <p>Failed attempts to control food and weight lead to  guilt, shame, disappointment, and isolation.</p>
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
              <p><strong>Have lower body confidence</strong></p>
              <p>The media’s promotion of unrealistic beauty standards can lead to lower self-esteem and body confidence</p>
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
              <p><strong>Feel out of control</strong></p>
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
                  <p>Dieting is ineffective at long term weight management, yet continues to be prescribed by the media and medical doctors.  The collateral damage of repeated dieting cycles extends past weight gain to one’s self-esteem and emotional health, two determinants largely ignored in the weight debate.</p>
              </div>
            </div>
            <div className='solution'>
              <div className='solution-label'>
                <h4>Solution</h4>
                <p>We believe when you know better you do better. Build an immersive educational experience that connects people to expert knowledge, health data, and a coach.</p>
              </div>
            </div>
          </div>

      </div>
    )
  }
};

export default Opportunity;
