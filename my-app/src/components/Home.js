import React from "react";
import "../App.css";

function Home() {
    return (
      <div>
        <div class="homesection">
            <h1>Morgan Jaouni</h1>
                <h3>Full-Stack Software Engineer</h3>

        <div class="fling-minislide">
        <img src="./Me.jpg" alt="Slide 1" />
        <img src="./Me.jpg" alt="Slide 2" />
        <img src="./Current.png" alt="Slide 3" />
        <img src="./Me.jpg" alt="Slide 4" />
          </div>
        <footer>
            <h3 class="contact">Contact</h3>
                <p>Morgan.jaouni@ttu.edu</p>
                <p>512-820-5425</p>
        </footer>
        </div>
      </div>
    );
  }


  export default Home;