import React from 'react';
import SectionContainer from './SectionContainer.jsx';
import Section from './Section.jsx';

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
              <Section id={self.props.data[i].title} key={i}>
              <h1>{self.props.data[i].title}</h1>
              <p>{self.props.data[i].text}</p>
              </Section>))}
          </SectionContainer>
        </div>
    )
  }
});

module.exports = MainContainer;
