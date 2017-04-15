import React from 'react';
import SectionContainer from './SectionContainer.jsx';
import SectionFactory from './SectionFactory.jsx';

var MainContainer = React.createClass({
  getInitialState() {
    return {
      style: 'slideMenuBarButton',
      menuBarState: ''
    }
  },
  componentWillReceiveProps(newProps) {
    if(newProps.open) {
      this.state.style += ' clicked';
      this.state.menuBarState = 'MainContainer menuBarOpen';
    } else {
      this.state.style = 'slideMenuBarButton';
      this.state.menuBarState = 'MainContainer menuBarClose';
    }
  },
  render() {
    var self = this;

    return (
        <div className={this.state.menuBarState}>
          <button className={this.state.style} onMouseDown={this.props.togglePanel}>
            <div id={'topBar'}></div>
            <div id={'middleBar'}></div>
            <div id={'bottomBar'}></div>
          </button>
          <SectionContainer>
            {this.props.sections.map((v, i) => (
              <SectionFactory id={self.props.data[i].title} key={i} title={self.props.data[i].title} text={self.props.data[i].text}/>
            ))}
          </SectionContainer>
        </div>
    )
  }
});

module.exports = MainContainer;
