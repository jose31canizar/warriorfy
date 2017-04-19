import React, {Component} from 'react';
import TeamData from '../../data/team.json';

class Team extends Component {
  render() {
    const N = TeamData.length;
    const teamMembers = Array.apply(null, {length: N}).map(Number.call, Number);
    console.log(TeamData);
    return (
        <div className={'team-members'}>
          {TeamData.map((member, i) => (
            <div className={'team-member'}>
              <div className={'profile-pic-container'}>
              <div className={'profile-pic'}>
              </div>
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
    )
  }
};

export default Team;
