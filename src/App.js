import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from "./components/MainLayout/MainLayout";
import  Home  from "./components/Home/Home";
import {NoMatch} from "./components/NoMatch/NoMatch";
import  ProductInfo from "./components/ProductInfo/ProductInfo";
import { Products } from "./components/Products/Products";
import { Faq } from "./components/Faq/Faq";
import { Regulations } from "./components/Regulations/Regulations";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";


class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
       <MainLayout>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/faq"} component={Faq}/>
            <Route exact path={"/regulations"} component={Regulations}/>
            <Route exact path={"/product"} component={Products}/>
            <Route exact path={"/product/:id"} component={ProductInfo} />
            <Route exact path={"/contact"} component={Contact}/>
            <Route exact path={" "} component={NoMatch} />
          </MainLayout>
      </BrowserRouter>
      <Footer/>
      </>
    );
  }
}

export default App;
