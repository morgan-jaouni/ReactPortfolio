import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch,Route } from "react-router-dom";

function Index() {
    return (
        <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
  }


  export default Index;