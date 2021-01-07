import React from "react";
import "../App.css";
import { FaLinkedinIn, FaGit } from 'react-icons/fa';

function Home() {
    return (
      <div>
        <div class="homesection">
            <h1 class="home-header">Morgan Jaouni</h1>
                <h2>Full-Stack Software Engineer</h2>
                <p class="email">Morgan.jaouni@ttu.edu</p>
                <div>
                <button>
                <a class="social" href="https://www.linkedin.com/in/morgan-jaouni/">< FaLinkedinIn /></a>
                </button>
                <button>
                <a class="social" href="https://github.com/morgan-jaouni">< FaGit /></a>
                </button>
                </div>
        </div>
      </div>
    );
  }


  export default Home;