import React, { Component } from "react";
import "./App.css";

class Componentt extends Component {
  state = {
    count: this.props.value,
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonm} className="btn btn-primary m-2">
          -
        </button>
        <div className={this.getBadges()}>{this.method()}</div>

        <button
          onClick={() => this.buttonp({ id: 1 })}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  buttonp = p => {
    this.setState({ count: this.state.count + 1 });
  };
  buttonm = () => {
    this.setState({ count: this.state.count - 1 });
  };

  getBadges() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "success";
    return classes;
  }
  method() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Componentt;
