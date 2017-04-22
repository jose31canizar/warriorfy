import React, {Component} from 'react';
import TeamData from '../../data/team.json';

class Team extends Component {
  render() {
    // const N = TeamData.length;
    // const teamMembers = Array.apply(null, {length: N}).map(Number.call, Number);
    // console.log(TeamData);

    // const Row = TeamData.length % 6;
    // const teamMembers = Array.apply(null, {length: N}).map(Number.call, Number);
    // console.log(TeamData);

    const topRow = TeamData.slice(0,4);
    const middleRow = TeamData.slice(4,6);
    // const bottomRow = TeamData.slice(4,6);
    console.log(topRow);
    console.log(middleRow);
    // console.log(bottomRow);

    return (

      <div className={'team-members-container'}>
        <div className={'team-members'}>
          <div className={'team-members-top-row'}>
            {topRow.map((member, i) => (
              <div className={'team-member'}>
                <div className={'profile-pic-container'}>
                <img src={require('../img/' + member.image + '.png')} className={'profile-pic'}/>
                </div>
                  <h2>
                    {member.name}
                  </h2>
                  <p>
                    {member.job_title}
                  </p>
              </div>
            ))}
          </div>
          <div className={'team-members-middle-row'}>
            {middleRow.map((member, i) => (
              <div className={'team-member'}>
                <div className={'profile-pic-container'}>
                <img src={require('../img/' + member.image + '.png')} className={'profile-pic'}/>
                </div>
                  <h2>
                    {member.name}
                  </h2>
                  <p>
                    {member.job_title}
                  </p>
              </div>
            ))}
          </div>
          <div className={'team-members-bottom-row'}>
          </div>

        </div>
      </div>

    )
  }
};

export default Team;
