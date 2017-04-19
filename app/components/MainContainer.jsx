import React, {Component} from 'react';
import SectionContainer from './SectionContainer.jsx';
import SectionFactory from './SectionFactory.jsx';

import Intro from './Intro.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBarState: ''
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.open) {
      this.state.menuBarState = 'MainContainer menuBarOpen';
    } else {
      this.state.menuBarState = 'MainContainer menuBarClose';
    }
  }
  render() {
    var self = this;

    return (
        <div className={this.state.menuBarState}>
          <Intro/>
          <SectionContainer>
            {this.props.sections.map((v, i) => (
              <div>
              <div className={'border-container'}>
                <div className={'border'}>
                </div>
              </div>
              <div className={'label'}>
                <div className={'label-text'}>
                {this.props.data[i].label}
                </div>
              </div>
              <SectionFactory id={self.props.data[i].title} key={i} data={self.props.data[i]}/>
              </div>
            ))}
          </SectionContainer>
        </div>
    )
  }
}

export default MainContainer;
