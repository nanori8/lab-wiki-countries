import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import countries from './countries';
import CountriesList from './Views/CountriesListView';
import CountryDetail from './Views/CountryDetailView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [...countries],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            {/* <Link to="/ABW">🇦🇼 Aruba</Link> */}
          </nav>

          <Switch>
            <Route path="/" exact component={CountriesList} />
            <Route
              path="/:countries"
              exact
              render={(props) => (
                <CountryDetail user={this.state.countries} {...props} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

{
  /* <Route path="/:countries" exact component={CountryDetail} /> */
}
{
  /* <Route
path="/:countries"
exact
render={(props) => <CountryDetail user={this.state.user} {...props} />}
/> */
}
