import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './data/sections.json';
var SmoothScroll = require('./components/SmoothScroll.js');
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
      MenuBarIconStyle: 'MenuBarIcon'
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
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
  componentDidMount() {
    this.setState({
      data: SectionsData
    });
  }
  render() {
    var self = this;

    return (
      <div className={'wrapper'}>
          <MenuBarIcon togglePanel={this.togglePanel} open={this.state.open}/>
          <MenuBar data={this.state.data} sections={this.state.sections} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
          <NavBar data={this.state.data} sections={this.state.sections} open={this.state.open}/>
          <MainContainer data={this.state.data} sections={this.state.sections} togglePanel={this.togglePanel} open={this.state.open}/>
      </div>);
  }
}


export default App;
