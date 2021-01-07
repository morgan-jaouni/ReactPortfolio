import React from "react";
import "../App.css";
import { FaLinkedinIn, FaGit } from 'react-icons/fa';

function About() {
    return (
      <div>
        <div>
       
        <div class="fling-minislide">
        <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Football.png?raw=true" alt="Slide 1" />
        <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Chemistry.png?raw=true" alt="Slide 2" />
        <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Snow.png?raw=true" alt="Slide 3" />
        <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Brother.png?raw=true" alt="Slide 4" />
          </div>
        </div>
        <footer>
            <h3 class="contact">Contact</h3>
                <p class="email">Morgan.jaouni@ttu.edu</p>
                <div>
                <a class="social" href="https://www.linkedin.com/in/morgan-jaouni/">< FaLinkedinIn /></a>
                <a class="social" href="https://github.com/morgan-jaouni">< FaGit /></a>
                </div>
        </footer>
      </div>
    );
  }


  export default About;