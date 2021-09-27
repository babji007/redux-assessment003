import React from "react";


// import { connect } from 'react-redux';

export default class Button extends React.Component {
  Rchange(event) {
    this.props.hanonChange(event);
  }
  render() {
    let Rbutton = this.props.regions;
    let label = this.props.name;
    return (
      <div>
        <label>{label} </label>
        <select
          onChange={(event) => {
            this.Rchange(event);
          }}
        >
          {Rbutton.map((x, key) => {
            return <option key={key}>{x.ability.name}</option>;
          })}
        </select>
      </div>
    );
  }
}
