import React from "react";
import "../App.css";

function Projects() {
    return (
      <div className="App">
          <div class="projects">
            <h3 class="current-header">Current v1.0</h3>
            <p>Banking web application built with MongoDB, Express, Node</p>
           <a class="anchor-image" href="http://rocky-anchorage-99030.herokuapp.com">
            <img class="current" src="./Current.png" alt=""></img>
            </a>
        </div>
      </div>
    );
  }


  export default Projects;