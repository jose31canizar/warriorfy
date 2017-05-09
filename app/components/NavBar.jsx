import React from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBarStyle: 'nav-bar-container',
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'nav-bar-container nav-bar-hidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'nav-bar-container'
        }
      });
    }

    if(!props.stick) {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: prevState.NavBarStyle + ' stick'
        }
      });
    } else {
      console.log('sticking!');
      this.setState((prevState, props) => {
        return {
          NavBarStyle: prevState.NavBarStyle + ' nonstick'
        }
      });
    }
  }
  render() {

    var self = this;

    var index = self.props.selectedIndex;

    var navBarButtons = [];

    var introButton;
    if(self.props.selectedIndex == -1) {
      introButton = (<SmoothScroll type={'nav-button selected'} section={'Intro'} onMouseDown={self.props.changeSelection.bind(null, -1)}>
        <h2>Introduction</h2>
      </SmoothScroll>);
    } else {
      introButton = (<SmoothScroll type={'nav-button'} section={'Intro'} onMouseDown={self.props.changeSelection.bind(null, -1)}>
        <h2>Introduction</h2>
      </SmoothScroll>);
    }

    navBarButtons.push(introButton);


    navBarButtons = navBarButtons.concat(this.props.sections.map(function(v, i) {
        if(self.props.selectedIndex == i) {
          return (<SmoothScroll type={'nav-button selected'} onMouseDown={self.props.changeSelection.bind(null, i)} section={self.props.data[i].title}>
            <h2 key={i}>{self.props.data[i].title}</h2>
          </SmoothScroll>);
        } else {
          return (<SmoothScroll type={'nav-button'} onMouseDown={self.props.changeSelection.bind(null, i)} section={self.props.data[i].title}>
            <h2 key={i}>{self.props.data[i].title}</h2>
          </SmoothScroll>);
        }
      }));





    return (
      <div className={this.state.NavBarStyle}>
        <div className={'nav-bar'}>
          <div className={'nav-bar-connector'}></div>

            <SmoothScroll type={'nav-button nav-warriorfy'} section={''}>
              <a href={'http://warriorfy.com/'}>
                <h2>Warriorfy</h2>
              </a>
            </SmoothScroll>

            {navBarButtons}

            <SmoothScroll type={'nav-button nav-angel-list'} section={''}>
              <a href={'http://angel.co/warriorfy'}>
                <h2>Angel list</h2>
              </a>
            </SmoothScroll>
        </div>
      </div>
    );
  }
}

export default NavBar;
