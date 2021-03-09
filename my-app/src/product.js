import React, { Component } from "react";
import "./App.css";

class Product extends Component {
  render() {
    return (
      <div className="card product">
        <h4 className="card-title">{this.props.title}</h4>
        <h6 className="card-text">{this.props.price}</h6>
      </div>
    );
  }
}

export default Product;
