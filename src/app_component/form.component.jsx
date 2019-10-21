import React from "react";
import "./form.style.css";
// import iso_code from "./assist";

// import GoogleSuggest from "./googleSuggest";
import Autocomplete from "react-google-autocomplete";
// import { DropdownButton, Dropdown } from "react-bootstrap";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? (props.flag ? error1() : error()) : ""}</div>
        <div className="row">
          <div className="col-md-4 offset-md-3">
            <Autocomplete
              className="form-control autocompx"
              name="autocomp"
              onPlaceSelected={place => {
                console.log(place);
              }}
              types={["(regions)"]}
              //componentRestrictions={{ country: "" }}
            />
          </div>

          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className=" btn-dark-mr button-mr">Get Weather</button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

const error1 = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter valid City and Country...!
    </div>
  );
};

export default Form;

// <input
// type = "text"
// className = "form-control"
// placeholder = "City"
// name = "city"
// autoComplete = "off"
//   />

// <div className="col-md-3">
//   <input
//     type="text"
//     className="form-control"
//     placeholder="Country"
//     name="country"
//     autoComplete="off"
//   />
// </div>
