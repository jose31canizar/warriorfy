import React, {Component} from 'react';
import Warriorfy from './sections/Warriorfy.jsx';
import MissionStatement from './sections/MissionStatement.jsx';
import Opportunity from './sections/Opportunity.jsx';
import Team from './sections/Team.jsx';
import MarketValidation from './sections/MarketValidation.jsx';
import Product from './sections/Product.jsx';
import BusinessModel from './sections/BusinessModel.jsx';
import CustomerAdoption from './sections/CustomerAdoption.jsx';
import Competition from './sections/Competition.jsx';
import Investment from './sections/Investment.jsx';


class SectionFactory extends Component {
  render() {
    var section = '';
    if(this.props.title == 'Warriorfy') {
      section = <Warriorfy title={this.props.title}/>;
    } else if(this.props.title == 'Mission Statement') {
      section = <MissionStatement title={this.props.title}/>;
    } else if(this.props.title == 'Opportunity') {
      section = <Opportunity title={this.props.title}/>;
    } else if(this.props.title == 'Team') {
      section = <Team title={this.props.title}/>;
    } else if(this.props.title == 'Market Validation') {
      section = <MarketValidation title={this.props.title}/>;
    } else if(this.props.title == 'Product') {
      section = <Product title={this.props.title}/>;
    } else if(this.props.title == 'Business Model') {
      section = <BusinessModel title={this.props.title}/>;
    } else if(this.props.title == 'Customer Adoption') {
      section = <CustomerAdoption title={this.props.title}/>;
    } else if(this.props.title == 'Competition') {
      section = <Competition title={this.props.title}/>;
    } else if(this.props.title == 'Investment') {
      section = <Investment title={this.props.title}/>;
    } else {

    }
    return (
      <div className={'Section'} id={this.props.id}>
        {section}
      </div>);
  }
}


export default SectionFactory;
