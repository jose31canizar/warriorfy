import React, {Component} from 'react';
import SectionContainer from './SectionContainer.jsx';
import SectionHandler from './SectionHandler.jsx';
import Label from './Label.jsx';
import MenuBarIcon from './MenuBarIcon.jsx';
import Intro from './Intro.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBarState: 'menu-bar-close'
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.open) {
      this.state.menuBarState = 'main-container menu-bar-open';
    } else {
      this.state.menuBarState = 'main-container menu-bar-close';
    }
  }
  render() {
    var self = this;

    return (
      <div>
        <MenuBarIcon togglePanel={this.props.togglePanel} open={this.props.open}/>
        <div className={this.state.menuBarState}>
          <Intro/>
          <SectionContainer>
            {this.props.sections.map((v, i) => (
              <div>
              <Label label={this.props.data[i].label}/>
              <SectionHandler id={self.props.data[i].title} key={i} data={self.props.data[i]}/>
              </div>
            ))}
          </SectionContainer>
        </div>
      </div>
    )
  }
}

export default MainContainer;
