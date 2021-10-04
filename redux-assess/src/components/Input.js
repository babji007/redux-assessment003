import React, { Component } from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemInput: "",
      data: [],
      count: 0,
    };
  }

  handleSubmit = (event)=>{ {
    this.props.onSubmit(event);
  //   const data = this.state.data;
  //   const obj = {
  //     name: this.state.newItemInput,
  //     key: this.state.count,
  // };
  //   data.push(obj);
  //   this.setState({
  //     data,
  //     count: this.state.count + 1,
  //     newItemInput: "",
  //   });
  }}
  // handleOnChange(e) {
  //   this.setState({
  //     newItemInput: e.target.value,
  //   });
  // }

  render() {
    return (
      <div className="create-new">
        <form class="example" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id='msg'
            className="Input"
            name="msg"
            placeholder="Please enter your task"
            // newItemInput={this.state.newItemInput}
            // handleOnChange={ this.handleOnChange}
          />
          <button type="submit" id="submit" >
            add
          </button>
        </form>
        {/* <div className="create-new">
         <input
          type="text"
          placeholder="Please enter your task"
          // value={this.state.newItemInput}
          handleOnChange={(e) => this.handleOnChange(e)} />
        <button 
          onClick={(e) => { this.handleSubmit(e) }} >
            add</button>
      </div> */}
      </div>
    );
  }
}
