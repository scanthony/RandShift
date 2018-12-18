import React, { Component } from "react";
import { Person } from "./Person";

export class Group extends Component {
  render = () => {
    const hue = this.props.hue;
    const divStyle = {
      color: `hsl(${hue}, 25%, 25%)`,
      backgroundColor: `hsl(${hue}, 100%, 97%)`
    };

    return (
      <div className="group">
        {this.props.persons.map(person => (
          <Person
            key={person}
            name={person}
            grp={this.props.groupName}
            divStyle={divStyle}
          />
        ))}
      </div>
    );
  };
}
