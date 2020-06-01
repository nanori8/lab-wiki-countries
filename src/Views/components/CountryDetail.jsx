import React, { Component } from 'react';

class CountryDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      variableUpdatedInComponentDidUpdate: '',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate');

    const date = Date.now();

    if (this.props.props !== prevProps.props) {
      this.setState({
        variableUpdatedInComponentDidUpdate: date,
      });
    }
  }

  render() {
    console.log('props in render', this.state.props);
    return (
      <div>
        <div>
          <h1>France</h1>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  551695 km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <a href="/AND">Andorra</a>
                    </li>
                    <li>
                      <a href="/BEL">Belgium</a>
                    </li>
                    <li>
                      <a href="/DEU">Germany</a>
                    </li>
                    <li>
                      <a href="/ITA">Italy</a>
                    </li>
                    <li>
                      <a href="/LUX">Luxembourg</a>
                    </li>
                    <li>
                      <a href="/MCO">Monaco</a>
                    </li>
                    <li>
                      <a href="/ESP">Spain</a>
                    </li>
                    <li>
                      <a href="/CHE">Switzerland</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryDetailInfo;
