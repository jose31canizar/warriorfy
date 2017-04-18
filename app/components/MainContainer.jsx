import React, {Component} from 'react';
import SectionContainer from './SectionContainer.jsx';
import SectionFactory from './SectionFactory.jsx';
import NavBar from './NavBar.jsx';
import Warriorfy from './Warriorfy.jsx';

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
          <NavBar data={this.props.data} sections={this.props.sections} open={this.props.open}/>
          <Warriorfy/>
          <SectionContainer>
            {this.props.sections.map((v, i) => (
              <SectionFactory id={self.props.data[i].title} key={i} data={self.props.data[i]}/>
            ))}
          </SectionContainer>
        </div>
    )
  }
}

export default MainContainer;
