import React from "react";
import "./App.css";
import "./styles/projects.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/nav.css";
import { Link } from 'react-router-dom';
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <nav class="navbar">
      <Link class="navlinks" to="/">Home</Link>
      <Link class="navlinks" to="/Projects">Projects</Link>
      <Link class="navlinks" to="/About">About</Link>
      </nav>
      <Index>
      </Index>
    </div>
  );
}

export default App;
