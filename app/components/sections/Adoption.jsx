import React, {Component} from 'react';

class Adoption extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='header-text'>
            <h2>Grassroots Go-to-Market Strategy.</h2>
          </div>
          <div className='subtitle-text'>
            <h3>1.) Start with our growing audience</h3>
            <h3>2.) Expand Warriorfy network through ads</h3>
            <h3>2.) Expand Warriorfy network through ads</h3>
          </div>
        </div>
        <div className='adoption'>
          <div className='example'>
              <img src={require('../img/Adoption-IG.png')} className={'product-image'}/>
          </div>
          <div className='launch'>
            <h3>Launch</h3>
            <p>• Direct Email to 4,000 subscribers</p>
            <p>• Share with social media following of over 57K Recovery Warriors </p>
            <p>• Promote on Recovery Warriors website with 35K monthly unique visitors </p>
            <p>• Digital advertising</p>
            </div>
            <div className='launch'>
            <h3>Scale</h3>
              <p>• Lead generation quizzes</p>
              <p>• Audio advertisements on health-focused podcasts</p>
              <p>• Affiliate marketing program</p>
              <p>• Treatment center partnerships</p>
              <p>• Influencer marketing</p>
              <p>• PR</p>
              </div>


        </div>
        <div className='footer'>
          <div className='footer-text'>
          </div>
        </div>

      </div>


    )
  }
};

export default Adoption;
