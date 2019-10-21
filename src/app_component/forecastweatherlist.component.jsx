import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { Table } from "react-bootstrap";
import Listitem from "./listItem.component";
import "./forecastweatherlist.style.css";
import "weather-icons/css/weather-icons.css";

const ListWeatherForecast = props => {
  // let length_list =
  //   props && props.listweatherforecast ? props.listweatherforecast.length : 0;
  let con = 0;
  // console.log(props);

  return (
    <ol className="ordered-list">
      {props &&
      props.listweatherforecast &&
      props.listweatherforecast.length === 0
        ? ""
        : props.listweatherforecast.map(e => {
            let obj = {};
            obj = {
              dt: e.dt,
              humidity: e.main.humidity,
              temperature: e.main.temp,
              temp_min: e.main.temp_min,
              temp_max: e.main.temp_max,
              pressure: e.main.pressure,
              country: e.sys.country,
              city: e.name,
              description: e.weather[0].description,
              icon: e.icon
            };
            return <Listitem key={con++} {...obj}></Listitem>;
          })}
    </ol>
  );
};

export default ListWeatherForecast;
