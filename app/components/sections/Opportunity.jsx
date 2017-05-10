import React, {Component} from 'react';

class Opportunity extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'header'}>
          <h2>Worldwide, 2.3 billion people are overweight or obese and rates of eating disorders are skyrocketing.</h2>
        </div>
        <div className={'content'}>
          <div className={'problems'}>
            <div className={'problems-label'}>
              <h4>PROBLEM</h4>
            </div>
            <div className={'problem-1'}>
              <h4>Unclear</h4>
              <p>People often are confused.</p>
            </div>
            <div className={'problem-2'}>
              <h4>Distractable</h4>
              <p>People are often distracted.</p>
            </div>
            <div className={'problem-3'}>
              <h4><strong>Inadequately Supported</strong></h4>
              <p>People are often Inadequately supported.</p>
            </div>
          </div>
          <div className={'solutions'}>
            <div className={'solutions-label'}>
              <h4>SOLUTION</h4>
            </div>
            <div className={'solution-1'}>
              <h4>Clarity</h4>
              <p>People get clarity.</p>
            </div>
            <div className={'solution-2'}>
              <h4>Focus</h4>
              <p>People get focus.</p>
            </div>
            <div className={'solution-3'}>
              <h4>Support</h4>
              <p>People get support.</p>
            </div>
          </div>
        </div>

          <div className={'overall'}>
            <div className={'problem'}>
              <div className={'problem-label'}>
                <h4>Overall Problem</h4>
                  <p>Dieting is ineffective at long term weight management, yet continues to be prescribed by the media and medical doctors.</p>
              </div>
            </div>
            <div className={'solution'}>
              <div className={'solution-label'}>
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
