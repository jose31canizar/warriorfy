import React, {Component} from 'react';


class SectionContainer extends Component {
  render() {
    return (
      <div className={'SectionContainer'}>
        {this.props.children}
      </div>);
  }
}


export default SectionContainer;
