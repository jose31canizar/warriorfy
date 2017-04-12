import React from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends React.Component {
  render() {
    var self = this;
    return (
      <SmoothScroll sections={this.props.sections.map((v, i) => (self.props.data[i].title))}>
        {this.props.sections.map((v, i) => (
          <p key={i}>{self.props.data[i].title}</p>))}
      </SmoothScroll>
    );
  }
}

export default NavBar;
