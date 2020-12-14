import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
        <Home />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
  }


  export default Index;