import React from "react";
import Home from "../Home/Home";
import data from "../../reducers/ProductsListReducer";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,   
      direction: {
        Name: "asc"
      }
    };
    console.log(data);
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: data.sort((data) =>
        this.state.direction[key] === "asc"
          
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Home data={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default Sort;
