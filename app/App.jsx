import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './data/sections.json';
import MenuBar from './components/MenuBar.jsx';

import NavBar from './components/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    const N = SectionsData.length;
    const sections = Array.apply(null, {length: N}).map(Number.call, Number);
    this.state = {
      sections: sections,
      data: 'loading...',
      open: false,
      MenuBarIconStyle: 'menu-bar-icon',
      stick: false,
      selectedIndex: 0
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
  }
  handleScroll() {


    const sections = [0,500,1750,3250,5250,6500,7500,8500,10000,11000,12000,13000];

    if(window.scrollY > 500) {
      this.setState((prevState, props) => {
            return {
              stick : false
            }
          });
    } else {
      this.setState((prevState, props) => {
            return {
              stick : false
            }
          });
    }

    if(window.scrollY > sections[0] && window.scrollY < sections[1]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : -1
            }
          });
    }

    if(window.scrollY > sections[1] && window.scrollY < sections[2]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 0
            }
          });
    }

    if(window.scrollY > sections[2] && window.scrollY < sections[3]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 1
            }
          });
    }

    if(window.scrollY > sections[3] && window.scrollY < sections[4]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 2
            }
          });
    }

    if(window.scrollY > sections[4] && window.scrollY < sections[5]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 3
            }
          });
    }

    if(window.scrollY > sections[5] && window.scrollY < sections[6]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 4
            }
          });
    }

    if(window.scrollY > sections[6] && window.scrollY < sections[7]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 5
            }
          });
    }

    if(window.scrollY > sections[7] && window.scrollY < sections[8]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 6
            }
          });
    }

    if(window.scrollY > sections[8] && window.scrollY < sections[9]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 7
            }
          });
    }

    if(window.scrollY > sections[9] && window.scrollY < sections[10]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 8
            }
          });
    }

    if(window.scrollY > sections[10] && window.scrollY < sections[11]) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 8
            }
          });
    }

    console.log(screen.height);

  }
  togglePanel() {
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });
  }
  closeMenuBar() {
    this.setState({
      open: false
    })
  }
  changeSelection(i) {
    console.log('changed selection!' + i);
    this.setState({
      selectedIndex: i
    });
  }
  componentDidMount() {
    this.setState({
      data: SectionsData
    });

    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    var self = this;

    return (
      <div className={'wrapper'}>
          <MenuBar data={this.state.data} sections={this.state.sections} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
          <NavBar data={this.state.data} sections={this.state.sections} open={this.state.open} stick={this.state.stick} selectedIndex={this.state.selectedIndex} changeSelection={this.changeSelection}/>
          <MainContainer data={this.state.data} sections={this.state.sections} togglePanel={this.togglePanel} open={this.state.open}/>
      </div>);
  }
}


export default App;
