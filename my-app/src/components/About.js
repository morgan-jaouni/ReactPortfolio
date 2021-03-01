import React from "react";
import "../App.css";

function About() {
    return (
      <div>
        <div>
        <div class="about-div">
            <h1 class="about-header">About Me</h1>
            <div class="home-border"></div>
            <p class="about-me">I'm a full-stack Software Engineer from Austin, Texas! <br></br> When I'm not coding, I enjoy spending time on the lake, at the gym, or in the mountains. I am currently seeking collaborative Software Development roles! <br></br></p>
            <div>
            
            <div class="skills-div">
            <p class="skills">Programming Languages</p>
            <ul>
                <li class="skills-list">JavaScript</li>
                <li class="skills-list">Python</li>
                <li class="skills-list">HTML</li>
                <li class="skills-list">CSS</li>
            </ul>
            <p class="skills">Frameworks & Technologies</p>
            <ul>
                <li class="skills-list">Node.js</li>
                <li class="skills-list">React.js</li>
                <li class="skills-list">Axios</li>
                <li class="skills-list">MongoDb</li>
                <li class="skills-list">PostgreSQL</li>
                <li class="skills-list">Django</li>
                <li class="skills-list">Bootstrap</li>
            </ul>
            <a id="resume" href="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Resume.png">Resume</a>
            <p class="contact"> Contact: Morgan-jaouni@outlook.com</p>
            </div>
        </div>
        <div class="fling">
            <div class="fling-minislide">
                <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Brother.png?raw=true" alt="Slide 4" />
                <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Football.png?raw=true" alt="Slide 3" />
                <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Chemistry.png?raw=true" alt="Slide 2" />
                <img src="https://github.com/morgan-jaouni/ReactPortfolio/blob/main/my-app/public/Snow.png?raw=true" alt="Slide 1" />
            </div>
        </div>
            </div>
        </div>
        </div>
    );
  }


  export default About;