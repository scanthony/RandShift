import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import "moment/locale/zh-cn";
import { Group } from "./components/Group";
import { initState, getTimestamp } from "./lib/initState";

class App extends Component {
  state = {
    grouping: [],
    hueStart: Math.floor(Math.random() * 360),
    timestamp: getTimestamp(),
    inputValue: ""
  };
  componentWillMount = () => {
    this.setState({ grouping: initState(this.state.timestamp) });
  };
  generateHue = () => {
    let n = Math.max(this.state.grouping.length, 2);
    n = Math.min(n, 6);
    const groupingWithHue = this.state.grouping.map((group, idx) => ({
      ...group,
      hue: (this.state.hueStart + (idx * 360) / (n + 0.5)) % 360
    }));
    return groupingWithHue;
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.generateNewResult();
  };

  generateNewResult = () => {
    const newTimestamp = getTimestamp(this.state.inputValue.toString());
    this.setState({
      timestamp: newTimestamp,
      grouping: initState(newTimestamp)
    });
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    this.setState({ inputValue: value }, () => {
      if (value.length === 8) {
        this.generateNewResult();
      }
    });
  };

  render = () => {
    const groupingWithHue = this.generateHue();
    return (
      <div className="App">
        <header>
          <h1>分组结果</h1>
          <form className="input-form" onSubmit={this.handleSubmit}>
            <span>输入待查询的日期:</span>
            <br />
            <input
              id="input-date"
              type="number"
              onChange={this.handleInputChange}
              placeholder="格式：20181130"
              value={this.state.inputValue}
            />
          </form>
          {this.state.timestamp === "ERROR: INVALID DATE" ? (
            <br />
          ) : (
            <p className="date">
              实际查询日期：
              <br />
              {moment(
                `${this.state.timestamp}  16:56 +00:00`,
                "YYYY-MM-DD HH:mm Z"
              )
                .utc()
                .locale("zh-cn")
                .format("LL")}
            </p>
          )}
        </header>
        {this.state.timestamp === "ERROR: INVALID DATE" ? (
          <p>日期错误！</p>
        ) : (
          <div>
            {groupingWithHue.map(group => (
              <Group
                key={group.groupName}
                groupName={group.groupName}
                persons={group.persons}
                hue={group.hue}
              />
            ))}
          </div>
        )}
      </div>
    );
  };
}

export default App;
