import React from "react";

import { connect } from "react-redux";
import { getCountries } from "../actions/fetchCountries.js";
import Buttons from "./Buttons";


// import './container'
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [],
      country: [],
      selectedRegion: "",
      selectedCountry: "",
      isOpen:true,
    };
  }
  componentDidMount() {
    this.props.getCountries(this.props.Content.regions[0].ability.name);
  }

  changeRegion(event) {
    var newRegion = event.target.value;
    this.setState({ selectedRegion: newRegion });
    console.log(newRegion);
    this.props.getCountries(newRegion);
  }
  
  render() {
    return (
      <div style={{ marginLeft: 200 }}>
        <h1>{this.props.Content.heading}</h1>
        <div className="dropdown">
          <Buttons
            regions={this.props.Content.regions}
            name={this.props.Content.region}
            hanonChange={(name) => {
              this.changeRegion(name);
            }}
          />
          <br />
          <br />
          <Buttons regions={this.props.countries} name={this.props.Content.country}/>
        </div>
        {this.props.error &&
          <p className="error">
           something went wrong .{" "}
          </p>
        }
      </div>
    );
  }
}



