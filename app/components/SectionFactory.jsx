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
    if(this.props.data.title == 'Mission Statement') {
      section = <MissionStatement data={this.props.data}/>;
    } else if(this.props.data.title == 'Opportunity') {
      section = <Opportunity data={this.props.data}/>;
    } else if(this.props.data.title == 'Team') {
      section = <Team data={this.props.data}/>;
    } else if(this.props.data.title == 'Market Validation') {
      section = <MarketValidation data={this.props.data}/>;
    } else if(this.props.data.title == 'Product') {
      section = <Product data={this.props.data}/>;
    } else if(this.props.data.title == 'Business Model') {
      section = <BusinessModel data={this.props.data}/>;
    } else if(this.props.data.title == 'Customer Adoption') {
      section = <CustomerAdoption data={this.props.data}/>;
    } else if(this.props.data.title == 'Competition') {
      section = <Competition data={this.props.data}/>;
    } else if(this.props.data.title == 'Investment') {
      section = <Investment data={this.props.data}/>;
    } else {
      section = <Investment data={this.props.data}/>;
    }
    return (
      <div className={'Section'} id={this.props.id}>
          <div>
            <div className={'container'}>
              <div className={'background_image'}>
                <h1>{this.props.data.title}</h1>
                <p>Live your dreams.</p>
              </div>
              {section}
              </div>
          </div>
      </div>);
  }
}


export default SectionFactory;
