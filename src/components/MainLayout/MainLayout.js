import React, { Component } from "react";
import Header from "../Header/header";

export class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
