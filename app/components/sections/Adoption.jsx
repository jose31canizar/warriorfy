import React, {Component} from 'react';

class Adoption extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='header-text'>
            <h2>Grassroots go-to-market strategy.</h2>
          </div>
          <div className='subtitle-text'>
            <h3>1.) Start with our existing subcommunity, Recovery Warriors</h3>
            <h3>2.) Expand reach through digital advertising</h3>
            <h3>3.) Strengthen brand through media exposure</h3>
          </div>
        </div>
        <div className='adoption'>
          <div className='example'>
              <img src={require('../img/Adoption-IG.png')} className={'product-image'}/>
          </div>
          <div className='launch'>
            <h6>LAUNCH</h6>
            <p>• Direct email to 5,000 subscribers</p>
            <p>• Share with social media following of over 57K Recovery Warriors </p>
            <p>• Promote on Recovery Warriors website with 35K monthly unique visitors </p>
            <p>• Network outreach</p>
          <div className='scale'>
            <h6>SCALE</h6>
              <p>• Lead generation quizzes</p>
              <p>• Audio advertisements on health-focused podcasts</p>
              <p>• Affiliate marketing program</p>
              <p>• Treatment center partnerships</p>
              <p>• Influencer marketing</p>
              <p>• PR</p>
              </div>
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
