import React from "react";
import "./weather.style.css";
import { Container, Row, Col } from "reactstrap";

const Weather = props => {
  return (
    <Container className="container text-light">
      <div className="Card" style={{ border: "2", marginTop: "50px" }}>
        <Row>
          <Col md="5" xs="8" style={{ margin: "auto" }}>
            <h1 className="" style={{ color: "white" }}>
              {props.cityname}
            </h1>
            <Row>
              <Col md="2.5" style={{ margin: "auto" }}>
                {props.pressure ? (
                  <h5
                    style={{
                      fontFamily: " Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Pressure &nbsp; {props.pressure} hpa
                  </h5>
                ) : (
                  ""
                )}
              </Col>
              <Col md="2.5" style={{ margin: "auto" }}>
                {props.humidity ? (
                  <h5
                    style={{
                      fontFamily: " Verdana, Geneva, Tahoma, sans-serif"
                    }}
                  >
                    Humidity &nbsp; {props.humidity}%
                  </h5>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Col>
          {/*py-4*/}
          <Col md="3">
            <h5>
              <i
                className={`wi ${props.weatherIcon} display-1`}
                style={{ color: "white" }}
              />
            </h5>
          </Col>

          {/* Get Celsius */}
          {/*props.temp_celsius ? (
            <h1 style={{ color: "black" }} className="">
              {props.temp_celsius}&deg;
            </h1>
          ) : null*/}

          {/* show max and min temp */}
          <Col md="2" style={{ margin: "auto" }}>
            {maxminTemp(props.temp_min, props.temp_max)}
          </Col>

          <Col md="2" style={{ margin: "auto" }}>
            {/* Weather description */}

            <h4
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "1.8rem"
              }}
              className=""
            >
              {props.description.charAt(0).toUpperCase() +
                props.description.slice(1)}
            </h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      //5c5a56
      <h3 style={{ margin: "10px" }}>
        <Row>
          <Col md="12" xs="12" style={{ color: "white" }} className="">
            {max}&deg;
          </Col>
          <Col
            md="12"
            xs="12"
            style={{ color: "white", fontSize: "20px" }}
            className=""
          >
            {min}&deg;
          </Col>
        </Row>
      </h3>
    );
  }
}
