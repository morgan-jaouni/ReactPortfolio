import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projects} />
        </Switch>
    );
  }


  export default Index;