import React, { Component } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data/data";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { BrowserRouter, Route } from "react-router-dom";
import Faq from "./components/Faq/Faq";
import Regulations from "./components/Regulations/Regulations";
import Contact from "./components/Contact/Contact";
import ProductInfo from "./components/ProductInfo/ProductInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key, method) {
    function change(a, b) {
      //var A = a.Name.toLowerCase();
      // var B = b.Name.toLowerCase();

      if (key === "title") {
        var A = a.title;
        var B = b.title;
      } else if (key === "price") {
        A = a.price;
        B = b.price;
      }

      if (method === "asc") {
        if (A > B) {
          return 1;
        } else if (A < B) {
          return -1;
        } else {
          return 0;
        }
      } else if (method === "desc") {
        if (A < B) {
          return 1;
        } else if (A > B) {
          return -1;
        } else {
          return 0;
        }
      }
    }

    function SortElements(data) {
      return data.sort(change);
    }

    this.setState(SortElements(data));
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <MainLayout>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/product"} Component={ProductInfo} />
            <Route exact path={"/regulations"} component={Regulations} />
            <Route exact path={"/contact"} component={Contact} />
          </MainLayout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
