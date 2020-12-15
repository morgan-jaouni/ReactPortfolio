import React from "react";
import "../App.css";
import { FaLinkedinIn, FaGit } from 'react-icons/fa';

function Projects() {
    return (
      <div className="App">
          <div class="projects">
            <h3 class="current-header">Current v1.0</h3>
            <p>Banking web application built with MongoDB, Express, Node</p>
             <a class="anchor-image" href="http://rocky-anchorage-99030.herokuapp.com">
            <img class="current" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Current.png?raw=true" alt=""></img>
            </a>
            </div>
            <div class="blackjack-container">
            <h3 class="current-header">BlackJack</h3>
            <p>React.js blackjack game</p>
             <a class="blackjack-image" href="https://morgan-jaouni.github.io/Black-jack/">
            <img class="blackjack-img" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Blackjack.png?raw=true" alt=""></img>
            </a>
        </div>
            <div class="blackjack-container">
            <h3 class="current-header">Project Wayfarer</h3>
            <p>Post images of your travels and view other users posts - Python,Django,PostgreSQL</p>
             <a class="blackjack-image" href="https://github.com/morgan-jaouni/Wayfarer">
            <img class="blackjack-img" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Wayfarer.png?raw=true" alt=""></img>
            </a>
        </div>
      </div>
    );
  }


  export default Projects;