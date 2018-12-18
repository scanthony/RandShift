import React, { Component } from "react";

export class Person extends Component {
  render = () => {
    return (
      <div className="person" style={this.props.divStyle}>
        <h2>{this.props.name}</h2>
        <p>{this.props.grp}</p>
      </div>
    );
  };
}
