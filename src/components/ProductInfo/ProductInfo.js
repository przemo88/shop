import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import data from "../../data/data";
import styles from "./ProductInfo.css";
import SingleProduct from '../SingleProduct/SingleProduct';

class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {data.map(val => (
          <BrowserRouter>
            <div className="product row">
              <div className="col-4">
                <img src={val.image} alt={val.title} className="img" />
              </div>
              <div className="col-8">
                <navbar>
                  <label>Model:</label>
                  <NavLink to={"/product/" + val.id}> {val.title} </NavLink>
                  <br />
                </navbar>
                <Route path={"/product/" + val.id} component={SingleProduct} />
                <p>
                  <label>Cena:</label> {val.price} zł
                </p>
                <label>Opis:</label>
                <div className="description">{val.description}</div>
              </div>
            </div>
          </BrowserRouter>
        ))}
      </>
    );
  }
}

export default ProductInfo;