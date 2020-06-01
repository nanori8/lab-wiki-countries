import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        <h1>WikiCountries</h1>
        <div>
          <div>
            <Link to="/ABW">🇦🇼 Aruba</Link>
            <br />
            <Link to="/AFG">🇦🇫 Afghanistan</Link>
            <br />
            <Link to="/AGO">🇦🇴 Angola</Link>
            <br />
            <Link to="/AIA">🇦🇮 Anguilla</Link>
            <br />
            <Link to="/ALA">🇦🇽 Åland Islands</Link>
            <br />
            <Link to="/ALB">🇦🇱 Albania</Link>
            <br />
            <Link to="/AND">🇦🇩 Andorra</Link>
            <br />
            <Link to="/ARE">🇦🇪 United Arab Emirates</Link>
            <br />
            <Link to="/ARG">🇦🇷 Argentina</Link>
            <br />
            <Link to="/ARM">🇦🇲 Armenia</Link>
            <br />
            <Link to="/ASM">🇦🇸 American Samoa</Link>
            <br />
            <Link to="/ATA">🇦🇶 Antarctica</Link>
            <br />
            <Link to="/FLK">🇫🇰 Falkland Islands</Link>
            <br />
            <Link to="/FRA">🇫🇷 France</Link>
            <br />
            <Link to="/ZWE">🇿🇼 Zimbabwe</Link>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
