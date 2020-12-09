import React from "react";
import Home from "./Home";
import About from "./About";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
        </Switch>
    );
  }


  export default Index;