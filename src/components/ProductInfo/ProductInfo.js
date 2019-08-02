import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Faq from "../Faq/Faq";
import data from "../../data/data";
import styles from "./ProductInfo.css";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {data.map(props => (
          <BrowserRouter>
            <div className="product row">
              <div className="col-4">
                <img src={props.image} alt={props.title} className="img" />
              </div>
              <div className="col-8">
                <navbar>
                  <label>Model:</label>
                  <NavLink to={"/faq/" + props.id}> {props.title} </NavLink>
                  <br />
                </navbar>
                <Route path={"/faq/" + props.id} component={Faq} />
                <p>
                  <label>Cena:</label> {props.price} zł
                </p>
                <label>Opis:</label>
                <div className="description">{props.description}</div>
              </div>
            </div>
          </BrowserRouter>
        ))}
      </>
    );
  }
}

export default ProductInfo;
