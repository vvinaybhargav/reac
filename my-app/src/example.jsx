import React, { Component } from "react";

class Ex extends Component {
  obj = {
    name: "vinay",
    age: 23,
    o() {
      console.log("o method");
    },
  };

  render() {
    return <div>Heyyyhy{this.obj.o()}</div>;
  }
}

export default Ex;
