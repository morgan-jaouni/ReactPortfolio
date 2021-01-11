import React from "react";
import "../App.css";

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
          <div class="about-container">
            <h3 class="about-header">About</h3>
              <div class="about-p">
            <p class="about-me">I love Software, Science, & Sports! When I'm not coding, I can be found on the lake, in the gym, at the beach, or in the mountains. I am currently seeking collaborative Software Development roles!  </p>
               </div>
        </div>
        </div>
      </div>
    );
  }


  export default About;