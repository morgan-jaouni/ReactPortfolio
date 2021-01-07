import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <nav class="navbar">
      <Link class="navlinks" to="/ReactPortfolio/Projects">Projects</Link>
      <Link class="navlinks" to="/ReactPortfolio">Home</Link>
      <Link class="navlinks" to="/ReactPortfolio/About">About</Link>
      </nav>
      <Index></Index>
    </div>
  );
}

export default App;
