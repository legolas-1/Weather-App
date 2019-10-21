import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import ListWeatherForecast from "./app_component/forecastweatherlist.component";
// import ClockComponent from "./app_component/clock.component";

const Api_Key = "839a3755f41cd9a4c56f8d57b494dec3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listWeatherForecast: [],
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      humidity: null,
      pressure: null,
      error: false,
      flag: false,
      flag1: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
  get_icon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        return icons.Thunderstorm;
      case rangeId >= 300 && rangeId <= 321:
        return icons.Drizzle;
      case rangeId >= 500 && rangeId <= 521:
        return icons.Rain;
      case rangeId >= 600 && rangeId <= 622:
        return icons.Snow;
      case rangeId >= 701 && rangeId <= 781:
        return icons.Atmosphere;
      case rangeId === 800:
        return icons.Clear;
      case rangeId >= 801 && rangeId <= 804:
        return icons.Clouds;
      default:
        return icons.Clouds;
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  // getWeatherForecastForNext5days = async e => {
  //   e.preventDefault();
  //   let info = e.target.elements;
  // };

  getWeather = async e => {
    e.preventDefault();
    let addr = e.target.elements.autocomp.value.split(",");

    const country = addr[addr.length - 1];
    const city = addr[0];

    // console.log(country, city);
    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
      if (api_call.statusText === "Not Found") {
        this.setState({
          error: true,
          flag: true
        });
        return;
      }
      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        // time: response.dt_txt,
        error: false
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
      // console.log(response);
      // const api_call_2 = await fetch(
      //   // "https://samples.openweathermap.org/data/2.5/forecast?q=Delhi,india&appid=b6907d289e10d714a6e88b30761fae22"
      //   `http://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${Api_Key}`
      // );
      // // const api_call_3 = await fetch();
      // if (api_call_2.statusText === "Not Found") {
      //   this.setState({
      //     flag1: true
      //   });
      //   return;
      // }

      let urls = [
        `http://api.openweathermap.org/data/2.5/weather?q=Delhi,India&appid=${Api_Key}`,
        `http://api.openweathermap.org/data/2.5/weather?q=Berlin,Germany&appid=${Api_Key}`,
        `http://api.openweathermap.org/data/2.5/weather?q=London,England&appid=${Api_Key}`
      ]

      // var response_1 = urls.map(async url => {
      //   let intermediate_data = await fetch(url);
      //   let data = await intermediate_data.json();
      //   return data;
      // });
      // console.log(response_1);

      const api_call_2 = await fetch(urls[0]);
      if (api_call_2.statusText === "Not Found") {
        this.setState({
          flag: true
        });
        return;
      }
      const response2 = await api_call_2.json();
      const api_call_3 = await fetch(urls[1]);
      if (api_call_3.statusText === "Not Found") {
        this.setState({
          flag: true
        });
        return;
      }
      const response3 = await api_call_3.json();
      const api_call_4 = await fetch(urls[2]);
      if (api_call_4.statusText === "Not Found") {
        this.setState({
          error: true,
          flag: true
        });
        return;
      }
      const response4 = await api_call_4.json();

      console.log(response2, response3, response4);
      let response_arr = [];
      response2.icon = this.get_icon(this.weatherIcon, response2.id);

      response3.icon = this.get_icon(this.weatherIcon, response3.id);

      response4.icon = this.get_icon(this.weatherIcon, response4.id);
      response_arr.push(response2, response3, response4);
      this.setState({ listWeatherForecast: response_arr });
      // let response_arr = [];
      // Promise.all(response_1)
      //   .then(async response => {
      //     await response.map(async e => {
      //       let obj = await {
      //         city: `${e.name}, ${e.sys.country}`,
      //         country: e.sys.country,
      //         main: e.weather[0].main,
      //         celsius: this.calCelsius(e.main.temp),
      //         temp_max: this.calCelsius(e.main.temp_max),
      //         temp_min: this.calCelsius(e.main.temp_min),
      //         description: e.weather[0].description,
      //         humidity: e.main.humidity,
      //         pressure: e.main.pressure,
      //         // time: e.dt_txt,
      //         error: false
      //       };
      //       response_arr.push(obj);
      //     });
      //   })
      //   .then(() => {
      //     this.setState({ listWeatherForecast: response_arr });
      //   });
      // console.log(this.state.listWeatherForecast);
    } else {
      this.setState({
        error: true,
        flag: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form
          loadweather={this.getWeather}
          error={this.state.error}
          flag={this.state.flag}
        />
        <Weather
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
        <ListWeatherForecast
          listweatherforecast={this.state.listWeatherForecast}
        ></ListWeatherForecast>
      </div>
    );
  }
}

export default App;
