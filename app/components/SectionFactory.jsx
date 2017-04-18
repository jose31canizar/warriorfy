import React, {Component} from 'react';
import MissionStatement from './sections/MissionStatement.jsx';
import Opportunity from './sections/Opportunity.jsx';
import Team from './sections/Team.jsx';
import MarketValidation from './sections/MarketValidation.jsx';
import Product from './sections/Product.jsx';
import BusinessModel from './sections/BusinessModel.jsx';
import CustomerAdoption from './sections/CustomerAdoption.jsx';
import Competition from './sections/Competition.jsx';
import Investment from './sections/Investment.jsx';
var SmoothScroll = require('./SmoothScroll.js');


class SectionFactory extends Component {
  render() {
    var section = '';
      if(this.props.title == 'Mission Statement') {
      section = <MissionStatement data={this.props.data}/>;
    } else if(this.props.title == 'Opportunity') {
      section = <Opportunity data={this.props.data}/>;
    } else if(this.props.title == 'Team') {
      section = <Team title={this.props.title}/>;
    } else if(this.props.title == 'Market Validation') {
      section = <MarketValidation data={this.props.data}/>;
    } else if(this.props.title == 'Product') {
      section = <Product data={this.props.data}/>;
    } else if(this.props.title == 'Business Model') {
      section = <BusinessModel data={this.props.data}/>;
    } else if(this.props.title == 'Customer Adoption') {
      section = <CustomerAdoption data={this.props.data}/>;
    } else if(this.props.title == 'Competition') {
      section = <Competition data={this.props.data}/>;
    } else if(this.props.title == 'Investment') {
      section = <Investment data={this.props.data}/>;
    } else {
      section = <Investment data={this.props.data}/>;
    }
    return (
      <div className={'Section'} id={this.props.id}>
        <div className={'border'}></div>
          <div className={'Warriorfy'}>
            <div className={'container'}>
              <div className={'label'}>{this.props.data.label}</div>
              <div className={'logo'}></div>
              <div className={'background_image'}>
              <div className={'foreground_image'}>
                  <h1>{this.props.data.title}</h1>
                  <p>Live your dreams.</p>
                </div>
              </div>
              <SmoothScroll className={'StartContainer'} section={this.props.section}>
                <div className={'Start'}>
                  <p>Start</p>
                </div>
              </SmoothScroll>
              </div>
          </div>
      </div>);
  }
}


export default SectionFactory;
