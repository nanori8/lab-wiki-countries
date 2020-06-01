import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CountryDetailInfo from './components/CountryDetail';

const CountryDetailInfoWithRouter = withRouter(CountryDetailInfo);

class CountryDetail extends Component {
  render() {
    const countryID = this.props.match.params.countries;
    console.log('countryID in Detail view', countryID);
    return (
      <div>
        <CountryDetailInfoWithRouter />
      </div>
    );
  }
}

export default CountryDetail;
