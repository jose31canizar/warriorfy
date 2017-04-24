import React from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBarStyle: 'nav-bar-container',
      selectedIndex: -1
    }

    this.changeSelection = this.changeSelection.bind(this);
  }
  changeSelection(i) {
    console.log('changed selection!' + i);
    this.setState({
      selectedIndex: i
    });
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: prevState.NavBarStyle + ' nav-bar-hidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'nav-bar-container'
        }
      });
    }
  }
  render() {

    var self = this;

    var index = self.state.selectedIndex;

    var navBarButtons = [];

    var introButton;
    if(self.state.selectedIndex == -1) {
      introButton = (<SmoothScroll type={'nav-button selected'} section={'Intro'} onMouseDown={self.changeSelection.bind(null, -1)}>
        <p>Introduction</p>
      </SmoothScroll>);
    } else {
      introButton = (<SmoothScroll type={'nav-button'} section={'Intro'} onMouseDown={self.changeSelection.bind(null, -1)}>
        <p>Introduction</p>
      </SmoothScroll>);
    }

    navBarButtons.push(introButton);


    navBarButtons = navBarButtons.concat(this.props.sections.map(function(v, i) {
        if(self.state.selectedIndex == i) {
          return (<SmoothScroll type={'nav-button selected'} onMouseDown={self.changeSelection.bind(null, i)} section={self.props.data[i].title}>
            <p key={i}>{self.props.data[i].title}</p>
          </SmoothScroll>);
        } else {
          return (<SmoothScroll type={'nav-button'} onMouseDown={self.changeSelection.bind(null, i)} section={self.props.data[i].title}>
            <p key={i}>{self.props.data[i].title}</p>
          </SmoothScroll>);
        }
      }));





    return (
      <div className={this.state.NavBarStyle}>
        <div className={'nav-bar'}>
          <div className={'nav-bar-connector'}></div>

            <SmoothScroll type={'nav-button nav-warriorfy'} section={''}>
              <a href={'http://warriorfy.com/'}>
                <p>Warriorfy</p>
              </a>
            </SmoothScroll>

            {navBarButtons}

            <SmoothScroll type={'nav-button nav-angel-list'} section={''}>
              <a href={'http://angel.co/warriorfy'}>
                <p>Angel list</p>
              </a>
            </SmoothScroll>
        </div>
      </div>
    );
  }
}

export default NavBar;
