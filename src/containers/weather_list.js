import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map((weather) => {return weather.main.temp})
    const pressure = cityData.list.map((weather) => {return weather.main.presure})
    const humidity = cityData.list.map((weather) => {return weather.main.humidity})

    console.log("temp:", temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>-</td>
        <td>-</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Presure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
