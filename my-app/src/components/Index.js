import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
            <Route exact path="/ReactPortfolio/Projects" component={Projects} />
            <Route exact path="/ReactPortfolio" component={Home} />
            <Route exact path="/ReactPortfolio/About" component={About} />
        </Switch>
    );
  }


  export default Index;