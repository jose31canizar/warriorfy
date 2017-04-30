import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './data/sections.json';
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
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
    if(window.scrollY > 500) {
      this.setState((prevState, props) => {
            return {
              stick : false
            }
          });
    } else {
      this.setState((prevState, props) => {
            return {
              stick : true
            }
          });
    }

    if(window.scrollY > 0 && window.scrollY < 500) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : -1
            }
          });
    }

    if(window.scrollY > 500 && window.scrollY < 1000) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 0
            }
          });
    }

    if(window.scrollY > 1000 && window.scrollY < 1500) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 1
            }
          });
    }

    if(window.scrollY > 1500 && window.scrollY < 2000) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 2
            }
          });
    }

    if(window.scrollY > 2000 && window.scrollY < 2500) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 3
            }
          });
    }

    if(window.scrollY > 2500 && window.scrollY < 3000) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 5
            }
          });
    }

    if(window.scrollY > 3000 && window.scrollY < 3500) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 6
            }
          });
    }

    if(window.scrollY > 3500 && window.scrollY < 4000) {
      this.setState((prevState, props) => {
            return {
              selectedIndex : 7
            }
          });
    }

    if(window.scrollY > 4000 && window.scrollY < 4500) {
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
          <MenuBarIcon togglePanel={this.togglePanel} open={this.state.open}/>
          <MenuBar data={this.state.data} sections={this.state.sections} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
          <NavBar data={this.state.data} sections={this.state.sections} open={this.state.open} stick={this.state.stick} selectedIndex={this.state.selectedIndex} changeSelection={this.changeSelection}/>
          <MainContainer data={this.state.data} sections={this.state.sections} togglePanel={this.togglePanel} open={this.state.open}/>
      </div>);
  }
}


export default App;
