import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout/MainLayout";
import  Home  from "./components/Home/Home";
import {NoMatch} from "./components/NoMatch/NoMatch";
import { ProductInfo} from "./components/Products/ProductInfo";
import { Products } from "./components/Products/Products";
import { Faq } from "./components/Faq/faq";
import { Regulations } from "./components/Regulations/Regulations";
import { Footer } from "./components/Footer/Footer";


class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
       <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/faq"} component={Faq}/>
            <Route exact path={"/regulations"} component={Regulations}/>
            <Route exact path={"/product"} component={Products}/>
            <Route exact path={"/product/:id"} component={ProductInfo} />
            <Route component={NoMatch} />
          </Switch>
          </MainLayout>
      </BrowserRouter>
      <Footer/>
      </>
    );
  }
}

export default App;
