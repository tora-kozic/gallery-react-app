import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header, Coverpage, Aboutpage, Workspage, Storepage } from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { computeHeadingLevel } from "@testing-library/dom";

ReactDOM.render(
  <Router>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Coverpage} />
        <Route exact path="/home" component={Coverpage} />
        <Route exact path="/about" component={Aboutpage} />
        <Route exact path="/works" component={Workspage} />
        <Route exact path="/store" component={Storepage} />
        {/* <Route exact path="/store/cart" component={Cart} /> */}
      </Switch>
    </main>
  </Router>,
  document.getElementById("root")
);
