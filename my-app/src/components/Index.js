import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
            <Route exact path="/ReactPortfolio/Projects" component={Projects} />
            <Route exact path="/ReactPortfolio" component={Home} />
        </Switch>
    );
  }


  export default Index;