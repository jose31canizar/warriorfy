import React, {Component} from 'react';
import TeamData from '../../data/team.json';
import Label from '../Label.jsx';



class Team extends Component {
  render() {
    const topRow = TeamData.slice(0,4);
    const middleRow = TeamData.slice(4,8);
    const bottomRow = TeamData.slice(8,12);
    console.log(topRow);
    console.log(middleRow);

    return (
      <div>
        <div className='team-header-text'>
          <h2>We build things people need and love to use.</h2>
        </div>

        <div className='team-members-container'>
          <div className='team-members'>
            <div className='team-members-row'>
              {topRow.map((member, i) => (
                <div className='team-member'>
                  <div className='profile-pic-container'>
                    <img src={require('../img/' + member.image + '.png')} className='profile-pic'/>
                  </div>
                  <div className='team-member-text'>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                      <p>
                        {member.description}
                      </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={'advisors-label-container'}>
                <Label label={'Advisors'} />
              </div>
            <div className={'team-members-row middle-row'}>
              {middleRow.map((member, i) => (
                <div className={'team-member'}>
                  <div className={'profile-pic-container'}>
                    <img src={require('../img/' + member.image + '.png')} className={'profile-pic'}/>
                  </div>
                  <div className={'team-member-text'}>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                      <p>
                        {member.description}
                      </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='team-members-row'>
              {bottomRow.map((member, i) => (
                <div className='team-member'>
                  <div className='profile-pic-container'>
                    <img src={require('../img/' + member.image + '.png')} className='profile-pic'/>
                  </div>
                  <div className='team-member-text'>
                  <div className='member-name'>
                      <h6>
                        {member.name}
                      </h6>
                  </div>
                      <p>
                        {member.job_title}
                      </p>
                      <p>
                        {member.description}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Team;
