import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Faq from "../Faq/Faq";
import data from "../../data/data";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {data.map(row => (
          <BrowserRouter>
            <div>
              <navbar>
                <NavLink to={"/faq/" + row.id}>link</NavLink>
                <br />
              </navbar>

              <Route path={"/faq/" + row.id} component={Faq} />
              <p>{row.title}</p>

              <p>{row.price}</p>
              <img src={row.image} />
            </div>
          </BrowserRouter>
        ))}
      </>
    );
  }
}

export default ProductInfo;
