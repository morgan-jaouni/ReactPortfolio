import React from "react";
import "../App.css";
import { FaGit } from 'react-icons/fa';

function Projects() {
    return (
      <div className="App">
          <div class="projects-container">
            <div class="projects-header">
            <h3>Current</h3>
            </div>
            <div>
             <a href="http://rocky-anchorage-99030.herokuapp.com">
             <img class="projects-img-anchor" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Current.png?raw=true" alt=""></img>
            </a>
            </div>
            <button class="projects-button">
                <a class="current-git" href="https://github.com/morgan-jaouni/CurrentBanking">< FaGit /></a>
              </button>
              <div class="projects-border"></div>
              <div class="technologies">
            <p class="p-tech">Technologies:</p>
            <p class="p-tech">MongoDB</p>
            <p class="p-tech">Express</p>
            <p class="p-tech">Node</p>
               </div>
            </div>
            <div class="projects-container">
            <h3 class="projects-header">Wayfarer</h3>
             <a class="projects-image" href="https://anywhere-else-app.herokuapp.com">
            <img class="projects-img-anchor" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Wayfarer.png?raw=true" alt=""></img>
            </a>
            <button class="projects-button">
                <a class="current-git" href="https://github.com/morgan-jaouni/Wayfarer">< FaGit /></a>
              </button>
              <div class="projects-border"></div>
              <div class="technologies">
            <p class="p-tech">Technologies:</p>
            <p class="p-tech">Python</p>
            <p class="p-tech">Django</p>
            <p class="p-tech">PostgreSQL</p>
               </div>
        </div>
            <div class="projects-container">
            <h3 class="projects-header">Believer</h3>
             <a class="projects-image" href="https://github.com/morgan-jaouni/Job-Tracker">
            <img class="projects-img-anchor" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Wayfarer.png?raw=true" alt=""></img>
            </a>
            <button class="projects-button">
                <a class="current-git" href="https://github.com/morgan-jaouni/Job-Tracker">< FaGit /></a>
              </button>
              <div class="projects-border"></div>
              <div class="technologies">
            <p class="p-tech">Technologies:</p>
            <p class="p-tech">MongoDB</p>
            <p class="p-tech">Express</p>
            <p class="p-tech">React</p>
            <p class="p-tech">Node</p>
               </div>
        </div>
            <div class="projects-container">
            <h3 class="projects-header">BlackJack</h3>
             <a class="projects-image" href="https://morgan-jaouni.github.io/Black-jack/">
            <img class="projects-img-anchor" src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Blackjack.png?raw=true" alt=""></img>
            </a>
            <button class="projects-button">
                <a class="current-git" href="https://github.com/morgan-jaouni/Black-jack">< FaGit /></a>
              </button>
              <div class="projects-border"></div>
              <div class="technologies">
            <p class="p-tech">Technologies:</p>
            <p class="p-tech">React</p>
            <p class="p-tech">Vanilla JavaScript</p>
               </div>
        </div>
      </div>
    );
  }


  export default Projects;