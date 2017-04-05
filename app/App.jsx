import React, {Component} from 'react';
import Section from './components/Section.jsx';
import SectionContainer from './components/SectionContainer.jsx';
import Sass from './scss/main.scss';
import SectionsData from './data/sections.json';
import Fonts from './assets/styles/global.css';
var SmoothScroll = require('./components/SmoothScroll.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [1, 2, 3, 4, 5, 6],
      data: 'loading...'
    };
  }
  componentDidMount() {
    this.setState({
      data: SectionsData
    });
  }
  render() {

    var self = this;

    return (
      <div>
        <h1>Warriorfy Pitch Deck</h1>
          <SmoothScroll sections={['Warriorfy', 'Vision', 'Product', 'Business Model', 'Market Opportunity', 'Market Advantage']}>
            {this.state.sections.map((v, i) => (
              <p key={i}>{self.state.data[i].title}</p>))}
          </SmoothScroll>
        <SectionContainer>
          {this.state.sections.map((v, i) => (
            <Section id={self.state.data[i].title} key={i}>
            <h1>{self.state.data[i].title}</h1>
            <p>{self.state.data[i].text}</p>
            </Section>))}
        </SectionContainer>
      </div>);
  }
}


export default App;
