import React, { Component } from "react";

import "./App.css";
import HttpService from "./httpservice";
import Product from "./product";
var http = new HttpService();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({ products: data });
    });
  };

  productList = () => {
    const list = this.state.products.map(product => (
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} />
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div className="App">
        <div className="row">{this.productList()}</div>
      </div>
    );
  }
}

export default App;
