import React from "react";
import "../App.css";
import { FaLinkedinIn, FaGit } from 'react-icons/fa';

function Home() {
    return (
      <div>
        <div class="homesection">
            <h1>Morgan Jaouni</h1>
                <h2>Full-Stack Software Engineer</h2>

        <div class="fling-minislide">
        <img src="./Football.png" alt="Slide 1" />
        <img src="./Chemistry.png" alt="Slide 2" />
        <img src="./Snow.png" alt="Slide 3" />
        <img src="./Brother.png" alt="Slide 4" />
          </div>
        </div>
        <footer>
            <h3 class="contact">Contact</h3>
                <p>Morgan.jaouni@ttu.edu</p>
                <p>(512) 820-5425</p>
                <div>
                <a class="social" href="https://www.linkedin.com/in/morgan-jaouni/">< FaLinkedinIn /></a>
                <a class="social" href="https://github.com/morgan-jaouni">< FaGit /></a>
                </div>
        </footer>
      </div>
    );
  }


  export default Home;