import React, {Component} from 'react';


class MenuBarIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuBarIconStyle: 'menu-bar-icon unclicked'
    }
    this.toggleIcon = this.toggleIcon.bind(this);
  }
  toggleIcon() {
    this.setState((prevState, props) => {
      var newProp;
      if(prevState.MenuBarIconStyle == 'menu-bar-icon unclicked') {
        newProp = 'menu-bar-icon clicked';
      } else {
        newProp = 'menu-bar-icon unclicked';
      }
      return {
        MenuBarIconStyle: newProp
      }
    });
  }
  componentWillUpdate(props) {
    if(props.open == true) {
      this.state.MenuBarIconStyle = 'menu-bar-icon clicked'
    } else {
      this.state.MenuBarIconStyle = 'menu-bar-icon unclicked'
    }
  }
  render() {
    return (
      <button className={this.state.MenuBarIconStyle} onMouseDown={this.props.togglePanel}>
        <div id={'topBar'}></div>
        <div id={'middleBar'}></div>
        <div id={'bottomBar'}></div>
      </button>);
  }
}


export default MenuBarIcon;
