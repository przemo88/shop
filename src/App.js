import React, { Component } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data/data";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Faq from "./components/Faq/Faq";
import Regulations from "./components/Regulations/Regulations";
import Contact from "./components/Contact/Contact";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import NoMatch from "./components/NoMatch/NoMatch";
import SingleProduct from "./components/SingleProduct/SingleProduct";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/product"} component={ProductInfo} />
            <Route exact path={"/product/:id"} component={SingleProduct} />
            <Route exact path={"/regulations"} component={Regulations} />
            <Route exact path={"/contact"} component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
