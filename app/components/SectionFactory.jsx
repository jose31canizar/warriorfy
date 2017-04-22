import React, {Component} from 'react';
import Mission from './sections/Mission.jsx';
import Opportunity from './sections/Opportunity.jsx';
import Team from './sections/Team.jsx';
import Market from './sections/Market.jsx';
import Product from './sections/Product.jsx';
import BusinessModel from './sections/BusinessModel.jsx';
import Adoption from './sections/Adoption.jsx';
import Competition from './sections/Competition.jsx';
import Investment from './sections/Investment.jsx';


class SectionFactory extends Component {
  render() {
    var section = '';
    if(this.props.data.title == 'Mission') {
      section = <Mission data={this.props.data}/>;
    } else if(this.props.data.title == 'Opportunity') {
      section = <Opportunity data={this.props.data}/>;
    } else if(this.props.data.title == 'Team') {
      section = <Team data={this.props.data}/>;
    } else if(this.props.data.title == 'Market') {
      section = <Market data={this.props.data}/>;
    } else if(this.props.data.title == 'Product') {
      section = <Product data={this.props.data}/>;
    } else if(this.props.data.title == 'Business Model') {
      section = <BusinessModel data={this.props.data}/>;
    } else if(this.props.data.title == 'Adoption') {
      section = <Adoption data={this.props.data}/>;
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
              </div>
              <div className={'container-wrapper'}>
                {section}
              </div>
            </div>
          </div>
      </div>

    );
  }
}


export default SectionFactory;
