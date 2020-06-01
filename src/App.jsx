import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/ABW">🇦🇼 Aruba</Link> */}
        </nav>

        <Switch>
          {/*If you want to pass props to a view, you need to yse the render atribute instead of component attribure*/}
          {/* //   path="/"
          //   exact
          //   render={(props) => <HomeView user={this.state.user} {...props} />}
          // /> */}
          <Route path="/" exact component={CountriesList} />
          {/* <Route path="/about" exact component={AboutView} />
          <Route path="/person/:name" exact component={PersonView} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
