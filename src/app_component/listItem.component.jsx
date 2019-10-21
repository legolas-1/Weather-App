import React from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import "./listItem.style.css";

const Listitem = ({
  dt,
  humidity,
  temperature,
  temp_min,
  temp_max,
  pressure,
  country,
  city,
  description,
  icon
}) => {
  let d = new Date(dt * 1000);
  let time_format = d
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")
    .split(" ");

  return (
    <li className="listItem">
      <Container style={{ marginTop: "50px" }}>
        <Row className="header" style={{ borderBottom: "1px solid white" }}>
          <Col md="4" style={{ fontWeight: "bold" }}>
            {city},{country}
          </Col>
          <Col md="8" className="offset-md-2.5" xs="12">
            <h5 style={{ color: "white" }}>
              &nbsp;
              <span className="date-format" style={{ fontWeight: "bolder" }}>
                {time_format[0]}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span> {time_format[1]}</span>
              (UTC)
            </h5>
          </Col>
        </Row>
        <Container className="container-body">
          <Row>
            <Col md="5"></Col>
            <Col md="2"></Col>
          </Row>
          <Row>
            <Col md="5">
              {pressure ? <h5>Pressure - {pressure}&nbsp; hpa</h5> : ""}
            </Col>
            <Col md="5">
              {" "}
              {temperature ? (
                <h5> Temperature - {Math.floor(temperature - 273.15)}&deg;</h5>
              ) : (
                ""
              )}
            </Col>
            <Col md="2"></Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col
              md="5"
              style={{
                display: "inlineBlock",
                marginLeft: "auto",
                marginTop: "36px"
              }}
            >
              {temp_min ? (
                <h5>Min Temp - {Math.floor(temp_min - 273.15)}&deg;</h5>
              ) : (
                ""
              )}
            </Col>
            <Col
              md="5"
              style={{
                display: "inlineBlock",
                marginLeft: "auto",
                marginTop: "36px"
              }}
            >
              {description ? <h5>Description - {description}</h5> : ""}
            </Col>
            <Col style={{ display: "inlineBlock" }} md="2">
              {icon ? (
                <h5>
                  <i
                    className={`wi ${icon} display-1`}
                    style={{ color: "white" }}
                  />
                </h5>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <Row>
            <Col md="5">
              {temp_max ? (
                <h5>Max Temp - {Math.floor(temp_max - 273.15)}&deg;</h5>
              ) : (
                ""
              )}
            </Col>
            <Col md="5">{humidity ? <h5>Humidity - {humidity}%</h5> : ""}</Col>
            <Col md="2"></Col>
          </Row>
        </Container>
        <Row className="footer">
          <Col></Col>
        </Row>
      </Container>
    </li>
  );
};

export default Listitem;
