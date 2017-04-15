import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './data/sections.json';
var SmoothScroll = require('./components/SmoothScroll.js');
import NavBar from './components/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    const N = SectionsData.length;
    const sections = Array.apply(null, {length: N}).map(Number.call, Number);
    this.state = {
      sections: sections,
      data: 'loading...',
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });
        console.log('changed');
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
          <NavBar data={this.state.data} sections={this.state.sections} open={this.state.open}/>
          <MainContainer data={this.state.data} sections={this.state.sections} togglePanel={this.togglePanel} open={this.state.open}/>
      </div>);
  }
}


export default App;
