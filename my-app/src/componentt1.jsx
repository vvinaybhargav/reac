import React, { Component } from "react";
import Componentt from "./componentt";

class Componentt1 extends Component {
  state = {
    countes: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleDelete = counterId => {
    const counters1 = this.state.countes.filter(c => c.id !== counterId);
    this.setState({ countes: counters1 });
  };

  render() {
    return (
      <div>
        {this.state.countes.map(counte => (
          <Componentt
            key={counte.id}
            value={counte.value}
            onDelete={this.handleDelete}
            selected={true}
            id={counte.id}
          />
        ))}
      </div>
    );
  }
}

export default Componentt1;
